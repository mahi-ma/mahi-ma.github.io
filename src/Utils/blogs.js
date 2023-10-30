const blogs = [
  {
    _id: 1,
    title: "LRU Cache implementation in js",
    date: "23 December 2020",
    img: "blog-bg.jpg",
    link: "https://mahimasharma0309.medium.com/lru-cache-implementation-in-js-8b1083117a12",
    description: "What is LRU Cache? A Least Recently Used (LRU) Cache organises items in order of use, allowing you to quickly identify which item hasn’t been used for the longest amount of time. Benefits- Fast Access :- LRU caches store items in order from most-recently used"
  },
  {
    _id: 2,
    title: "Ins and Outs of Generator functions",
    date: "22 December 2020",
    img: "blog-bg.jpg",
    link: "https://mahimasharma0309.medium.com/ins-and-outs-of-generator-functions-37d5c922e4e7",
    description: "Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.Confused?Okay, let me make things clear for you. You know async functions?"
  },
  {
    _id: 3,
    title: "Straightforward polyfills",
    date: "11 April 2020",
    img: "blog-bg.jpg",
    link: "https://mahimasharma0309.medium.com/lru-cache-implementation-in-js-8b1083117a12",
    description: "You must have seen people talking about implementing polyfills and you must have went though mdn docs to search for it and eventually copying it into your code and things works just the way you want them without really understanding pollyfills because Yes! they are complicated."
  },
  {
    _id: 4,
    title: "Determining sandwich type for Pallindrome matrix",
    date: "20 October 2023",
    img: "about-2.jpg",
    link: "https://www.geeksforgeeks.org/determining-sandwich-type-for-palindromic-matrix/",
    description: "Given a 2D matrix, print if it is a Horizontal, Vertical, Proper, or Improper Sandwich. If all rows of the matrix are palindrome, then it can be folded in a vertical sense so it is a Vertical Sandwich Similarly, if all columns are palindrome, then they can be folded in a horizontal sense so it is a Horizontal Sandwich If any one or none of the rows and columns are palindrome, then it is an Improper Sandwich If all are palindrome, then it is a Proper Sandwich."
  },
  {
    _id: 5,
    title: "Shift matrix elements row-wise by k",
    date: "20 Febuary 2023",
    img: "about-2.jpg",
    link: "https://www.geeksforgeeks.org/shift-matrix-elements-k/",
    description: "Given a square matrix mat[][] and a number k. The task is to shift the first k elements of each row to the right of the matrix."
  },
  {
    _id: 6,
    title: "Reverse diagonal elements of matrix",
    date: "20 Febuary 2023",
    img: "about-2.jpg",
    link: "https://www.geeksforgeeks.org/reverse-diagonal-elements-matrix/",
    description: "Given a square matrix of order n*n, we have to reverse the elements of both diagonals."
  },
  {
    _id: 7,
    title: "Check if a string can be formed from another string using given constraints",
    date: "23 May 2022",
    img: "about-2.jpg",
    link: "https://www.geeksforgeeks.org/check-if-a-string-can-be-formed-from-another-string-using-given-constraints/",
    description: "Given two strings S1 and S2(all characters are in lower-case). The task is to check if S2 can be formed from S1 using given constraints: 1. Characters of S2 is there in S1 if there are two ‘a’ in S2, then S1 should have two ‘a’ also. 2. If any character of S2 is not present in S1, check if the previous two ASCII characters are there in S1. e.g., if ‘e’ is there in S2 and not in S1, then ‘c’ and ‘d’ can be used from S1 to make ‘e’. "
  }
];

export default blogs;
