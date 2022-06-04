function rgb(r, g, b){
  function componentToHex(c) {
    var hex = c.toString(16);
    if(c >= 0 && c < 256) {
      return hex.length == 1 ? "0" + hex : hex;
    }else if(c < 0) {
      return '00'
    }else {
      return 'FF'
    }
  }
  return (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase()
}
