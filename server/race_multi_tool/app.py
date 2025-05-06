""" Define all the pace conversion APIs """
from flask import Flask, request, jsonify
from flask_cors import CORS

from .api.pace_functions import (
    convert_speed_api,
    convert_pace_api
)

from .api.user_data import (
    get_user_data_by_id_api
)

from .api.activities import (
    create_new_activity_api
)

from .db.db import DatabaseConnection
from .models.user import User

app = Flask(__name__)
cors = CORS(app, origin="*")
db = DatabaseConnection()

@app.route("/register_user", methods=["POST"])
def register_user():
    """ Handles user registration  """
    user = User(db)

    email = request.form.get("email")
    password = request.form.get("password")
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")

    if user.email_exists(email):
        return jsonify({"Error": "email already in use"})

    result = user.insert_user(email, password, first_name, last_name)

    if result == "Error":
        return jsonify({result: "An error occurred"})

    return jsonify({result: "User registered successfully"})

@app.route("/login")
def login():
    """ Handles user login  """
    # email = request.json("email")
    # password = request.json("password")

@app.route("/convert_speed", methods=["GET"])
def convert_speed():
    """ Converts input speed (e.g., km/hr) to pace (e.g., min/km) """
    # e.g., 10
    speed = request.args.get("speed")

    # e.g., miles/hr
    input_units = request.args.get("input_units")

    # e.g., min/km
    output_units = request.args.get("output_units")

    result = convert_speed_api(speed, input_units, output_units)

    return jsonify(result)

@app.route("/convert_pace", methods=["GET"])
def convert_pace():
    """ Converts input pace (e.g., min/km) to speed (e.g., km/hr) """
    # e.g., 10:00, 4:50
    pace = request.args.get("pace")

    # e.g., min/km
    input_units = request.args.get("input_units")

    # e.g., km/hr
    output_units = request.args.get("output_units")

    result = convert_pace_api(pace, input_units, output_units)

    return jsonify(result)

@app.route("/get_user_data", methods=["GET"])
def get_user_data():
    " Gets user data based on id "
    user_id = request.args.get("user_id")

    data = get_user_data_by_id_api(user_id)

    return jsonify(data)

@app.route("/create_new_activity", methods=["POST"])
def create_new_activity():
    """ Creates new activity based on supplied data """
    form_data = request.json
    create_new_activity_api(form_data)
    return jsonify({"status": 200})


if __name__ == 'main':
    app.run(debug=True)
