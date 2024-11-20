const contentBox = document.querySelector("#content-box");

const number = (value) => {
  contentBox.value += `${value}`;

  res = contentBox.value;
};
const ClearResult = () => {
  contentBox.value = " ";
};
const Answer = () => {
  try {
    const re = eval(res);
    contentBox.value = `${re}`;
  } catch (error) {
    alert("invalid input !");
    ClearResult();
  }
};
