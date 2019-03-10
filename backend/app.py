from flask import Flask
from flask import jsonify, request, make_response, send_from_directory
from flask_api import status

import database

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/api/find', methods=['GET'])
def find_locations():
    args = request.args
    type = args['type']
    cost = args['cost']
    lat = args['lat']
    lng = args['lng']
    radius = args['radius']
    with database.get_connection() as conn:
        rows = database.get_locations(conn, type, cost, lat, lng, radius)
    return jsonify(status=status.HTTP_200_OK, rows=rows) #k=v


@app.route('/api/add', methods=['POST'])
def add_location():
    args = request.args
    type = args['type']
    cost = args['cost']
    lat = args['lat']
    lng = args['lng']
    name = args['name']

    if lat and lng:
        with database.get_connection() as conn:
            database.insert_location(conn, type, cost, lat, lng, name)
    return jsonify(status=status.HTTP_200_OK)


if __name__ == '__main__':
    app.run()
