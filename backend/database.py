import psycopg2

DBNAME = 'fxlpgmfa'
USER = 'fxlpgmfa'
PASSWORD = '5DxwRR6dUZ-7Oxyblm-j1xx6rDsRESYy'
HOST = 'isilo.db.elephantsql.com'
SELECT_SQL = ''' select * from locations where type='{type}' and cost='{cost}' and lat between '{lat_min}' 
and '{lat_max}' and lng between '{lng_min}' and '{lng_max}' limit 5 '''
INSERT_SQL = ''' insert into locations values(default, '{type}', '{cost}', '{lat}', '{lng}', '{name}')'''


def get_connection():
    """
    Connects to PostgreSQL database
    :return: psycopg2 connection object
    """
    conn = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST)
    return conn if conn else psycopg2.Error


def get_locations(connection, type, cost, lat, lng, radius):
    # create your radius to search with lat lng
    # your_function_goes_here(), then the return can be put into lat, lng OR
    # or however you choose to format it in your SQL query
    lat_min = float(lat) - int(radius)
    lat_max = float(lat) + int(radius)
    lng_min = float(lng) - int(radius)
    lng_max = float(lng) + int(radius)
    with connection.cursor() as cursor:
        cursor.execute(SELECT_SQL.format(type=type, cost=cost, lat_min=lat_min, lat_max=lat_max, lng_min=lng_min,
                                         lng_max=lng_max, radius=radius))
        rows = cursor.fetchall()
    return rows


def insert_location(connection, type, cost, lat, lng, name):
    with connection.cursor() as cursor:
        cursor.execute(INSERT_SQL.format(type=type, cost=cost, lat=lat, lng=lng, name=name))
        connection.commit()
