""" Functions to be called by the pace conversion routes """

from ..utils.utils import (
    SPEED_UNITS,
    PACE_UNITS,
    convert_speed_to_pace,
    convert_pace_to_speed,
    )

from ..utils.errors import (
    empty_param_error,
    invalid_param_value_error,
    invalid_param_format_error,
    param_type_error,
)

def convert_speed_api(speed: str, input_units: str, output_units: str):
    """ Converts input speed (e.g., km/hr) to pace (e.g., min/km) """
    if speed is None:
        return empty_param_error("speed")

    if input_units not in SPEED_UNITS:
        return invalid_param_value_error("input_units", SPEED_UNITS)

    if output_units not in PACE_UNITS:
        return invalid_param_format_error("output_units", PACE_UNITS)

    input_units = input_units.lower()
    output_units = output_units.lower()

    try:
        speed = float(speed)
    except ValueError:
        return param_type_error("speed", "number", str(speed))

    desired_pace = convert_speed_to_pace(speed, input_units, output_units)
    result = {"result": desired_pace}

    return result

def convert_pace_api(pace: str, input_units: str, output_units: str):
    """ Converts input pace (e.g., min/km) to speed (e.g., km/hr) """
    if pace is None:
        return empty_param_error("pace")

    if ":" not in pace:
        return invalid_param_format_error("pace", "minutes:seconds")

    input_units = input_units.lower()
    output_units = output_units.lower()

    result = {}
    if pace is not None and input_units in PACE_UNITS:
        desired_pace = convert_pace_to_speed(pace, input_units, output_units)
        result = {"result": desired_pace}

    return result
