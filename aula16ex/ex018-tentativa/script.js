let lista = [] // Cria um array vazio que vai guardar os números adicionados

function adicionar() {
    let num = window.document.getElementById('txtNum') // Seleciona o campo de input onde o usuário digita o número
    let s = document.getElementById('sel') // Seleciona o elemento <select> que mostrará os valores adicionados
    let n = Number(num.value) // Converte o valor digitado em número (por padrão, inputs retornam strings)

    // Verifica se o campo está vazio, se o número é menor que 1 ou maior que 100 ou se já está na lista
    if(num.value.length == 0 || n < 1 || n > 100 || lista.indexOf(n) != -1) {
        alert('Valor inválido ou já encontrado na lista') // Exibe alerta se houver erro na validação
        // Dica: você poderia separar as condições para dar mensagens mais específicas ao usuário (opcional)
    } else {
        let item = document.createElement('option') // Cria um novo elemento <option> para ser inserido no <select>
        item.text = `Valor ${n} adicionado.` // Define o texto que será exibido na nova opção
        s.appendChild(item) // Adiciona o elemento <option> como filho do <select>
        lista.push(n) // Adiciona o número ao array 'lista' para controle dos valores
        num.value = '' // Limpa o campo de input após o número ser adicionado
        num.focus() // Coloca o cursor de volta no campo de input para facilitar nova digitação
    }
} 

function finalizar() {
    let s = document.getElementById('sel') // Seleciona o elemento <select> onde os números estão listados
    let res = document.getElementById('res') // Seleciona a div onde os resultados serão exibidos

    if(s.options.length == 0) { // Verifica se nenhum valor foi adicionado ao <select>
        alert('Adicione valores antes de finalizar!') // Se não há opções, exibe uma mensagem de alerta
    } else {
        let contador = lista.length // Armazena a quantidade de elementos na lista

        let organizar = lista.sort() // Ordena os elementos da lista (mas por padrão, ordena como texto)
        // Sugestão: isso pode causar erro ao lidar com números (por exemplo: [1, 10, 2]).
        // Para ordenar corretamente como números, use: lista.sort((a, b) => a - b)

        let res1 = document.createElement('p') // Cria um parágrafo para mostrar a quantidade total
        res1.innerText = `Ao todo, temos ${contador} números cadastrados.` // Define o texto com o total de números
        res.appendChild(res1) // Adiciona o parágrafo dentro da div 'res'

        let res2 = document.createElement('p') // Cria um novo parágrafo para o maior valor
        res2.innerText = `O maior valor informado foi ${lista[(lista.length) - 1]}.` // Acessa o último elemento (maior) após sort()
        res.appendChild(res2) // Adiciona o parágrafo ao resultado

        let res3 = document.createElement('p') // Cria um novo parágrafo para o menor valor
        res3.innerText = `O menor valor informado foi ${lista[0]}.` // Acessa o primeiro elemento (menor) após sort()
        res.appendChild(res3) // Adiciona o parágrafo ao resultado

        let soma = 0, media = 0 // Inicializa as variáveis para soma e média dos valores
        for (let i = 0; i <= lista.length - 1; i++) { // Percorre todos os valores do array lista
            soma += lista[i] // Acumula a soma de todos os elementos
            media = soma / lista.length // Calcula a média dentro do loop
            // Sugestão: o cálculo da média dentro do loop é desnecessário em cada iteração.
            // Melhor fazer o cálculo da média apenas uma vez, após o fim do for.
        }

        let res4 = document.createElement('p') // Cria um novo parágrafo para exibir a soma
        res4.innerText = `Somando todos os valores, temos ${soma}.` // Define o texto com a soma de todos os valores
        res.appendChild(res4) // Adiciona o parágrafo ao resultado

        let res5 = document.createElement('p') // Cria um novo parágrafo para exibir a média
        res5.innerText = `A média dos valores digitados é ${media}.` // Define o texto com o valor da média
        res.appendChild(res5) // Adiciona o parágrafo ao resultado
    }
}

// comentários e sugestões por ChatGPT-4