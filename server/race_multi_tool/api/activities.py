""" Functions related to activities, to be called by 'activities' API """

from ..db.db import DatabaseConnection

from ..db.activity_queries import (
    create_new_activiy
)

def create_new_activity_api():
    """ Calls function to create new activity """
    db = DatabaseConnection()
    res = create_new_activiy(db)
    print(res)
