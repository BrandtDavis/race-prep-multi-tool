""" Initialize DB connection """
import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

try:
    db_name = os.getenv('DB_NAME')
    db_username = os.getenv('DB_USERNAME')
    db_password = os.getenv('DB_PASSWORD')
    db_port = os.getenv('DB_PORT')
except KeyError as e:
    print("KeyError Exception -", e)

conn_string = f"dbname={db_name} user={db_username} password={db_password} port={db_port}"

conn = psycopg2.connect(conn_string)
