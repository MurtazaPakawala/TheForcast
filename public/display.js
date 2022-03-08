display();
async function display() {
  const response = await fetch("/display");
  const data = await response.json();
  console.log(data);

  document.querySelector("#display-all").textContent = data;
}
