""" Define all the pace conversion APIs """
import math

from flask import Flask, request, jsonify
from flask_cors import CORS

from .utils.utils import (
    DISTANCES_PER_HOUR,
    MINUTES_PER_DISTANCE,
    convert_dist_per_hour_to_min_per_dist,
    convert_mins_per_dist_to_dist_per_hour,
    )

app = Flask(__name__)
cors = CORS(app, origin="*")

@app.route("/convert_pace", methods=["GET"])
def convert_pace():
    """ Converts input pace to desired format """
    # e.g., 10, 4:50
    pace = str(request.args.get("pace"))
    distance = float(request.args.get("distance"))

    # e.g., miles/hr
    input_units = str(request.args.get("input_units")).lower()

    # e.g., min/km
    desired_units = str(request.args.get("output_units")).lower()

    # TODO: error checking

    result = {}
    # logic
    if input_units in DISTANCES_PER_HOUR:
        desired_pace = convert_dist_per_hour_to_min_per_dist(
            distance,
            input_units,
            desired_units
        )
        result = {"result": desired_pace}

    if input_units in MINUTES_PER_DISTANCE:
        desired_pace = convert_mins_per_dist_to_dist_per_hour(pace, input_units, desired_units)
        result = {"result": desired_pace}

    return jsonify(result)


if __name__ == 'main':
    app.run(debug=True)
    