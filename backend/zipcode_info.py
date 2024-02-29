from flask import Flask, request, jsonify
import mysql.connector
import base64
from flask_cors import CORS
import os
import main


def get_distributor(data):
    zip_code = data['zipCode']
    
    conn = main.get_db_connection()  # Ensure main is properly imported or accessible
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

