exports.mapover = function mapover() {
  let arrays = [],
      res = [],
      argix = 0,
      iterator;
  
  for (let len = arguments.length, key = 0; key < len; key++, argix++) {
    if (!Array.isArray(arguments[key])) break; 
    arrays.push(arguments[key]);
  }
  
  if (arrays.length < 2) {
    console.error("Use two or more arrays as input");
    return res;
  }
  if (typeof arguments[argix] !== "function") {
    console.error("Pass the iterator function as the argument following the arrays");
    return res;
  }
  
  iterator = arguments[argix++];
  
  for (let i = 0; i < Math.min.apply(Math, arrays.map(a => a.length)); i++) {
    res.push(iterator(...arrays.map((a) => (a[i]))))
  }
  
  return res;
}asdfasdfasdf
