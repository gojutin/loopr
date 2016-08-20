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

**arr-** The array that you want to convert into a **loopr** object.

**callback-**(optional) A callback function to be invoked upon creation of your **loopr** object.

##Array Manipulation Methods

```
myLooprObject.begin(text);
```
