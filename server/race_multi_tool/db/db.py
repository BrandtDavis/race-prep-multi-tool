""" Initialize DB connection """
import os
from dotenv import load_dotenv
import psycopg2

class DatabaseConnection:
    """ Class to instantiate when connecting to database """
    connection_string = None

    def __init__(self):
        load_dotenv()

        try:
            db_name = os.getenv('DB_NAME')
            db_username = os.getenv('DB_USERNAME')
            # db_password = os.getenv('DB_PASSWORD')
            db_port = os.getenv('DB_PORT')
        except KeyError as e:
            print("KeyError Exception -", e)

        self.connection_string = \
            f"dbname={db_name} user={db_username}  port={db_port}"
            # f"dbname={db_name} user={db_username} password={db_password} port={db_port}"

    def get_connection(self):
        """ Return DB connection """
        conn = psycopg2.connect(self.connection_string)
        print(conn)
        return conn
        # id_num = 1
        # cur.execute(f"SELECT * FROM users WHERE id={id_num};")
        # print(cur.fetchall())
