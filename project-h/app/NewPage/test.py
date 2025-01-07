import requests
import json


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