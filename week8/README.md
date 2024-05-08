# Week 8

Today we'll continue working on our Movies app.

### Getting Started

You will need to have Node installed. 

Then, after cloning this repository, do this **only once:**

``` shell
week8$ cd react-movies
week8/react-movies$ npm install
```

Now, you can start (or restart) the server whenever you want:

``` shell
week8/react-movies $ npm start
```

**Press Ctrl-C to stop the server anytime.**

### Important Ideas This Week

New concepts:

* More details about object destructuring
* React "snapshot" rendering process
* React state change queueing

Still continuing with these themes:

* Concept of "state" and circumstances where state management is complicated
* Lots of JS syntax knowledge

### Agenda

1. Finishing our "state puzzle" from last week
2. Handling user input in React with "controlled" components
3. Shopping List example

  
### React Notes

* Remember, React is a _framework_.  It provides abstractions that make it easier 
  to create user interaction-heavy web pages.
* A key idea in React is to organize a page into separate _components_.
* Each component is responsible for a particular section of a page.
* Each component draws itself based on the data it contains (its _state_).
* You can assign a direct value to `this.state` ONLY in the `constructor()`
* Outside of the constructor, use `setState(...)` to update the state object.
* React automatically invokes the `render()` function whenever `this.state` changes.
* JSX expressions may consist of only 1 top-level element (or array)
* We can't run loops INSIDE of a JSX fragment, but we can render a pre-made array of JSX elements
* We can `return null` from the `render` function to have the component not draw anything.
* Use component _properties_ to pass data from parent to child.
* Inside the child component, use `this.props` to access the provided data.


### References

JavaScript-specific:

* [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ES6 Destructuring Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Use Arrow Functions Instead of Class Methods In React](https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25)

### Cheat Sheet for JSX

* JSX is a React-specific language.  It is a JavaScript/HTML hybrid.
* You can embed short JS expressions inside of JSX markup by using curly braces { }
* You can not mix entire ES6 statements (such as loops) inside of JSX but you can use short expressions
* JSX does NOT support `class="..."` on an element.  Use `className="..."` instead!
* JSX will **automatically** puts quotes around attribute values: `src={image_url}`
* You can use either JSX or `React.createElement(...)` to generate React elements.
* React will automatically re-render a component whenever its underlying state changes