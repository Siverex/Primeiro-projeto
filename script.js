const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (email && password) {
    alert("Bem-vindo ao BookLife! Login realizado com sucesso.");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
