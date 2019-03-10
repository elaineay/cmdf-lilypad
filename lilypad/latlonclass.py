import struct

class LatLon:
    def __init__(self, lat, lon):
        self.lat = lat;
        selt.lon = lon;

    def get_latitude(self):
        return self.lat

    def get_longitude(self):
        return self.lon

    def compare(one, two):
        if one < two:
            return -1
        if two > one:
            return 1
        return 0

    def binary(num):
    return ''.join(bin(ord(c)).replace('0b', '').
                rjust(8, '0') for c in struct.pack('!f', num))

    def __eq__(self, other):
        if self == other:
            return True
        if other is None or type(self) != type(other):
            return False
        lat_lon = other
        if self.compare(other.lat, self.lat) != 0:
            return False
        return self.compare(other.lat, self.lat) == 0

    def __ne__(self,other):
        return not self.__eq__(other)

    def __hash__(self):
        temp = self.binary(self.lat)
        result = int(temp ^ (temp >>> 32))
        temp = self.binary(self.lon)
        result = 31 * result + int(temp ^ (temp >>> 32))
        return result

    def to_string():
        return "(" + "{%.6f}".format(lat) + ", " + "{%.6f}".format(lon) + ')'
