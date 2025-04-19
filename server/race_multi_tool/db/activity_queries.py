""" Queries to interact specifically with the 'activities' table """

from .db import DatabaseConnection

def create_new_activiy(db: DatabaseConnection):
    """ Get a specific user based on their ID """
    conn = db.get_connection()
    cur = conn.cursor()

    res = cur.execute("""
                INSERT into activities (id, activity_name, activity_type, distance, units)
                VALUES (uuid_generate_v4(), 'Test', 'test', 20, 'km')
                """)

    print(res)
    conn.commit()
    return {""}
