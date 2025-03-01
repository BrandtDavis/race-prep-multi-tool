""" Tests the utils module """
from ..utils.utils import (
    # DISTANCES_PER_HOUR,
    # MINUTES_PER_DISTANCE,
    convert_dist_per_hour_to_min_per_dist,
    convert_mins_per_dist_to_dist_per_hour,
    )


def test_convert_dist_per_hour_to_min_per_dist():
    """ Test pace to distance conversion """

    # same 'distance unit' tests
    assert convert_dist_per_hour_to_min_per_dist(0, "min/km", "km/hour") == "0:00/km"
    assert convert_dist_per_hour_to_min_per_dist(0, "min/mile", "miles/hour") == "0:00/mile"

    # different 'distance_unit' tests
    assert convert_dist_per_hour_to_min_per_dist(0, "min/mile", "km/hour") == "0:00/km"
    assert convert_dist_per_hour_to_min_per_dist(0, "min/km", "miles/hour") == "0:00/mile"

    # invalid 'distance_unit' tests - missing '/' character
    assert convert_dist_per_hour_to_min_per_dist(0, "minkm", "miles/hour") \
        == "Error: input distance units have invalid format"
    assert convert_dist_per_hour_to_min_per_dist(0, "min/km", "mileshour") \
        == "Error: output distance units have invalid format"


def test_convert_mins_per_dist_to_dist_per_hour():
    """ Test min/distance to distance/hour conversion """
    # same 'distance unit' tests
    assert convert_mins_per_dist_to_dist_per_hour("0:00", "km/hr", "min/km") == "0.00"
    assert convert_mins_per_dist_to_dist_per_hour("0:00", "miles/hr", "min/mile") == "0.00"

    # different 'distance_unit' tests
    assert convert_mins_per_dist_to_dist_per_hour("0:00", "km/hr", "min/mile") == "0.00"

    # invalid 'distance_unit' tests - missing '/' character
    assert convert_dist_per_hour_to_min_per_dist(0, "minkm", "miles/hour") \
        == "Error: input distance units have invalid format"
    assert convert_dist_per_hour_to_min_per_dist(0, "min/km", "mileshour") \
        == "Error: output distance units have invalid format"
