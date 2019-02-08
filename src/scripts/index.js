const string = 'Hello dog';
const number = 21.222313;
const func = (a, b) => `${a} ${b * 2}`;
const stringPlusNumber = func(string, number);

console.debug(stringPlusNumber);




let message;
message = 'Hello!';

alert(message); // shows the variable content


let user = 'John', age = 25, message = 'Hello'; // saab panna samale reale //


let user = 'John';
let age = 25;
let message = 'Hello';   // parem lugeda, kui on erinevate ridade peal //


let user = 'John',
  age = 25,
  message = 'Hello'; // variant 2 //


  let user = 'John'
    , age = 25
    , message = 'Hello';  // comma first style //


    let message;

    message = 'Hello!';

    message = 'World!'; // value changed

    alert(message);  // saab kirjutada mitu korda, vana goes to recicle bin //


    const myBirthday = '18.04.1982';  // To declare a constant (unchanging) variable, one can use const instead of let //


    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";

    // ...when we need to pick a color
    let color = COLOR_ORANGE;
    alert(color); // #FF7F00


    Use human-readable names like userName or shoppingCart.
    Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
    Make the name maximally descriptive and concise. Examples of bad names are data and value.
    Such a name says nothing. It is only ok to use them if it’s exceptionally obvious from the context which data or value is meant.
    Agree on terms within your team and in your own mind.
    If a site visitor is called a “user” then we should name related variables like currentUser or newUser, but not currentVisitor or
     a newManInTown.   // INFO


     We can declare variables to store data. That can be done using var or let or const.

     let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
     var – is an old-school variable declaration.
     Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
     const – is like let, but the value of the variable can’t be changed.
     Variables should be named in a way that allows us to easily understand what’s inside.  // SUMMARY


     // TASK 1

     1. Declare two variables: admin and name.
     2. Assign the value "John" to name.
     3. Copy the value from name to admin.
     4. Show the value of admin using alert (must output “John”).

				let admin, name; // can declare two variables at once

				name = "John";

				admin = name;

				alert( admin ); // "John"

				// TASK 2

		1. Create the variable with the name of our planet. How would you name such a variable?
		2. Create the variable to store the name of the current visitor. How would you name that variable?

		let ourPlanetName = "Earth";

		let currentUserName = "John";


		Examine the following code:

		const birthday = '18.04.1982';

		const age = someCode(birthday);
		Here we have a constant birthday date and the age is calculated from birthday with the help of some code
		 (it is not provided for shortness, and because details don’t matter here).

		Would it be right to use upper case for birthday? For age? Or even for both?

		const BIRTHDAY = '18.04.1982'; // make uppercase?

		const AGE = someCode(BIRTHDAY); // make uppercase?
		solution
		We generally use upper case for constants that are “hard-coded”.

		Or, in other words, when the value is known prior to execution and directly written into the code.

		In this code, birthday is exactly like that. So we could use the upper case for it.

		In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one.

		It is constant in a sense that it does not change through the code execution.

		But it is a bit “less of a constant” than birthday, it is calculated, so we should keep the lower case for it.

    // NUMEROS

		Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

		We can get it as a result of division by zero:

		 alert( 1 / 0 ); // Infinity
		Or just mention it in the code directly:

		 alert( Infinity ); // Infinity
		NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

		 alert( "not a number" / 2 ); // NaN, such division is erroneous
		NaN is sticky. Any further operation on NaN would give NaN:

		 alert( "not a number" / 2 + 5 ); // NaN
		So, if there’s NaN somewhere in a mathematical expression, it propagates to the whole result.




		A string
		A string in JavaScript must be quoted.

		let str = "Hello";
		let str2 = 'Single quotes are ok too';
		let phrase = `can embed ${str}`;
		In JavaScript, there are 3 types of quotes.

		Double quotes: "Hello".
		Single quotes: 'Hello'.
		Backticks: `Hello`.
		Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

		Backticks are “extended functionality” quotes.
		They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:










		let name = "John";

		// embed a variable
		alert( `Hello, ${name}!` ); // Hello, John!

		// embed an expression
		alert( `the result is ${1 + 2}` ); // the result is 3
		The expression inside ${…} is evaluated and the result becomes a part of the string.
		We can put anything there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

		Please note that this can only be done in backticks. Other quotes do not allow such embedding!

		 alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)



		 A boolean (logical type)
		 The boolean type has only two values: true and false.

		 This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

		 For instance:

		 //let nameFieldChecked = true; // yes, name field is checked
		 //let ageFieldChecked = false; // no, age field is not checked



		 Boolean values also come as a result of comparisons:



		 //let isGreater = 4 > 1;

		 //alert( isGreater ); // true (the comparison result is "yes")



		 We’ll cover booleans more deeply later in the chapter Logical operators.

		 The “null” value
		 The special null value does not belong to any type of those described above.

		 It forms a separate type of its own, which contains only the null value:


		 //let age = null;


		 In JavaScript null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

		 It’s just a special value which has the sense of “nothing”, “empty” or “value unknown”.

		 The code above states that the age is unknown or empty for some reason.

		 The “undefined” value
		 The special value undefined stands apart. It makes a type of its own, just like null.

		 The meaning of undefined is “value is not assigned”.

		 If a variable is declared, but not assigned, then its value is exactly undefined:

		  let x;

		 alert(x); // shows "undefined"
		 Technically, it is possible to assign undefined to any variable:

		  let x = 123;

		 x = undefined;

		 alert(x); // "undefined"
		 …But it’s not recommended to do that. Normally, we use null to write an “empty” or an “unknown” value into the variable,

		 and undefined is only used for checks, to see if the variable is assigned or similar.

		 Objects and Symbols
		 The object type is special.

		 All other types are called “primitive”, because their values can contain only a single thing (be it a string or a number or whatever).

		 In contrast, objects are used to store collections of data and more complex entities.

		 We’ll deal with them later in the chapter Objects after we know enough about primitives.

		 The symbol type is used to create unique identifiers for objects. We have to mention it here for completeness,

		 but it’s better to study them after objects.

		 The typeof operator
		 The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently,

		 or just want to make a quick check.

		 It supports two forms of syntax:

		 As an operator: typeof x.
		 Function style: typeof(x).
		 In other words, it works both with parentheses or without them. The result is the same.

		 The call to typeof x returns a string with the type name:


		 typeof undefined // "undefined"

		 typeof 0 // "number"

		 typeof true // "boolean"

		 typeof "foo" // "string"

		 typeof Symbol("id") // "symbol"

		 typeof Math // "object"  (1)

		 typeof null // "object"  (2)

		 typeof alert // "function"  (3)
		 The last three lines may need additional explanations:

		 Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers.
		 Here it serves just as an example of an object.
		 The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility.
		 Of course, null is not an object. It is a special value with a separate type of its own. So, again, that’s an error in the language.
		 The result of typeof alert is "function", because alert is a function of the language.
		 We’ll study functions in the next chapters, and we’ll see that there’s no special “function” type in the language.
		 Functions belong to the object type. But typeof treats them differently. Formally, it’s incorrect, but very convenient in practice.
		 Summary
		 There are 7 basic types in JavaScript.

		 //SUMMARY

		 number for numbers of any kind: integer or floating-point.
		 string for strings. A string may have one or more characters, there’s no separate single-character type.
		 boolean for true/false.
		 null for unknown values – a standalone type that has a single value null.
		 undefined for unassigned values – a standalone type that has a single value undefined.
		 object for more complex data structures.
		 symbol for unique identifiers.
		 The typeof operator allows us to see which type is stored in the variable.

		 Two forms: typeof x or typeof(x).
		 Returns a string with the name of the type, like "string".
		 For null returns "object" – that’s an error in the language, it’s not an object in fact.
		 In the next chapters we’ll concentrate on primitive values and once we’re familiar with them, then we’ll move on to objects.


		 //TASK 3

		 What is the output of the script?

		 let name = "Ilya";

		 alert( `hello ${1}` ); // ?

		 alert( `hello ${"name"}` ); // ?

		 alert( `hello ${name}` ); // ?



		 Backticks embed the expression inside ${...} into the string.

		  let name = "Ilya";

		 // the expression is a number 1
		 alert( `hello ${1}` ); // hello 1

		 // the expression is a string "name"
		 alert( `hello ${"name"}` ); // hello name

		 // the expression is a variable, embed it
		 alert( `hello ${name}` ); // hello Ilya



		 //ToString
		 String conversion happens when we need the string form of a value.

		 For example, alert(value) does it to show the value.

		 We can also use a call String(value) function for that:



		 let value = true;
		 alert(typeof value); // boolean

		 value = String(value); // now value is a string "true"
		 alert(typeof value); // string
		 String conversion is mostly obvious. A false becomes "false", null becomes "null" etc.



		 //ToNumber
		 Numeric conversion happens in mathematical functions and expressions automatically.

		 For example, when division / is applied to non-numbers:

		  alert( "6" / "2" ); // 3, strings are converted to numbers
		 We can use a Number(value) function to explicitly convert a value:

		  let str = "123";
		 alert(typeof str); // string

		 let num = Number(str); // becomes a number 123

		 alert(typeof num); // number
		 Explicit conversion is usually required when we read a value from a string-based source like a text form,

		 but we expect a number to be entered.

		 If the string is not a valid number, the result of such conversion is NaN, for instance:

		  let age = Number("an arbitrary string instead of a number");

		 alert(age); // NaN, conversion failed



		 //Numeric conversion rules:

		 Value	Becomes…
		 undefined	NaN
		 null	0
		 true and false	1 and 0
		 string	Whitespaces from the start and the end are removed. Then, if the remaining string is empty, the result is 0.
		 Otherwise, the number is “read” from the string. An error gives NaN.
		 Examples:

		  alert( Number("   123   ") ); // 123
		 alert( Number("123z") );      // NaN (error reading a number at "z")
		 alert( Number(true) );        // 1
		 alert( Number(false) );       // 0
		 Please note that null and undefined behave differently here: null becomes a zero, while undefined becomes NaN.

		 Addition ‘+’ concatenates strings
		 Almost all mathematical operations convert values to numbers. With a notable exception of the addition +.

		 If one of the added values is a string, then another one is also converted to a string.

		 Then it concatenates (joins) them:

		  alert( 1 + '2' ); // '12' (string to the right)
		 alert( '1' + 2 ); // '12' (string to the left)
		 That only happens when one of the arguments is a string. Otherwise, values are converted to numbers.



		 //ToBoolean
		 Boolean conversion is the simplest one.

		 It happens in logical operations (later we’ll meet condition tests and other kinds of them),

		 but also can be performed manually with the call of Boolean(value).

		 The conversion rule:

		 Values that are intuitively “empty”, like 0, an empty string, null, undefined and NaN become false.
		 Other values become true.
		 For instance:

		  alert( Boolean(1) ); // true
		 alert( Boolean(0) ); // false

		 alert( Boolean("hello") ); // true
		 alert( Boolean("") ); // false
		 Please note: the string with zero "0" is true
		 Some languages (namely PHP) treat "0" as false. But in JavaScript a non-empty string is always true.

		  alert( Boolean("0") ); // true
		 alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)



		 //SUMMARY
		 There are three most widely used type conversions: to string, to number and to boolean.

		 ToString – Occurs when we output something, can be performed with String(value).

		 The conversion to string is usually obvious for primitive values.

		 ToNumber – Occurs in math operations, can be performed with Number(value).

		 The conversion follows the rules:

		 Value	Becomes…
		 undefined	NaN
		 null	0
		 true / false	1 / 0
		 string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.
		 ToBoolean – Occurs in logical operations, or can be performed with Boolean(value).

		 Follows the rules:

		 Value	Becomes…
		 0, null, undefined, NaN, ""	false
		 any other value	true
		 Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

		 undefined is NaN as a number, not 0.
		 "0" and space-only strings like " " are true as a boolean.


		 //TASK 4

		 Type conversions
		 importance: 5
		 What are results of these expressions?

		 "" + 1 + 0
		 "" - 1 + 0
		 true + false
		 6 / "3"
		 "2" * "3"
		 4 + 5 + "px"
		 "$" + 4 + 5
		 "4" - 2
		 "4px" - 2
		 7 / 0
		 "  -9\n" + 5
		 "  -9\n" - 5
		 null + 1
		 undefined + 1
		 Think well, write down and then compare with the answer.

		 solution
		 "" + 1 + 0 = "10" // (1)
		 "" - 1 + 0 = -1 // (2)
		 true + false = 1
		 6 / "3" = 2
		 "2" * "3" = 6
		 4 + 5 + "px" = "9px"
		 "$" + 4 + 5 = "$45"
		 "4" - 2 = 2
		 "4px" - 2 = NaN
		 7 / 0 = Infinity
		 " -9\n" + 5 = " -9\n5"
		 " -9\n" - 5 = -14
		 null + 1 = 1 // (3)
		 undefined + 1 = NaN // (4)
		 The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
		 The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
		 null becomes 0 after the numeric conversion.
		 undefined becomes NaN after the numeric conversion.


		 //Operators

		 Many operators are known to us from school. They are addition +, a multiplication *, a subtraction - and so on.

		 In this chapter we concentrate on aspects that are not covered by school arithmetic.

		 Terms: “unary”, “binary”, “operand”
		 Before we move on, let’s grasp the common terminology.

		 An operand – is what operators are applied to. For instance in multiplication 5 * 2 there are two operands:
		 the left operand is 5, and the right operand is 2. Sometimes people say “arguments” instead of “operands”.

		 An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of the number:




		 let x = 1;

		 x = -x;
		 alert( x ); // -1, unary negation was applied
		 An operator is binary if it has two operands. The same minus exists in the binary form as well:

		  let x = 1, y = 3;
		 alert( y - x ); // 2, binary minus subtracts values
		 Formally, we’re talking about two different operators here: the unary negation (single operand, reverses the sign)
		  and the binary subtraction (two operands, subtracts).


		  //Strings concatenation, binary +
		  Now let’s see special features of JavaScript operators that are beyond school arithmetics.

		  Usually the plus operator + sums numbers.

		  But if the binary + is applied to strings, it merges (concatenates) them:

		  let s = "my" + "string";
		  alert(s); // mystring
		  Note that if any of the operands is a string, then the other one is converted to a string too.

		  For example:

		   alert( '1' + 2 ); // "12"
		  alert( 2 + '1' ); // "21"
		  See, it doesn’t matter whether the first operand is a string or the second one. The rule is simple: if either operand is a string,

		  then convert the other one into a string as well.

		  However, note that operations run from left to right. If there are two numbers followed by a string,

		  the numbers will be added before being converted to a string:

		   alert(2 + 2 + '1' ); // "41" and not "221"
		  String concatenation and conversion is a special feature of the binary plus +. Other arithmetic operators work only with numbers.

		  They always convert their operands to numbers.

		  For instance, subtraction and division:

		   alert( 2 - '1' ); // 1
		  alert( '6' / '2' ); // 3


		  //Numeric conversion, unary +
		  The plus + exists in two forms. The binary form that we used above and the unary form.

		  The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything with numbers,

		  but if the operand is not a number, then it is converted into it.

		  For example:


		  // No effect on numbers
		  let x = 1;
		  alert( +x ); // 1

		  let y = -2;
		  alert( +y ); // -2

		  // Converts non-numbers
		  alert( +true ); // 1
		  alert( +"" );   // 0
		  It actually does the same as Number(...), but is shorter.

		  A need to convert strings to numbers arises very often.

		  For example, if we are getting values from HTML form fields, then they are usually strings.

		  What if we want to sum them?

		  The binary plus would add them as strings:

		   let apples = "2";
		  let oranges = "3";

		  alert( apples + oranges ); // "23", the binary plus concatenates strings
		  If we want to treat them as numbers, then we can convert and then sum:


		  let apples = "2";
		  let oranges = "3";

		  // both values converted to numbers before the binary plus
		  alert( +apples + +oranges ); // 5

		  // the longer variant
		  // alert( Number(apples) + Number(oranges) ); // 5
		  From a mathematician’s standpoint the abundance of pluses may seem strange.

		  But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers,

		  and then the binary plus sums them up.

		  Why are unary pluses applied to values before the binary one? As we’re going to see, that’s because of their higher precedence.



		  Operators precedence
		  If an expression has more than one operator, the execution order is defined by their precedence, or, in other words,

		  there’s an implicit priority order among the operators.

		  From school we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition.

		  That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

		  Parentheses override any precedence, so if we’re not satisfied with the order, we can use them, like: (1 + 2) * 2.

		  There are many operators in JavaScript. Every operator has a corresponding precedence number.

		  The one with the bigger number executes first. If the precedence is the same, the execution order is from left to right.

		  An extract from the precedence table (you don’t need to remember this,

		  	but note that unary operators are higher than corresponding binary ones):

		  Precedence	Name	Sign
		  …	…	…
		  16			unary plus		+
		  16			unary negation		-
		  14			multiplication		*
		  14			division		/
		  13			addition		+
		  13			subtraction		-
		  …	…	…
		  3				assignment		=
		  …	…	…
		  As we can see, the “unary plus” has a priority of 16, which is higher than 13 for the “addition” (binary plus).

		  That’s why in the expression "+apples + +oranges" unary pluses work first, and then the addition.



		  //Assignment
		  Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 3.

		  That’s why when we assign a variable, like x = 2 * 2 + 1, then the calculations are done first,

		  and afterwards the = is evaluated, storing the result in x.

		  let x = 2 * 2 + 1;

		  alert( x ); // 5
		  It is possible to chain assignments:




		  let a, b, c;

		  a = b = c = 2 + 2;

		  alert( a ); // 4
		  alert( b ); // 4
		  alert( c ); // 4
		  Chained assignments evaluate from right to left. First the rightmost expression 2 + 2 is

		  evaluated then assigned to the variables on the left: c, b and a.

		  At the end, all variables share a single value.



		  //Increment/decrement
		  Increasing or decreasing a number by one is among the most common numerical operations.

		  So, there are special operators for that:

		  Increment ++ increases a variable by 1:

		   let counter = 2;
		  counter++;      // works the same as counter = counter + 1, but is shorter
		  alert( counter ); // 3
		  Decrement -- decreases a variable by 1:

		   let counter = 2;
		  counter--;      // works the same as counter = counter - 1, but is shorter
		  alert( counter ); // 1

		  //Increment/decrement can be applied only to a variable. An attempt to use it on a value like 5++ will give an error.










