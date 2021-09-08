const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log("suffix <>>>", suffix);
  // logs an object containing the data attributes set by the the `data-thing` attribute in the HTML
  // select the data-name
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
// this will allow values to change as user input changes with movement, not only display the final value

