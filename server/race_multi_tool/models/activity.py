""" Handle CRUD actions for activities"""

from uuid import UUID
import psycopg2
from ..utils.db_utils import get_uuid
from ..db.db import DatabaseConnection


class Activity:
    """ Defines activity data, and related actions """

    conn: psycopg2.extensions.connection
    cur: psycopg2.extensions.cursor

    id: UUID

    def __init__(self, db: DatabaseConnection):
        self.conn = db.get_connection()
        self.cur = self.conn.cursor()

    def create_activity(self, activity_data):
        """ Get an activity """

        insert_query = """
            INSERT into activities (id, activity_name, activity_date, activity_type, distance, units)
            VALUES (uuid_generate_v4(), %s, %s, %s, %s, %s);
        """

        data = {"id": get_uuid()}

        data = get_uuid(), \
           activity_data["activity_name"], \
           activity_data["activity_date"], \
           activity_data["activity_type"], \
           activity_data["distance"], \
           activity_data["units"]

        self.cur.execute(insert_query, data)
        self.conn.commit()

    def get_activity(self, activity_id: UUID):
        """ Get an activity by ID """
        select_query = """
            SELECT *
            FROM activities
            WHERE id = %s
        """

        self.cur.execute(select_query, (activity_id))
        row = self.cur.fetchone()
        return row
