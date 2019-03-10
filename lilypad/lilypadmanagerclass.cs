public class LilypadManager {
List<Lilypad> allLilyPads;
public LilypadManager() {
  allLilyPads = new ArrayList<Lilypad>();
  //populate list with data from DB
}

public List<Lilypad> getNearestFour(LatLon userLocn, double radius, bool pad, bool free) {
  List<Lilypad> filteredList = filterTypeAndCost(getWithinRadius(userLocn, radius), bool pad, bool free);
  if (filteredList.count >= 4) {
    return filteredList.sublist(0,4);
  } else {
    return filteredList;
  }
}

public List<Lilypad> getWithinRadius(LatLon userLocn, double radius) {
  List<Lilypad> lilypadsWithinRadius = new ArrayList<LilyPad>();
  //Jess' code to query database for getting all LilyPad records
  //put into allLilyPads
  for (Lilypad lp : allLilyPads) {
    double distance = SphericalGeometry.distanceBetween(userLocn, lp);
    if (lp <= userLocn) {
      lilypadsWithinRadius.add(lp);
    }
  }
    return lilypadsWithinRadius;
  }

public List<Lilypad> filterTypeAndCost(List<Lilypad> lilypadsWithinRadius, bool pad, bool free) {
  List<Lilypad> lilypadsWithType = new ArrayList<LilyPad>();

  for (Lilypad lp : lilypadsWithinRadius) {
    if (lp.Pad == pad && lp.free == free) {
      lilypadsWithType.add(lp);
    }
  }
  return lilypadsWithType;
}

}
