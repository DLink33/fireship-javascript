import './style.css'

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  console.debug(data);

  const response = await fetch('http://localhost:8080/dream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: String(data.get('prompt') ?? ''),
    }),
  });

  const {image} = await response.json();
  const rslt = document.querySelector('#rslt');
  rslt.innerHTML = `<img src="${image}" width="512" />`;
});
