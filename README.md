# JavaScript Core to Advanced Practice Hub 🚀

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" />
  <img src="https://img.shields.io/badge/LeetCode-Top%2030-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" />
  <img src="https://img.shields.io/badge/Interview-Ready-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode" />
</p>
<p align="center">
<img src="https://www.shareicon.net/data/512x512/2015/09/11/99371_javascript_512x512.png" alt="javascript"   height="300px" width="100px"/>
  <img src="https://miro.medium.com/0*xJCLQQRZv3XFMUd1" alt="LeetCode"   height="300px" width="100px"/>
</p>
Welcome to my ultimate JavaScript repository! This repository serves as a comprehensive log of my entire JavaScript learning journey, covering everything from **Basic Foundations** to **Production-Grade Advanced Core Mechanics**.

Inside this repository, you will find:
- **50 Core Practice Questions:** Covering array methods, DOM manipulation, closures, and date-time utility architectures.
- **LeetCode Top 30 JS Questions:** Curated problems strictly focused on Functional Programming and Asynchronous engineering patterns.
- **25 Advanced & Interview-focused Topics:** Custom low-level implementations and native polyfills (map, filter, reduce, promises, etc.) deep-diving into core mechanics.

---

## 📌 Repository Overview

- **Core Fundamentals:** Deep-dives into array engineering, object manipulation, mutation control, and mathematical edge cases.
- **DOM & Real-time UI Engine:** Dynamic event handling, real-time form state syncing, client-side dynamic validation, and scroll performance metrics.
- **Functional Programming Paradigms:** Implementations using pure functions, custom higher-order helper methods, and immutability management.
- **Advanced Core & Async Architecture:** Mechanics of closures, custom engineering of polyfills, event loop microtask queues, and advanced asynchronous API orchestration.

---

## 🛠️ Core Practice Tracks (50 Questions)

### Part 1: Array & Object Foundations
1. **Last Element Locator:** Create a function that returns the last element of an array.
2. **Array Combiner:** Find the combination/merge of two arrays.
3. **Random Generator:** Generate a random integer between 0 to 18.
4. **Type Filter:** Take an array containing both numbers and strings, returning a new array containing only the string values.
5. **Max Finder:** Find the maximum number in an array.
6. **Object Dimension Identifier:** Return the length of a given object (number of keys).
7. **Object Property Filter:** In an array of objects, filter out those objects which have gender's value male.
8. **String Mass Transform:** Given an array of strings, return a new array where all strings are in uppercase.
9. **Empty Check Utility:** Check if an object is empty (has no keys).
10. **Value Doubler:** Create an array of numbers and double each value using `.map()`.
11. **CSV Converter:** Convert an array of strings into a single comma-separated string.
12. **Shallow Flattener:** Flatten a nested array one level deep (e.g., `[1, [2, 3], 4]` ➔ `[1, 2, 3, 4]`).
13. **Type Uniformity Check:** Verify if all elements in an array are numbers.
14. **Prime Engine:** Build a simple `isPrime()` function to check if a number is prime.
15. **Deduplication Engine:** Create a function that removes duplicate values from an array.

### Part 2: JS Oddities, Quirks & String Manipulation
16. **Parsing vs Conversion:** What’s the difference between `parseInt` and `Number()`?
17. **The 0.3 Paradox:** Why does `0.1 + 0.2 !== 0.3` in JavaScript?
18. **IEEE 754 Exploration:** Explain floating-point precision issues in JavaScript.
19. **High-Precision Strategies:** How would you handle high-precision decimal math in JS?
20. **Slice vs Splice:** Deep-dive comparison of `slice` and `splice` mechanics.
21. **In-place Word Reverser:** Reverse each word of a given sentence (e.g., `"Mai hun manas"` ➔ `"sanam nuh iam"`).
22. **Strict Addition:** In an array of numbers and strings, only add those numbers which are not strings.
23. **Integer Verifier:** How would you check if a number is an integer?
24. **Digit Reverser:** Write a JavaScript function that reverse a number.
25. **Alphabetizer:** Write a javascript function that returns a passed string with letters in alphabetical order.
26. **Title-Case Transformer:** Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
27. **Bounded Array Extractor:** Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
28. **Character Frequency Counter:** Write a javascript function to get the number of occurrences of each letter in specified string.
29. **Mode Identifier:** Write a javascript program to find the most frequent item of an array.
30. **In-place Shuffler:** Write a javascript program to shuffle an array.

### Part 3: DOM Performance & Interaction UI
31. **Real-time Live Preview:** How can you update the DOM based on user input in real-time (e.g., live preview of a form)?
32. **Dynamic Error Aggregator:** How would you handle form validation in real time and show error messages dynamically?
33. **Ancestor Lookup Engine:** How do you find the closest ancestor element that matches a selector?
34. **State Class Toggler:** How would you toggle a class on an element when another element is clicked (e.g., show/hide sidebar)?
35. **Visibility Toggle:** Create a Show/Hide Password Toggle.
36. **Sticky Scroll Header:** Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling down. (Key concepts: `scroll` event, `window.scrollY`, `classList.add/remove`).

### Part 4: Functional Programming Paradigms
37. **Pure Functions Philosophy:** What is a pure function, and why is it useful in UI rendering?
38. **UI Element Transformer:** How would you use `.map()` to transform a list of products into a list of HTML elements?
39. **Cart Reducer Engine:** How do you use `.reduce()` to calculate the total price in a shopping cart?
40. **Immutability Principle:** Explain immutability and how you would update an object in an array without mutating the original.
41. **Input Sanitization Pipeline:** How would you compose multiple functions to transform data step-by-step (e.g., sanitize ➔ trim ➔ capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function composition, chaining, pipe or compose logic.)
42. **forEach vs map:** What is the difference between forEach and map, and when is it wrong to use map?
43. **Custom HOF Prototyping:** How do you implement your own version of `.map()` function on arrays?

