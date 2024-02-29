from flask import Flask, request, jsonify
import mysql.connector
import base64
from flask_cors import CORS
import os
import zipcode_info
from dotenv import load_dotenv

env_path = '/Users/colinjacobs/Desktop/fun/CapstoneWeb/capstone_2024.env'

# Load the environment variables from the specified file
load_dotenv(dotenv_path=env_path)
app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"*": {"origins": "*"}})
# Specify the path to your .env file


def get_db_connection():
    conn = mysql.connector.connect(
        user=os.getenv('DB_USER'), 
        password=os.getenv('DB_PASSWORD'), 
        host=os.getenv('DB_HOST'), 
        database=os.getenv('DB_NAME')
        
    )
    return conn


@app.route('/get-distributor', methods=['POST'])
def handle_get_distributor():
    data = request.get_json()  # Parse JSON data from request
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    return zipcode_info.get_distributor(data)  # Pass data to the function

    
if __name__ == '__main__':
    app.run(debug=True)

