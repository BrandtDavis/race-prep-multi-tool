""" Functions related to user data to be called by 'user' APIs"""

from ..db.user_queries import (
    get_user_by_id
)

def get_user_data_by_id_api(id_num: int):
    """ Call DB query function to get user data"""
    user_data = {}

    data = get_user_by_id(id_num)

    user_data["id"] = data[0]
    user_data["first_name"] = data[1]
    user_data["last_name"] = data[2]

    return user_data
