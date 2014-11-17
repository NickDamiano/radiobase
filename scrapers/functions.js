
Function.prototype.curry = function () {
  var slice = Array.prototype.slice
  var fn = this
  var args = slice.call(arguments)
  return function () {
  	var moreArgs = slice.call(arguments)
    fn.apply(this, args.concat(moreArgs))
  }
}
