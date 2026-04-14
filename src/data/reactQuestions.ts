const reactQuestions = [
  {
    question: "What is the primary purpose of React Fiber?",
    options: [
      "To improve CSS rendering",
      "To enable incremental rendering and scheduling",
      "To replace virtual DOM",
      "To manage API calls",
    ],
    correctAnswer: 1,
  },
  {
    question: "What happens when state is updated in React?",
    options: [
      "Component re-renders synchronously always",
      "React schedules an update and may batch it",
      "DOM updates immediately",
      "Nothing happens until manual refresh",
    ],
    correctAnswer: 1,
  },
  //   {
  //     question:
  //       "Which hook is best suited for subscribing to external stores safely in concurrent rendering?",
  //     options: [
  //       "useEffect",
  //       "useLayoutEffect",
  //       "useSyncExternalStore",
  //       "useReducer",
  //     ],
  //     correctAnswer: 2,
  //   },
  //   {
  //     question:
  //       "What is the key difference between useEffect and useLayoutEffect?",
  //     options: [
  //       "useEffect runs synchronously before paint",
  //       "useLayoutEffect runs after paint",
  //       "useLayoutEffect runs synchronously before browser paint",
  //       "No difference",
  //     ],
  //     correctAnswer: 2,
  //   },
  //   {
  //     question: "Why is key important in list rendering?",
  //     options: [
  //       "For styling elements",
  //       "To uniquely identify elements for reconciliation",
  //       "To sort elements",
  //       "To bind events",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is stale closure in React?",
  //     options: [
  //       "Using outdated state/props inside a closure",
  //       "Component not re-rendering",
  //       "State not updating",
  //       "Hook not working",
  //     ],
  //     correctAnswer: 0,
  //   },
  //   {
  //     question: "What does React.memo do?",
  //     options: [
  //       "Memoizes state",
  //       "Prevents re-render if props are shallowly equal",
  //       "Caches API calls",
  //       "Optimizes hooks",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "Which scenario breaks memoization in React.memo?",
  //     options: [
  //       "Primitive props",
  //       "Stable references",
  //       "New object/array props every render",
  //       "Static props",
  //     ],
  //     correctAnswer: 2,
  //   },
  //   {
  //     question: "What is the purpose of useCallback?",
  //     options: [
  //       "Memoize values",
  //       "Memoize functions",
  //       "Trigger re-renders",
  //       "Handle side effects",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is the difference between useMemo and useCallback?",
  //     options: [
  //       "No difference",
  //       "useMemo memoizes values, useCallback memoizes functions",
  //       "useMemo triggers renders",
  //       "useCallback stores state",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is batching in React?",
  //     options: [
  //       "Grouping multiple state updates into one render",
  //       "Running multiple components",
  //       "Combining APIs",
  //       "Parallel rendering",
  //     ],
  //     correctAnswer: 0,
  //   },
  //   {
  //     question: "Which of the following triggers a re-render?",
  //     options: [
  //       "Changing a local variable",
  //       "Updating state",
  //       "Mutating a ref",
  //       "Console logging",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is the purpose of useRef?",
  //     options: [
  //       "Trigger re-render",
  //       "Store mutable value without re-render",
  //       "Manage state",
  //       "Fetch data",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is reconciliation in React?",
  //     options: [
  //       "Updating database",
  //       "Diffing virtual DOM and updating real DOM",
  //       "Rendering CSS",
  //       "Managing state",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is the main advantage of controlled components?",
  //     options: [
  //       "Better DOM performance",
  //       "State is managed by React",
  //       "Less code",
  //       "Faster rendering",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "Which hook is used for complex state logic?",
  //     options: ["useState", "useEffect", "useReducer", "useMemo"],
  //     correctAnswer: 2,
  //   },
  //   {
  //     question: "What is Suspense used for?",
  //     options: [
  //       "Handling errors",
  //       "Lazy loading and async rendering",
  //       "Styling components",
  //       "State management",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is the purpose of startTransition?",
  //     options: [
  //       "Immediate updates",
  //       "Mark updates as non-urgent",
  //       "Cancel rendering",
  //       "Optimize CSS",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is a potential issue with index as key?",
  //     options: [
  //       "Performance improves",
  //       "Breaks reconciliation on reordering",
  //       "Causes syntax error",
  //       "No issue",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What does useImperativeHandle do?",
  //     options: [
  //       "Expose custom ref methods",
  //       "Handle state",
  //       "Trigger effects",
  //       "Optimize rendering",
  //     ],
  //     correctAnswer: 0,
  //   },
  //   {
  //     question: "What is hydration in React?",
  //     options: [
  //       "Styling components",
  //       "Attaching event listeners to SSR HTML",
  //       "Fetching data",
  //       "Updating state",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "What is the purpose of error boundaries?",
  //     options: [
  //       "Handle API errors",
  //       "Catch rendering errors in component tree",
  //       "Prevent re-renders",
  //       "Optimize performance",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "Which lifecycle does useEffect replace?",
  //     options: [
  //       "componentDidMount, componentDidUpdate, componentWillUnmount",
  //       "constructor",
  //       "render",
  //       "shouldComponentUpdate",
  //     ],
  //     correctAnswer: 0,
  //   },
  //   {
  //     question: "What is tearing in concurrent rendering?",
  //     options: [
  //       "UI flickering",
  //       "Inconsistent state across components",
  //       "Component crash",
  //       "Memory leak",
  //     ],
  //     correctAnswer: 1,
  //   },
  //   {
  //     question: "Which tool helps avoid prop drilling?",
  //     options: ["Redux or Context API", "useState", "useEffect", "useRef"],
  //     correctAnswer: 0,
  //   },
];

export default reactQuestions;
