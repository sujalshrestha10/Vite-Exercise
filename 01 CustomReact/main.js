function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click to Google",
};

// Correct the selector to use ID
const mainContainer = document.querySelector("#root");
if (mainContainer) {
  customRender(reactElement, mainContainer);
} else {
  console.error("Container not found");
}
