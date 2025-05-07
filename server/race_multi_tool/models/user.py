""" Handle user registration, login, logout actions """

from uuid import uuid4, UUID
import psycopg2
from ..db.db import DatabaseConnection

class User:
    """ Defines user data and related methods """
    conn: psycopg2.extensions.connection
    cur: psycopg2.extensions.cursor

    id: UUID
    first_name: str
    last_name: str
    email:str

    def __init__(self, db: DatabaseConnection):
        self.conn = db.get_connection()
        self.cur = self.conn.cursor()

    def get_uuid(self):
        """ Return a uuid """
        return uuid4().hex

    def insert_user(self, email: str, password: str, first_name: str, last_name: str) -> str:
        """ Insert a new User to the DB """
        insert_query = """
            INSERT INTO users (id, email, password, first_name, last_name)
            VALUES (%s, %s, %s, %s, %s)
            returning id;
        """

        self.cur.execute(insert_query, (self.get_uuid(), email, password, first_name, last_name))

        new_row_id = self.cur.fetchone()
        if new_row_id is not None:
            self.conn.commit()
            return "Success"

        return "Error"

    def email_exists(self, email: str) -> bool:
        """ Determine if email is already in use """
        select_query = "SELECT * FROM users WHERE email = %s;"
        
        self.cur.execute(select_query, email)
        result = self.cur.fetchone()
        
        return result is not None

    def get_user_data(self, user_id: UUID):
        """ Query for a user with a given id """
        self.cur.execute(f"SELECT * FROM users WHERE id = '{user_id}'")
        return self.cur.fetchone()

    def update_user(self):
        """ Update a user's information """
