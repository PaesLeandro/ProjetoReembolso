// Selecionando os elementos do formulário.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

// Seleciona os elementos da lista.
const expenseList = document.querySelector('ul');
const expenseQuantity = document.querySelector('aside header p span');
const expenseTotal = document.querySelector('aside header h2');



// Captura o evento do input para formatar o valor enquanto o usuário digita.
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, ''); // Remove tudo que não for dígito.

    // Transformar em centavos para facilitar a formatação.
    value = Number(value) / 100;

    // Atualiza o valor do input.
    amount.value = formatCurrencyBRL(value);
}

// Função para formatar o valor como moeda brasileira (R$).
function formatCurrencyBRL(value) {
    value = value.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    // Retorna o valor formatado.
    return value;
}

// Captura o evento do formulário para obter valores.
form.onsubmit = (event) => {
    event.preventDefault(); // Evita o envio do formulário.

    // Cria um detalhe com os detalhes da nova despesa.
    const newExpense = {
        id: new Date().getTime(), // Gera um ID único baseado no timestamp.
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text, // Pega o nome da categoria selecionada.
        amount: amount.value,
        created_at: new Date(),// Armazena a data de criação.
    };
    // Chama a função para adicionar a nova despesa à lista.
    expenseAdd(newExpense);
}

// Adiciona um novo item na lista de despesas.
function expenseAdd(newExpense) {
    try {
        // Cria o elemento para adicionar o item (li) na lista (ul)
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense');

        // Cria o ícone da categoria
        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute('alt', newExpense.category_name);

        // Cria a info da despesa (descrição e valor)
        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        // Criando o nome da despesa.
        const expenseName = document.createElement('span');
        expenseName.textContent = newExpense.expense;

        // Criando a categoria da despesa.
        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.category_name;

        // Adiciona nome e categoria à info da despesa.
        expenseInfo.append(expenseName, expenseCategory);

        // Criando o valor da despesa.
        const expenseAmount = document.createElement('span');
        expenseAmount.classList.add('expense-amount');
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
            .toUpperCase()
            .replace('R$', '')}`;

        // Criando o ícone de remover.
        const removeIcon = document.createElement('img');
        removeIcon.setAttribute('src', './img/remove.svg');
        removeIcon.setAttribute('alt', 'remover');
        removeIcon.classList.add('remove-icon');

        // Adiciona as informações do item.
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        // Adiciona o item à lista de despesas.
        expenseList.append(expenseItem);
    
        // Limpa os campos do formulário após adicionar a despesa.
        formClear();

        // Atualiza os totais das despesas.
        updateTotals();

    } catch (error) {
        alert('Não foi possível atualizar a lista de despesas. Por favor, tente novamente.');
    }
}

// Atualiza os totais das despesas.
function updateTotals() {
    try {
        // Seleciona todos os itens de despesa na lista.
        const items = expenseList.children;

        // Atualiza o total das despesas somando os valores de cada item.
        expenseQuantity.textContent = `${items.length} ${items.length > 1 ? 'despesas' : 'despesa'}`;

        // Variável para incrementar o total das despesas.
        let total = 0;

        // Percorre cada item da lista para somar os valores.
        for (let item = 0; item < items.length; item++) {
            const itemAmount = items[item].querySelector('.expense-amount');

            let value = itemAmount.textContent.replace(/[^\d,]/g, '').replace(',', '.'); // Remove tudo que não for dígito.

            // Verificar se é um número válido.
            if (isNaN(value)) {
                return alert('Não foi possível calcular o total. O valor inserido não parece um número.');
            }

            // Incrementa o total com o valor do item atual.
            total += Number(value);
        }

        // Cria o span para adicionar o R$ formatado.
        const symbolBRL = document.createElement('small');
        symbolBRL.textContent = 'R$';

        // Formata o valor e remove o R$ que será exibido pela small com estilo customizado.
        total = formatCurrencyBRL(total).toUpperCase().replace('R$', '');

        // Limpa o conteúdo do elemento.
        expenseTotal.innerHTML = '';

        // Adiciona o símbolo de moeda e o valor formatado.
        expenseTotal.append(symbolBRL, total);
    }catch (error) {
        alert('Não foi possível atualizar os totais das despesas. Por favor, tente novamente.');
    }
}

// Evento que captura o clique no ícone de remover para excluir um item da lista.
expenseList.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-icon')) {
        // Obter o li pai do item clicado.
        const item = event.target.closest('.expense');
        
        item.remove(); // Remove o item da lista.
    }
    updateTotals(); // Atualiza os totais após a remoção.
})


// Clear os campos do formulário após o envio.
function formClear() {
    expense.value = '';
    category.value = '';
    amount.value = '';

    expense.focus(); // Foca no primeiro campo do formulário para facilitar a inserção de uma nova despesa.
}