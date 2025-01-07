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

@app.route('/api/data/get', methods=['GET'])
def get_data():
    with app.app_context():
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM Ingredients")
        results = cursor.fetchall()
        return jsonify(results)

@app.route('/api/data/post', methods=['GET', 'POST'])
def post_data():
    with app.app_context():
        request_data = json.loads(request.data)

        cursor = mysql.connection.cursor()
        cursor.execute(f'INSERT INTO Ingredients (Ingredient, Recipe) VALUES ({request_data['Ingredient']},{request_data['Recipe']})')
        results = cursor.fetchall()
        return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
