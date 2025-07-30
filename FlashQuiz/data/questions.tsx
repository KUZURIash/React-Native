export const flashcards = [
  // Existing flashcards...

  { question: 'What is JVM in Java?', answer: 'Java Virtual Machine, it runs Java bytecode.' },
  { question: 'What is inheritance in Java?', answer: 'A mechanism where one class acquires properties of another.' },
  { question: 'What is a pointer in C++?', answer: 'A variable that stores the memory address of another variable.' },
  { question: 'What is the difference between C and C++?', answer: 'C is procedural; C++ supports object-oriented programming.' },
  { question: 'What is a class in C#?', answer: 'A blueprint to create objects in C#.' },
  { question: 'What is a namespace in C#?', answer: 'A container for classes and other namespaces to avoid naming conflicts.' },
  { question: 'What is a coroutine in Kotlin?', answer: 'A lightweight thread used for asynchronous programming.' },
  { question: 'What is null safety in Kotlin?', answer: 'A feature to avoid null pointer exceptions.' },
  { question: 'What is optional binding in Swift?', answer: 'A way to safely unwrap optionals using `if let` or `guard let`.' },
  { question: 'What is a protocol in Swift?', answer: 'A set of methods that classes or structs can adopt.' },
  { question: 'What is a variable in PHP?', answer: 'A container used to store data; starts with `$`.' },
  { question: 'What is a session in PHP?', answer: 'A way to store data to be used across multiple pages.' },
  { question: 'What is TypeScript?', answer: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
  { question: 'What is an interface in TypeScript?', answer: 'A structure that defines contract for classes to follow.' },
  { question: 'What is a goroutine in Go?', answer: 'A function that runs concurrently in Go.' },
  { question: 'What is a channel in Go?', answer: 'A way to communicate between goroutines.' },
  { question: 'What is ownership in Rust?', answer: 'A memory safety feature without garbage collection.' },
  { question: 'What is a borrow checker in Rust?', answer: 'It enforces rules to ensure memory safety.' },
  { question: 'What is SQL used for?', answer: 'Structured Query Language used to manage databases.' },
  { question: 'What is a primary key in SQL?', answer: 'A unique identifier for each record in a table.' },
  { question: 'What does HTML stand for?', answer: 'HyperText Markup Language.' },
  { question: 'What is a div in HTML?', answer: 'A container used to group elements.' },
  { question: 'What does CSS stand for?', answer: 'Cascading Style Sheets.' },
  { question: 'What is Flexbox in CSS?', answer: 'A layout model for arranging items in rows or columns.' },
  { question: 'What is a responsive design?', answer: 'A design that adjusts to different screen sizes.' }
];

export const quizQuestions = [
  {
    question: "Which language is primarily used for Android app development?",
    options: ["Python", "Java", "C++", "Swift"],
    correctAnswer: "Java",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Markdown Language",
      "None of the above",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "What symbol is used to start a comment in Python?",
    options: ["//", "#", "/*", "<!--"],
    correctAnswer: "#",
  },
  {
    question: "What is the output of `console.log(typeof null)` in JS?",
    options: ["null", "object", "undefined", "string"],
    correctAnswer: "object",
  },
  {
    question: "Which keyword is used to create a function in JavaScript?",
    options: ["func", "function", "def", "lambda"],
    correctAnswer: "function",
  },
  {
    question: "Which operator is used for assignment in most languages?",
    options: ["==", "=", "=>", "==="],
    correctAnswer: "=",
  },
  {
    question: "How do you declare a constant in JavaScript?",
    options: ["let", "const", "var", "static"],
    correctAnswer: "const",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Script",
      "None of the above",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which one is not a programming language?",
    options: ["HTML", "Java", "Python", "C++"],
    correctAnswer: "HTML",
  },
  {
    question: "Which data type is used to store true/false values?",
    options: ["Integer", "Boolean", "String", "Float"],
    correctAnswer: "Boolean",
  },
  {
    question: "How do you start a for loop in Python?",
    options: ["for(i=0;i<10;i++)", "foreach()", "for x in range(10):", "loop x in range"],
    correctAnswer: "for x in range(10):",
  },
  {
    question: "Which symbol is used to end a statement in Java?",
    options: [";", ":", ".", "#"],
    correctAnswer: ";",
  },
  {
    question: "What is used to style a web page?",
    options: ["HTML", "Python", "CSS", "JS"],
    correctAnswer: "CSS",
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
    correctAnswer: "Sun Microsystems",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["extends", "inherits", "derives", "super"],
    correctAnswer: "extends",
  },
  {
    question: "Which of the following is a loop in JavaScript?",
    options: ["for", "loop", "repeat", "foreach"],
    correctAnswer: "for",
  },
  {
    question: "What is the file extension for JavaScript files?",
    options: [".java", ".js", ".py", ".html"],
    correctAnswer: ".js",
  },
  {
    question: "What will `2 + '2'` return in JavaScript?",
    options: ["4", "22", "undefined", "NaN"],
    correctAnswer: "22",
  },
  {
    question: "What is the correct syntax for a function in Python?",
    options: ["function myFunc()", "def myFunc():", "fun myFunc{}", "func myFunc()"],
    correctAnswer: "def myFunc():",
  },
  {
    question: "How do you declare an array in JavaScript?",
    options: ["array = []", "let arr = []", "arr = array()", "arr := []"],
    correctAnswer: "let arr = []",
  },
  {
    question: "Which method is used to add elements to an array in JS?",
    options: ["add()", "push()", "append()", "insert()"],
    correctAnswer: "push()",
  },
  {
    question: "Which HTML tag is used for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correctAnswer: "<br>",
  },
  {
    question: "What is the value of `True + True` in Python?",
    options: ["2", "1", "True", "Error"],
    correctAnswer: "2",
  },
  {
    question: "How do you install a package in Python?",
    options: ["npm install", "py install", "pip install", "setup install"],
    correctAnswer: "pip install",
  },
  {
    question: "Which method prints something in Python?",
    options: ["echo()", "console.log()", "print()", "printf()"],
    correctAnswer: "print()",
  },
];
