// console.log(document.getElementsByTagName("h1"));

const title = document.querySelector("#title")
let isActive = true;
const onChange = () => {
  isActive
    ? (
      title.style.cssText = `
        color: red;
        background-color: green;
        transition: all 1s ease;
      `
    ) : (
      title.style.cssText = `
        color: black;
        background-color: transparent;
        transition: all 1s ease;
      `
    )
    isActive = !isActive
}