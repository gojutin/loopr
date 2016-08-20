# loopr
##A minimal JavaScript library that provides chainable methods for arrays.

The **loopr** constructor can be accessed one of two ways.

```
var myLooprObject = Loopr(arr);
```

```
var myLooprObject = l$(arr);
```

You use the constructor to create a custom **loopr** array object that provides you with several useful methods. 

The **loopr** constructor accepts two arguments.

```
Loopr(arr, callback);
```

**arr-** The lowest number that you want the random number to be. The default value is 0.

**callback-**(optional) The highest number that you want the random number to be. The default value is 100.
