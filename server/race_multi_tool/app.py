""" Define all the pace conversion APIs """
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
    pace = request.args.get("pace")
    distance = request.args.get("distance")

    # e.g., miles/hr
    input_units = request.args.get("input_units")

    # e.g., min/km
    desired_units = request.args.get("output_units")

    if pace is None and distance is None:
        return jsonify(
            {
                "error": True,
                "message": "Error: one of 'pace' or 'distance' is required"
            }
        )

    if pace is not None and distance is not None:
        return jsonify(
            {
                "error": True,
                "message": "Error: only one of 'pace' or 'distance' can be used at a time"
            }
        )

    if distance is None and input_units in DISTANCES_PER_HOUR:
        return jsonify(
            {
                "error": True,
                "message": "Error: 'distance' must be provided for the given 'input_units'"
            }
        )

    if pace is None and input_units in MINUTES_PER_DISTANCE:
        return jsonify(
            {
                "error": True,
                "message": "Error: 'pace' must be provided for the given 'input_units'"
            }
        )

    input_units = input_units.lower()
    desired_units = desired_units.lower()

    result = {}
    # logic
    if distance is not None and input_units in DISTANCES_PER_HOUR:
        try:
            distance = float(distance)
        except ValueError:
            return jsonify(
            {
                "error": True,
                "message": f"Error: distance value must be a number, received: '{distance}'"
            }
        )

        desired_pace = convert_dist_per_hour_to_min_per_dist(distance, input_units, desired_units)
        result = {"result": desired_pace}

    if pace is not None and input_units in MINUTES_PER_DISTANCE:
        desired_pace = convert_mins_per_dist_to_dist_per_hour(pace, input_units, desired_units)
        result = {"result": desired_pace}

    return jsonify(result)


if __name__ == 'main':
    app.run(debug=True)
