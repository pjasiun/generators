# Generators vs iterable vs iterator

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.


In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a @@iterator key which is available via constant Symbol.iterator:


An object is an iterator when it implements a next() method with the following semantics...

# Profits:

 - prevent other developers from changing your collection,
 - stop code execution,
 - simplication.

# Problems:

 - you can not iterate twice,
 - no map, filter, tools...

# Links:

https://medium.com/content-uneditable/generators-motherf-r-do-you-use-them-a7b8d1014241#.ygbii07w7

https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/
https://hacks.mozilla.org/2015/05/es6-in-depth-generators/
https://hacks.mozilla.org/2015/07/es6-in-depth-generators-continued/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions

# Licence

This code is under [WTFPL](http://www.wtfpl.net/) licence.
