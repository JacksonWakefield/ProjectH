from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import json
import requests


app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = "database-1.cjau6mammmxz.us-west-1.rds.amazonaws.com"
app.config['MYSQL_USER'] = "admin"
app.config['MYSQL_PASSWORD'] = "Barcelona_49!"
app.config['MYSQL_DB'] = "ProjectH"

mysql = MySQL(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    with app.app_context():
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM Ingredients")
        results = cursor.fetchall()
        return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)


URL = "http://127.0.0.1:5000/api/data"

try:
    response = requests.get(URL)
    if response.status_code == 200:
        print("Success! Here's the data:")
        print(response.json())  # Assuming your API returns JSON
    else:
        print(f"Failed with status code: {response.status_code}")
        print(response.text)  # Print the error message
except Exception as e:
    print(f"Error occurred: {e}")