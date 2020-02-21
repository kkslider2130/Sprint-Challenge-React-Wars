# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
   React JS is a large JS library that's component based and modular in design. It's big selling point is JSX and the virtual dom. With JSX devs can declaratively program their UI with html like language instead of verbosely describing transactions to the DOM using vanilla JS. The virtual DOM offers a medium to compare to the actual dom where it is constantly listening for changes and we can have states that compares and updates/render only when those changes are happening.

1. What does it mean to think in react?

It means to think about react in the structure and philosophy it's designed in. Think about your project as a component tree, and start thinking about components in how each section functions as individual modules that form a whole. It means to think about data flow in a way that works with react props and states.

1. Describe state.

A state in react can be described as a snapshot of all the variables in a current point in a program's execution cycle. The state is where you store property values in an indivudual component and whenever the state is changed, the component re renders to reflect the new state. It's similar to props except that a state is isolated to it's given component.

1. Describe props.
   props are properties that we can pass between components in react. It is like parameter(s) in a function in the sense that when you 'call' another component from your parent, you can pass down these parameters to the child as if you are passing parameters in a function. And just like in a function, you can't pass parameters back up in scope, only down.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

side effects are any code that that are leftovers in the scope of a function which runs outside it. In the case of state, it's any function that runs when state changes/trigger a render. You can sync your useState with use effect by calling your state changing function inside a use effect hook and then setting the useEffect array parameters on the bottom to trigger only when the state inputed changes.
