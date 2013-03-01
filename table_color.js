var color_tiles = function() {

  var color_tile = function(i, j, delay) {
      /* Create the id string for this table cell. */
      var cell_id = String(i) + "-" + String(j);
      /* Get the html cell element using the cell_id variable. */
      var cell_element = document.getElementById(cell_id);
      /* Print which cell the function is working on, for debugging
       * purposes. In chrome open View->Developer->JavaScript Console
       * to see the output. */
      console.log("Processing cell: " + cell_id);
      /* Create a function that will change the background color of the
       * cell. */
      var style = function() {
        /* We can reference variables defined outside the function.
         * This is a more advanced concept than it first appears, and
         * is called a "closure". */
        cell_element.style.backgroundColor = "#da0002";
      };
      /* Execute style after delay * 100 milliseconds have elapsed. */
      setTimeout(style,  delay * 100);
  };

  /* Initialize the delay to 1000 milliseconds (look above to see why
   * the number '1' corresponds to 1000 milliseconds. */
  var delay = 1;
  for (var i = 1; i < 6; i++) {
    for (var j = 1; j < 6; j++) {
      /* Switching i and j below will change the animation from being
       * row-by-row order to column-by-column order. */
      color_tile(i, j, delay);
      /* increase the delay by 1 second for the next table cell. */
      delay += 1;
    }
  }
};

