# where to start?

[x] When the app first loads, display a tile for each hog in the porker_data.js file. In the tile, display the `name` and `image` for each hog.

- Perhaps a paragraph tag displaying each hog's `name`

[x] When the user clicks on the hog tile, display the other details about the hog (its `specialty`, `weight`, `greased`, and `highest medal achieved`)

[x] Allow the user to filter the hogs that are **greased**

[] Allow the user to sort the hogs based on name or weight

what do we sort?

- the hogs array

1. how do we sort strings (names)?
   // .sort();
2. how do we sort numbers (weight)?
   //
   var numArray = [140000, 104, 99];
   numArray.sort(function(a, b) {
   return a - b;
   });

console.log(numArray);
