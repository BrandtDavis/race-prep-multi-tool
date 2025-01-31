from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origin="*")

@app.route("/hello", methods=['GET'])
def hello_world():
    data = {"user": "username"}
    return jsonify(data)

if __name__ == 'main':
    app.run(debug=True)
    