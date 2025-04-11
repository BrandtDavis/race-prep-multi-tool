""" Queries to interact specifically with the 'users' table """

from .db import DatabaseConnection

def get_user_by_id(id_num: int):
    """ Get a specific user based on their ID """
    db_connection = DatabaseConnection()
    conn = db_connection.get_connection()

    cur = conn.cursor()

    cur.execute(f"SELECT * FROM users WHERE id = {id_num}")
    return cur.fetchone()
