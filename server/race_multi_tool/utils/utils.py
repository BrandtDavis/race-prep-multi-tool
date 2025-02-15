""" This module stores the main 'commonly' used or misc. functions """

import math

DISTANCES_PER_HOUR = ["km/hour", "miles/hour"]
MINUTES_PER_DISTANCE = ["min/km", "min/mile"]

MILES_TO_KM = 1.60934

def convert_mins_per_dist_to_dist_per_hour(distance: int, current_unit: str, desired_unit: str):
    """ Converts pace from mins/km or mins/mile to km/hour or miles/hour """
    return 0

def convert_dist_per_hour_to_min_per_dist(distance: int, current_unit: str, desired_unit: str):
    """ Converts pace from km/hour or miles/hour to mins/km or mins/mile """
    mins = 0
    seconds = 0

    mins_per_dist_unit = 60.0 / float(distance)

    current_distance_unit = get_distance_unit(current_unit)
    desired_distance_unit = get_distance_unit(desired_unit)

    unit_const = 1.0
    if current_distance_unit != desired_distance_unit:
        unit_const = MILES_TO_KM if current_distance_unit == 'km' else 1 / MILES_TO_KM

    mins = get_pace_minutes(mins_per_dist_unit, unit_const)
    seconds = get_pace_seconds(mins_per_dist_unit, unit_const)

    return f"{mins}:{seconds}"

def get_distance_unit(unit: str):
    """ return the distance unit for a given pace unit """
    pace_units = unit.split("/")

    if pace_units[0] == "km" or pace_units[0] == "miles":
        return pace_units[0]

    return pace_units[1]

def get_pace_minutes(mins, unit_const: float):
    """ calculates the number of minutes per unit of distance to the nearest whole minute """
    return math.floor(mins * unit_const)

def get_pace_seconds(mins, unit_const: float):
    """ calculates the seconds based on fractional minutes """
    seconds = (mins * unit_const) % 1 * 60
    seconds = math.floor(seconds + 0.5)

    if len(str(seconds)) == 1:
        seconds = f"{seconds}0"

    return seconds
