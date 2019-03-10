class LilytypeManager:
    def __init__(self, allLilytypes):
        self.all_lily_types = #populate list with DB data

    def get_nearest_four(user_locn, radius, type, free):
        filtered_list = filter_type_and_cost(get_within_radius(user_locn, radius), type, free);

        if len(filtered_list) >= 4:
            return filtered_list[0:4]
        else:
            return filtered_list

    def get_within_radius(user_locn, radius):
        lilytypes_within_radius = []

        for lp in self.all_lily_types:
            if SphericalGeometry.distance(user_locn, radius) <= radius:
                lilytypes_within_radius.append(lp)

        return lilytypes_within_radius

    def filter_type_and_cost(lilytypes_within_radius, type, free):
        lilytypes_with_type = []

        for lp in lilytypes_within_radius:
            if lp.type == type and lp.free == free:
                lilytypes_with_type.append(lp)

        return lilytypes_with_type
