import psycopg2

DBNAME = 'fxlpgmfa'
USER = 'fxlpgmfa'
PASSWORD = '5DxwRR6dUZ-7Oxyblm-j1xx6rDsRESYy'
HOST = 'isilo.db.elephantsql.com'
SELECT_SQL = ''' select * from locations '''
INSERT_SQL = ''' insert into locations values('{type}', '{cost}', '{lat}', '{lng}', default)'''


def get_connection():
    """
    Connects to PostgreSQL database
    :return: psycopg2 connection object
    """
    conn = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST)
    return conn if conn else psycopg2.Error


def get_location(connection):
    with connection.cursor() as cursor:
        cursor.execute(SELECT_SQL)
        rows = cursor.fetchall()
    return rows


def insert_location(connection, type, cost, lat, lng, name):
    with connection.cursor() as cursor:
        cursor.execute(INSERT_SQL.format(type=type, cost=cost, lat=lat, lng=lng, name=name))
        connection.commit()
