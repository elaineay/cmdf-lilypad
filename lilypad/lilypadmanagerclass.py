class LilypadManager:
    def __init__(self, allLilytypes):
        self.all_lilypads = #populate list with DB data

    def get_nearest_four(user_locn, radius, type, free):
        filtered_list = filter_type_and_cost(get_within_radius(user_locn, radius), type, free);

        if len(filtered_list) >= 4:
            return filtered_list[0:4]
        else:
            return filtered_list

    def get_within_radius(user_locn, radius):
        lilypads_within_radius = []

        for lp in self.all_lilypads:
            if SphericalGeometry.distance(user_locn, radius) <= radius:
                lilypads_within_radius.append(lp)

        return lilypads_within_radius

    def filter_type_and_cost(lilypads_within_radius, type, free):
        lilypads_with_type = []

        for lp in lilypads_within_radius:
            if lp.type == type and lp.free == free:
                lilypads_with_type.append(lp)

        return lilypads_with_type
