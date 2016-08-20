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

###begin(string)
Append a string of text to the beginning of each element in your **loopr** array object.

```
myLooprObject.begin(string);
```

####end(string)
Append a string of text to the end of each element in your **loopr** array object.

```
myLooprObject.end(text);
```

###yell()
Convert each element in your **loopr** array object to upper case.

```
myLooprObject.yell();
```

###whisper()
Convert each element in your **loopr** array object to lower case.

```
myLooprObject.whisper();
```
###random()
Shuffle the order of the array elements in your **loopr** array object.

```
myLooprObject.random();
```

###object()
Convert your **loopr** array object into an object.

```
myLooprObject.object();
```
###math(operator, operand)
Perform math operations on each of the array elements in your **loopr** array object. 

```
myLooprObject.math(operator, operand);
```

The math() method accepts two arguments:

**operator-** Supports addition, subtraction, multiplication and division. ("+", "-", "*", "/")

**operand-** The number that you would like to use. 

Here is a simple example of the math() method.

```
var arr = [1, 2, 3, 4, 5];
var myNumbers = Loopr(arr);
myNumbers.math("*", 2);
```

##DOM Manipulation Methods
All of the DOM manipulations take one arguement, the **id** of the DOM node that you want to use to display the return value of the method. 

###ul(id)
Create an unordered list of all elements in your **loopr** array object and write to DOM node referenced by ID.

```
myLooprObject.ul("someId");
```

###ol(id)
Create an ordered list of all elements in your **loopr** array object and write to DOM node referenced by ID.

```
myLooprObject.ol("someId");
```

###p(id)
Create a paragraph for each element in your **loopr** array object and write to a DOM node referenced by ID.

```
myLooprObject.p("someId");
```

###div(id)
Create a div for each element in your **loopr** array object and write to a DOM node referenced by ID.

```
myLooprObject.div("someId");
```

##Console Methods

###log()
Log your **loopr** array object to the console as a normal array.

```
myLooprObject.log();
```

###log('list')
Log each your **loopr** array object elements to the console seperately. 

```
myLooprObject.log('list');
```

###log('table')
Log your **loopr** array object to the console as a table.

```
myLooprObject.log('table');
```

