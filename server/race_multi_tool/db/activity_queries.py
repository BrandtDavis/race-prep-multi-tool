""" Queries to interact specifically with the 'activities' table """
from .db import DatabaseConnection

def get_activity(db: DatabaseConnection, activity_id):
    """ Get activity data by ID """
    conn = db.get_connection()
    cur = conn.cursor()

    insert_query = "SELECT * FROM activities WHERE id = %s"
    cur.execute(insert_query, (activity_id,))
    return {""}


def create_new_activiy(db: DatabaseConnection, activity_data):
    """ Get a specific user based on their ID """
    conn = db.get_connection()
    cur = conn.cursor()

    insert_query = """
                INSERT into activities (id, activity_name, activity_date, activity_type, distance, units)
                VALUES (uuid_generate_v4(), %s, %s, %s, %s, %s);
            """

    data = activity_data["activity_name"], \
           activity_data["activity_date"], \
           activity_data["activity_type"], \
           activity_data["distance"], \
           activity_data["units"]

    print(data)
    cur.execute(insert_query, data)
    conn.commit()
    return {""}
