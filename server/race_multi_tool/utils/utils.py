""" This module stores the main 'commonly' used or misc. functions """

import math

SPEED_UNITS = ["km/hour", "miles/hour"]
PACE_UNITS = ["min/km", "min/mile"]

MILES_TO_KM = 1.60934

def convert_pace_to_speed(pace: str, current_unit: str, desired_unit: str):
    """ Converts pace (e.g., mins/km) to speed (e.g., miles/hour) """
    if pace == "0:00":
        return "0.00"

    distance = 0

    unformatted_pace = calculate_unformatted_pace(pace)

    current_distance_unit = get_distance_unit(current_unit)
    desired_distance_unit = get_distance_unit(desired_unit)


    if current_distance_unit == "Error":
        return "Error: input distance units have invalid format"

    if desired_distance_unit == "Error":
        return "Error: output distance units have invalid format"

    unit_const = 1.0
    if current_distance_unit != desired_distance_unit:
        unit_const = MILES_TO_KM if current_distance_unit == 'km' else 1 / MILES_TO_KM

    distance = calculate_distance_per_hour(unformatted_pace, unit_const)

    return f"{distance:.2f}"

def convert_speed_to_pace(distance: int, current_unit: str, desired_unit: str):
    """ Converts pace from km/hour or miles/hour to mins/km or mins/mile """

    current_distance_unit = get_distance_unit(current_unit)
    desired_distance_unit = get_distance_unit(desired_unit)

    if current_distance_unit == "Error":
        return "Error: input distance units have invalid format"

    if desired_distance_unit == "Error":
        return "Error: output distance units have invalid format"

    if distance == 0:
        return f"0:00/{desired_distance_unit}"

    unit_const = 1.0
    mins_per_dist_unit = 60.0 / float(distance)
    if current_distance_unit != desired_distance_unit:
        unit_const = MILES_TO_KM if current_distance_unit == 'km' else 1 / MILES_TO_KM

    mins = calc_pace_minutes(mins_per_dist_unit, unit_const)
    seconds = calc_pace_seconds(mins_per_dist_unit, unit_const)

    return f"{mins}:{seconds}/{desired_distance_unit}"

def calculate_unformatted_pace(pace: str):
    """ convert formatted time string to a numeric value.  e.g., 4:30 -> 4.5 """
    minutes, seconds = float(pace.split(":")[0]), float(pace.split(":")[1])
    seconds = seconds / 60

    return minutes + seconds

def calculate_distance_per_hour(pace: int, unit_const: int):
    """ convert from min/unit pace to hourly distance.  e.g., min/km => km/hour """
    return 60 / (pace * unit_const)

def get_distance_unit(unit: str):
    """ return the distance unit for a given pace unit """
    pace_units = unit.split("/")

    if len(pace_units) == 1:
        return "Error"

    if pace_units[0] == "km" or pace_units[0] == "miles":
        return "km" if pace_units[0] == "km" else "mile"

    return pace_units[1]

def calc_pace_minutes(mins, unit_const: float):
    """ calculates the number of minutes per unit of distance to the nearest whole minute """
    return math.floor(mins * unit_const)

def calc_pace_seconds(mins, unit_const: float):
    """ calculates the seconds based on fractional minutes """
    seconds = (mins * unit_const) % 1 * 60
    seconds = math.floor(seconds + 0.5)

    if len(str(seconds)) == 1:
        seconds = f"{seconds}0"

    return seconds
