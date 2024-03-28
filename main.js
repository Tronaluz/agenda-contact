document.addEventListener('DOMContentLoaded', function() {
    const formContatos = document.getElementById('form-contatos');
    const tbody = document.querySelector('tbody');

    formContatos.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const phone = document.getElementById('phone').value;

        const newRow = document.createElement('tr');

        const nomeCell = document.createElement('td');
        nomeCell.textContent = nome;
        const phoneCell = document.createElement('td');
        phoneCell.textContent = phone;

        newRow.appendChild(nomeCell);
        newRow.appendChild(phoneCell);

        tbody.appendChild(newRow);

        formContatos.reset();
    });
});
