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
        try:
            request_data = json.loads(request.data)

            rows = [(row['Ingredient'], row['Recipe']) for row in request_data];

            cursor = mysql.connection.cursor()
            cursor.executemany(f'INSERT INTO Ingredients (Ingredient, Recipe) VALUES (%s, %s)', rows)
            mysql.connection.commit()
            cursor.close()
            return jsonify({"SUCCESS": "Successfully inserted data"})
        except Exception as e:
            app.logger.error(f"Error: {str(e)}")
            return jsonify({"Error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
