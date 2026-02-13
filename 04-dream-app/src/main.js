import "./style.css";

const form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showSpinner();
  const data = new FormData(form);

  console.debug(data);

  const response = await fetch("http://localhost:8080/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: String(data.get("prompt") ?? ""),
    }),
  });

  if (response.ok) {
    const { image } = await response.json();
    const rslt = document.querySelector("#rslt");
    rslt.innerHTML = `<img src="${image}" width="512" />`;
  } else {
    const err = await response.text();
    alert(err);
    console.error(err);
  }
  hideSpinner();
});

function showSpinner() {
  button.disabled = true;
  button.innerHTML = 'Dreaming...<span class="spinner">🧠</span>';
}

function hideSpinner() {
  button.disabled = false;
  button.innerHTML = "Dream it";
}
