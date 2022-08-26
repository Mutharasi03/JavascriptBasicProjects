const button = document.querySelector(".createForm");
const formContainer = document.querySelector("#form");

button.addEventListener("click", function addElement() {
  formContainer.replaceChildren()

  function createElements(tagname, appendedIdName) {
    const addElements = document.createElement(tagname);
    const appended = document.getElementById(appendedIdName);
    const result = appended.appendChild(addElements);
    return result;
  }

  const form = createElements("form", "form");
  form.setAttribute("id", "formSection");

  // Name div

  const div1 = createElements("div", "formSection");
  div1.setAttribute("id", "inputSection");
  div1.setAttribute("class", "input");

  const label = createElements("label", "inputSection");
  label.textContent = "Name:";

  const input = createElements("input", "inputSection");
  input.setAttribute("type", "text");
  input.setAttribute("id", "uname");

  // age div

  const div2 = createElements("div", "formSection");
  div2.setAttribute("id", "inputSection1");
  div2.setAttribute("class", "input");

  const label2 = createElements("label", "inputSection1");
  label2.textContent = "Age:";

  const input2 = createElements("input", "inputSection1");
  input2.setAttribute("type", "number");
  input2.setAttribute("id", "age");

  // submit Button
  const div3 = createElements("div", "formSection");
  div3.setAttribute("id", "inputSection3");

  const submitButton = createElements("button", "inputSection3");
  submitButton.setAttribute("id", "submit");
  submitButton.textContent = "Submit";
});

 formContainer.addEventListener("submit", show);

 function show(e) {
   e.preventDefault();
   const uname = document.querySelector("#uname");
   const age = document.querySelector("#age");
   console.log(uname.value);
   console.log(age.value);
 }

//  form.innerHTML = "";
//  return (form.innerHTML += ` <form id="forms">
//    <div id="input"> <label>Name:</label>
//    <input type="text"  id="uname">
//    </div>
//    <div id="input">
//    <label>Age:</label>
//    <input type="number" id="age">
//    </div>
//    <div ><button id='submit'>Submit</button><div>
//  </form>`);
