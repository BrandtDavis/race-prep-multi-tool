""" Define all the pace conversion APIs """
import math

from flask import Flask, request, jsonify
from flask_cors import CORS

from .utils import utils

app = Flask(__name__)
cors = CORS(app, origin="*")

MILES_TO_KM = 1.60934

@app.route("/miles_per_hour_to_mins_per_km", methods=['GET'])
def miles_per_hour_to_mins_per_km() -> jsonify:
    """ Converts miles per hour to minutes per km"""
    miles_per_hour = request.args.get("miles_per_hour")
    km_per_hour = float(miles_per_hour) * MILES_TO_KM

    mins_per_km = 60.0 / float(km_per_hour)

    # calculates fractional values as seconds
    mins = math.floor(mins_per_km)
    print("MINS: ", mins)
    seconds = utils.format_seconds(int((mins_per_km % 1) * 60))
    print("seconds: ", mins_per_km % 1 * 60)

    return jsonify({"min_per_km": f"{mins}:{seconds} per km"})

@app.route("/kms_per_hour_to_mins_per_km", methods=['GET'])
def kms_per_hour_to_mins_per_km():
    """ Converts km per hour to minutes per km"""
    km_per_hour = request.args.get("km_per_hour")
    mins_per_km = 60.0 / float(km_per_hour)

    # calculates fractional values as seconds
    mins = math.floor(mins_per_km)
    seconds = utils.format_seconds(int((mins_per_km % 1) * 60))

    return jsonify({"min_per_km": f"{mins}:{seconds} per km"})

@app.route("/convert_pace", methods=["GET"])
def convert_pace():
    """ Converts input pace to desired format """
    pace = float(request.args.get("pace"))
    input_units = float(request.args.get("input_units"))
    output_units = float(request.args.get("output_units"))

    # error checking

    # determine what math we need to do
    # parse input and output units to deterimine:
    # input time and distance units
    # output time and distance units

    # cases:
    # 1) min/x <-> min/y
    # 2) x/hr <-> y/hr
    # 3) x/hr <-> min/x
    # 4) min/x <-> y/hr



if __name__ == 'main':
    app.run(debug=True)
    