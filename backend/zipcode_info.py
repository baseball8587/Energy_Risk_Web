from flask import Flask, request, jsonify
import mysql.connector
import base64
from flask_cors import CORS
import os


app = Flask(__name__)

CORS(app)  # This will enable CORS for all routes and methods

import os
from dotenv import load_dotenv
import mysql.connector

# Load environment variables from .env file
load_dotenv()

def get_db_connection():
    conn = mysql.connector.connect(
        user=os.getenv('DB_USER'), 
        password=os.getenv('DB_PASSWORD'), 
        host=os.getenv('DB_HOST'), 
        database=os.getenv('DB_NAME')
    )
    return conn



@app.route('/get-distributor', methods=['POST'])
def get_distributor():
    data = request.json
    zip_code = data['zipCode']
    
    conn = get_db_connection()
    cursor = conn.cursor()

    # Query to find distributor_id for given zip_code
    cursor.execute("""
    SELECT d.name, d.image
    FROM distributors d
    JOIN zip_code_distributors zcd ON d.distributor_id = zcd.distributor_id
    JOIN zip_codes zc ON zcd.zip_code_id = zc.zip_code_id
    WHERE zc.zip_code = %s
    """, (zip_code,))
    result = cursor.fetchone()

    cursor.close()
    conn.close()

    if result:
        distributor_name, image_blob = result
        # Convert BLOB to a string for easy transmission
        image_base64 = base64.b64encode(image_blob).decode('utf-8') if image_blob else None
        return jsonify({'distributor': distributor_name, 'image': image_base64})
    else:
        return jsonify({'error': 'Distributor not found for provided ZIP code'}), 404

if __name__ == '__main__':
    app.run(debug=True)
