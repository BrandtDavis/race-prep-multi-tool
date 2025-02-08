""" This module stores the main 'commonly' used or misc. functions """

def convert_distance(distance: int, current_unit: str, desired_unit: str):
    """ Converts a distance from unit to another"""
    

def format_seconds(seconds: int):
    """ Applies proper formatting to the seconds value """
    if len(str(seconds)) == 1:
        return f"{seconds}0"
    return seconds
