""" Tests the utils module """
from ..utils.utils import (
    # DISTANCES_PER_HOUR,
    # MINUTES_PER_DISTANCE,
    convert_speed_to_pace,
    convert_pace_to_speed,
    )


def test_convert_speed_to_pace():
    """ Test pace to distance conversion """

    # same 'distance unit' tests
    assert convert_speed_to_pace(0, "min/km", "km/hour") == "0:00/km"
    assert convert_speed_to_pace(0, "min/mile", "miles/hour") == "0:00/mile"

    # different 'distance_unit' tests
    assert convert_speed_to_pace(0, "min/mile", "km/hour") == "0:00/km"
    assert convert_speed_to_pace(0, "min/km", "miles/hour") == "0:00/mile"

    # invalid 'distance_unit' tests - missing '/' character
    assert convert_speed_to_pace(0, "minkm", "miles/hour") \
        == "Error: input distance units have invalid format"
    assert convert_speed_to_pace(0, "min/km", "mileshour") \
        == "Error: output distance units have invalid format"


def test_convert_pace_to_speed():
    """ Test min/distance to distance/hour conversion """
    # same 'distance unit' tests
    assert convert_pace_to_speed("0:00", "km/hr", "min/km") == "0.00"
    assert convert_pace_to_speed("0:00", "miles/hr", "min/mile") == "0.00"

    # different 'distance_unit' tests
    assert convert_pace_to_speed("0:00", "km/hr", "min/mile") == "0.00"

    # invalid 'distance_unit' tests - missing '/' character
    assert convert_speed_to_pace(0, "minkm", "miles/hour") \
        == "Error: input distance units have invalid format"
    assert convert_speed_to_pace(0, "min/km", "mileshour") \
        == "Error: output distance units have invalid format"
