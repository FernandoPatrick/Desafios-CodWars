function enough(cap, on, wait) {
  if(wait > cap - on) {
    return wait - (cap - on)
  }
  return 0
}