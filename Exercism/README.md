# Exercism

A repository of solutions to typescript exercises from a Exercism!

## Overview

I'm currently using the main exercises which are on the "mentored path", these are recommended because they're more likely to hit all the critical spots. The optional exercises will be noted as *(optional)*.

I will be solving every exercise twice (if necessary) once where I have an original self made solution, second is an optimized solution after looking at the community answers and understanding the way they optimized, which will be further explained.

## Exercises

The list of exercises is ordered as listed in the mentored path, of course you can go to multiple different ones and cherry pick if you like.
I will be giving tricks learned or shorter codes under each exercises if i find it fitting.

## Medium Exercises

### Matrix ✅

Learning outcome:
it's great to utilize the .split and .map feature on this exercise, they're very rapid and a much cleaner syntax.
rows: must use Number(x) to convert to a number from string

columns: a little tricky, but after optimizing, we can create a loop to monitor the number of "rows" or our desired "columns", afterwards we get every i'th element of each row, and append it to our columns.

It goes like this: C# is Column Number, R# is Row Number

|   | C1  | C2|
|---|---|---|
|  **R1** | 1  |   2|
|  **R2** |   3| 4  |

we take 1, 3 on the first loop (i = 0) and append it to our columns list,

|   | R1  | R2|
|---|---|---|
|  **C1** | 1  |   3|
|  **C2** |   |   |

afterwards we take 2, 4 (i = 1) and append it.

|   | R1  | R2|
|---|---|---|
|  **C1** | 1  |   3|
|  **C2** |   2| 4  |

Just like rotating the table!

### Robot Name

*Note: it takes a while when running the test because last test computes every possible value which is $26*26*10*10*10 = 676000$ names*

Learning Outcome:

* Creating and storing **unique** names should be done with **Sets**.
  * It's intuitive and easy to add and check if element is in a set (using setvariable.add(element) and setvariable.has(element)).

* **Static variable and function**
  * Using static because we only want one instance in the whole classes, (We want to have one variable holding the name list)

### Grade School

### Luhn

### Secret Handshake

### Binary Search

### Linked List

### Rational Numbers

### Atbash Cipher

### Simple Cipher

### Wordy

## Hard Exercises

### List Ops
