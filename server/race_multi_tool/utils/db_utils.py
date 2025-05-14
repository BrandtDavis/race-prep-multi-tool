""" DB helper functions """
from uuid import uuid4

def get_uuid():
    """ Return a uuid """
    return uuid4().hex
