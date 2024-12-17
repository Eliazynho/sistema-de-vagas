


const vagas = [{
    id: 1,
    cargo: 'Desenvolvedor',
    salario: 4000,
    empresa: 'Google',
}, {
    id: 2,
    cargo: 'Desenvolvedor',
    salario: 4000,
    empresa: 'Google',
}, {
    id: 3,
    cargo: 'Desenvolvedor',
    salario: 4000,
    empresa: 'Google',
}]

function vagasDisponiveis() {
    const vagasDisponiveis = document.getElementById('vagas');
    vagasDisponiveis.innerHTML = '';
    
    vagas.forEach(vaga => {
        vagasDisponiveis.innerHTML += `
        <div class="vagasDisponiveis">
            <h3>${vaga.cargo}</h3>
            <h4>R$ ${vaga.salario}</h4>
            <h4>${vaga.empresa}</h4>
        </div>`;
    });
}

function criarNovaVaga() {
    const novaVaga = {
        id: 4,
        cargo: prompt('Qual o cargo?'),
        salario: prompt('Qual o salario?'),
        empresa: prompt('Qual a empresa?'),
    }
    vagas.push(novaVaga);
}