export const exampleMessage = [
  {
    title: "C Programming Language",
    author: "Kernighan Brian W. , Ritchie Dennis",
    isbn: "978-0131103627",
    price: { value: 50, currency: "$" },
  },
  {
    title: "Effective Java",
    author: "Joshua Bloch",
    isbn: "978-0321356680",
    price: { value: 32, currency: "$" },
  },
  {
    title: "Django for Beginners",
    author: "William S. Vincent",
    isbn: "978-1735467269",
    price: { value: 35, currency: null },
  },
  {
    title: "Head First Design Patterns",
    author: "Eric Freeman , Elisabeth Robson",
    isbn: "978-1492078005",
    price: { value: 39, currency: "$" },
  },
];

export const exampleProtoMessage = [
  [
    "C Programming Language",
    "Kernighan Brian W. , Ritchie Dennis",
    "978-0131103627",
    [50, "$"],
  ],
  ["Effective Java", "Joshua Bloch", "978-0321356680", [32, "$"]],
  ["Django for Beginners", "William S. Vincent", "978-1735467269", [35, null]],
  [
    "Head First Design Patterns",
    "Eric Freeman , Elisabeth Robson",
    "978-1492078005",
    [39, "€"],
  ],
];
