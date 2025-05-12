""" Handle CRUD actions for activities"""

from uuid import uuid4, UUID
import psycopg2
from ..db.db import DatabaseConnection


class Activity:
    """ Defines activity data, and related actions """

    conn: psycopg2.extensions.connection
    cur: psycopg2.extensions.cursor

    id: UUID

    def __init__(self, db: DatabaseConnection):
        self.conn = db.get_connection()
        self.cur = self.conn.cursor()

    def get_uuid(self):
        """ Return a uuid """
        return uuid4().hex

    def create_activity(self, db, activity_id):
        """ Get an activity """

    def get_activity(self, db, activity_id):
        """ Get an activity """
