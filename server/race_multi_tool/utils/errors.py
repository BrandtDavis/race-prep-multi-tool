""" Construct error messages in JSON format for APIs """
import json

def empty_param_error(param_name: str):
    """ JSON error message for empty parameter"""
    return json.dumps (
        {
            "error": True,
            "message": f"Error: '{param_name}' is required"
        }
    )

def invalid_param_value_error(param_name: str, valid_values: list):
    """ JSON error message for invalid parameter """
    return json.dumps (
        {
            "error": True,
            "message": f"Error: '{param_name}' must be one of the following values: {valid_values}"
        }
    )

def invalid_param_format_error(param_name: str, valid_format: str):
    """ JSON error message for invalid parameter format"""
    return json.dumps (
        {
            "error": True,
            "message": f"Error: '{param_name}' must be in the following format: {valid_format}"
        }
    )

def param_type_error(param_name: str, expected_type: str, value_received: str):
    """ JSON error message for invalid parameter type """
    return json.dumps (
        {
            "error": True,
            "message": 
                f"Error: '{param_name}' must be of type {expected_type}, received {value_received}"
        }
    )