### Part 5: Time-Delta Mechanics & Date Formatting
44. **Intl Token Matrix:** Guess and analyze configuration behaviors for the `Intl` matrix options table (e.g., `weekday: "long"`, `hour12`, `timeZone`).
45. **Window Span Validation:** Validate that a user's selected date range is no longer than 30 days.
46. **Full-Spectrum Age Ticker:** Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.
47. **Temporal Arithmetic:** Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01").
48. **DOB Calculator:** Calculate the user's age from their date of birth.
49. **Centralized Date Utility:** Write a `formatDate(dateStr)` function that returns a user-friendly format like Jan 1, 2025. Why is it better to centralize this logic in a utility?
50. **Localizer Configuration API:** What are the different options and parameters available in `toLocaleString` and `toLocaleDateString` etc to format date?

---

## 🏆 LeetCode Top 30 JavaScript Track

This module tracks complete, optimized solutions for LeetCode's curated top 30 official problems, prioritizing functional JS concepts and asynchronous execution queues:
- **Closures & HOFs:** `createHelloWorld`, `counter`, `expect`, `counterII`.
- **Basic Array Transformations:** `map`, `filter`, `reduce`.
- **Function Compositions & Polyfills:** `compose`, `once`, `memoize`.
- **Asynchronous Engineering / Promises:** `addTwoPromises`, `sleep`, `timeout`, `interval`.
- **JSON / Object Manipulation:** `chunk`, `sortBy`, `groupBy`, `compactObject`.

---

## 🔥 Advanced Interview Engineering Series (25 Core Solutions)

This section targets advanced engineering concepts commonly tested in high-tier technical assessments (such as Flipkart, Jio, Infosys, Accenture, Ninjacart). These modules evaluate core architectural behaviors rather than surface-level syntax.

| ID | Module Topic | Scope & Focus Areas |
|:---|:---|:---|
| 1 | **JavaScript Closures and Memoization** | Scope isolation, lexical environments, execution contexts, and custom cache infrastructure. |
| 2 | **Debouncing and Throttling using Closures** | Stream rate-limiting, layout/resize adjustments, and search input performance optimization bounds. |
| 3 | **Function Currying in Javascript** | Arity reduction, dynamic function configuration, and argument bindings. |
| 4 | **Arrow vs Normal Function & `this` keyword** | Structural execution boundary analysis, compilation scoping rules vs runtime context tracking. |
| 5 | **Hoisting in Javascript** | Allocation phase processing, variable environments creation, and Temporal Dead Zone (TDZ) analytics. |
| 6 | **Call, Apply, Bind Methods** | Native execution parameters control and explicit execution context overriding rules. |
| 7 | **Prototype and `__proto__` in Javascript** | Under-the-hood analysis of the V8 engine's prototypal linkage and lookup chains. |
| 8 | **Flatten N-Dimensional Array using Reduce** | Custom deep-nested multidimensional array normalization using recursive functional architectures. |
| 9 | **Sort Array of Numbers & Strings** | Unicode sort parsing logic and dual data type custom stable comparator arrays. |
| 10| **Method Chaining in Javascript** | Fluent interface designs implementing contextual state chaining (`return this`). |
| 11| **Event Bubbling & Capturing** | Systemic execution tracking across Capturing, Target, and Bubbling phases inside the DOM. |
| 12| **Event Delegation Architecture** | Memory-optimized multi-element monitoring through single root-node structural handlers. |
| 13| **Infinite Currying and Deep Clone Object** | Deep object tree deep clone graph solutions and dynamic arbitrary-arity data aggregation. |
| 14| **Callback, Callback Hell & Inversion of Control** | Deep dependency management tracing, data control loss analysis, and anti-pattern mitigation. |
| 15| **Promise, Promise Chaining & Async Await** | Execution chain state mechanics, rejection tracking patterns, and microtask queue workflows. |
| 16| **Promise APIs - all(), allSettled(), any() & race()** | Complete comparative execution strategies and state behaviors under multiple rejection scenarios. |
| 17| **Fetch API with Project** | Building a comprehensive, modular asynchronous HTTP network helper engine. |
| 18| **Axios & Interceptors** | Setting up middleware pipelines for incoming/outgoing request configuration and validation tokens. |
| 19| **Event Loop in Javascript** | V8 Engine internal mechanics: Macrotask execution queues vs high-priority Microtask layers. |
| 20| **Countdown Timer Challenge** | High-precision ticker logic engineering targeting asynchronous delta-drift offset corrections. |
| 21| **Deep Compare 2 Object** | Complete multi-level object tree graphical data structure structural check tool. |
| 22| **Polyfill for Map, Filter, Reduce Array Methods** | Re-creating native higher-order sequence array processors from base principles. |
| 23| **Polyfill for Call, Apply & Bind Methods** | Re-writing context mapping wrappers without relying on default engine prototypes. |
| 24| **Create your own Promise - Promise Polyfill** | Building a complete Promises A+ specification compliant asynchronous state engine from scratch. |
| 25| **Polyfill for Promise methods all, allSettled, any & race** | Manual engine designs for executing parallel asynchronous streams under extreme edge cases. |


