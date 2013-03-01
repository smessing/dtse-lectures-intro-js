var color_tiles = function() {

  var color_tile = function(i, j, delay) {
      var cell_id = String(i) + "-" + String(j);
      var cell_element = document.getElementById(cell_id);
      console.log("Processing cell: " + cell_id);
      var style = function() {
        cell_element.style.backgroundColor = "#da0002";
      };
      setTimeout(style,  delay * 100);
  };

  var delay = 1;
  for (var i = 1; i < 6; i++) {
    for (var j = 1; j < 6; j++) {
      color_tile(i, j, delay);
      delay += 1;
    }
  }
};

