public class Lilypad {
  public float Latlon { get; set; }
  public bool Pad { get; set; }
  public bool Free { get; set; }
  public string Comments { get; set; }

  public Lilypad(bool pad, bool free, float latlon, string comments) {
    Latlon = latlon;
    Pad = pad;
    Free = free;
    Comments = comments;
  }

  public void addPad(Lilypad lp) {
    // add to database
  }
}
