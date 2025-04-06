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

app = Flask(__name__)
cors = CORS(app, origin="*")

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

if __name__ == 'main':
    app.run(debug=True)
