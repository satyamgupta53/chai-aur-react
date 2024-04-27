// babble is used to convert the JSX code into the JS code

const customRender = (reactElement, container) => {
  /*
  // create a DOM element
  const dom = document.createElement(reactElement.type);
  dom.innerHTML = reactElement.children;
  dom.setAttribute("href", reactElement.props.href);
  dom.setAttribute("target", reactElement.props.target);

  // append the DOM element to the container
  container.appendChild(dom);
  */

  // creating a modular code
  const dom = document.createElement(reactElement.type);
  dom.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    dom.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(dom);
};

const reactElement = {
  // react element to be rendered in the DOM tree
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit the Google !",
};

const root = document.querySelector("#root");

customRender(reactElement, root); // inject the react element into the root element

/*
const customObject = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click me to visit Google !"
);

This can be directly used in the ReactDOM.render() method to render the element in the DOM tree.
*/
