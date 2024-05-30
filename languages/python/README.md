# Python

Click [here](../coding/beginner-programming-courses.md) for beginner material.

Click [here](../coding/object-oriented-design.md) for Object Oriented Design material.


This page is for resources which don't fit into the above categories!

1. [Python home page](https://www.python.org/)

1. [ItsMyCode: Srinivas Ramakrishna | List of Free Python Books | 2021](https://itsmycode.com/list-of-free-python-books/)

1. [Guido van Rossum, Barry Warsaw, Alyssa Coghlan | PEP 8 – Style Guide for Python Code | 2001](https://peps.python.org/pep-0008/)

1. How to fudge OOP encapsulation in Python
   - [Python Software Foundation | Built-in Functions: property](https://docs.python.org/3/library/functions.html#property)
   - [Medium: Gianpiero Andrenacci | Understanding Encapsulation in Object-Oriented Programming with Python | 2024](https://medium.com/data-bistrot/understanding-encapsulation-in-object-oriented-programming-with-python-b7a65c994902)
   - [Real Python: Leodanis Pozo Ramos | Python's property(): Add Managed Attributes to Your Classes | 2021-2023](https://realpython.com/python-property/)
   - [python-course.eu: Bernd Klein | 3. Properties vs. Getters and Setters | 2023](https://python-course.eu/oop/properties-vs-getters-and-setters.php)
   - Hence my interpretation of Python encapsulation is:
     * For fields with read/write access from outside the class, use `.field`
     * For protected/private fields never accessed outside the class, use `._field` or `.__field`
     * For protected/private read-only fields, use `._field` or `.__field` with an `@property` getter method
     * For fields with read/write access from outside the class where setter validation is needed, use
       `._field` or `.__field` with `@field.setter` setter method (and usually an `@property` getter method)
     * Gotcha: Within the class's constructor (and other methods) the statement `self.field = ...`
       does *not* mean we are using `.field` if we have defined an `@field.setter` setter method
       for that field! We are actually using the `._field` or `.__field` used within `@field.setter`
       (and `@property`) methods. In fact, if we were to use `self._field = ...` or `self.__field = ...`
       within the constructor (or elsewhere) we would be bypassing any validation in the `@field.setter`!

1. Object/data serialisation
   - [Python Software Foundation | pickle — Python object serialization](https://docs.python.org/3/library/pickle.html#module-pickle)
     * Performance... *the pickle module has a transparent optimizer written in C*.
       I understand (from [this](https://askubuntu.com/questions/742782/how-to-install-cpickle-on-python-3-4) post)
       that Python3 will use the fast (cPickle) version if it can.
   - [Python Module of the Week: Doug Hellmann | pickle — Object Serialization | 2016](https://pymotw.com/3/pickle/index.html)
   - Stack Overflow posts re
     [example of how to save an object (2012-2023)](https://stackoverflow.com/questions/11218477/how-can-i-use-pickle-to-save-a-dict-or-any-other-python-object/33245595)
     and 
     [cPickle vs pickle in Python2 (2010-2024)](https://stackoverflow.com/questions/4529815/saving-an-object-data-persistence)

