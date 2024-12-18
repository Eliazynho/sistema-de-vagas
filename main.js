


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
            <h2>${vaga.id}</h2>
            <h3>${vaga.cargo}</h3>
            <h4>R$ ${vaga.salario}</h4>
            <h4>${vaga.empresa}</h4>
        </div>`;
    });
}

function idVaga() {
    const id = vagas.length + 1
    return id
}

function criarNovaVaga() {
    const novaVaga = {
        id: idVaga(),
        cargo: prompt('Qual o cargo?'),
        salario: prompt('Qual o salario?'),
        empresa: prompt('Qual a empresa?'),
    }
    if (novaVaga.cargo === '' || novaVaga.salario === '' || novaVaga.empresa === '') {
        alert('Por favor, preencha todos os campos');
        return;
    }else{
        vagas.push(novaVaga);
        alert('Vaga criada com sucesso!');
    }
}

function buscarVaga() {
    const search = document.getElementById('search').value;
    const vagasDisponiveis = document.getElementById('vagas');
    vagasDisponiveis.innerHTML = '';
    vagas.forEach(vaga => {
        if (vaga.cargo.toLowerCase().includes(search.toLowerCase())) {
            vagasDisponiveis.innerHTML += `
            <div class="vagasDisponiveis">
                <h2>${vaga.id}</h2>
                <h3>${vaga.cargo}</h3>
                <h4>R$ ${vaga.salario}</h4>
                <h4>${vaga.empresa}</h4>
            </div>`;
        }
    });
}


function excluirVaga() {
    const excluir = document.getElementById('excluir').value;
    const vagasDisponiveis = document.getElementById('vagas');
    vagasDisponiveis.innerHTML = '';
    vagas.forEach(vaga => {
        if (vaga.id != excluir) {
            vagasDisponiveis.innerHTML += `
            <div class="vagasDisponiveis">
                <h2>${vaga.id}</h2>
                <h3>${vaga.cargo}</h3>
                <h4>R$ ${vaga.salario}</h4>
                <h4>${vaga.empresa}</h4>
            </div>`;
        }
    });
}

function inscreverVaga() {
    const id = document.getElementById('id').value;
    const vagasDisponiveis = document.getElementById('vagas');
    vagasDisponiveis.innerHTML = '';
    vagas.forEach(vaga => {
        if (vaga.id == id) {
            vagasDisponiveis.innerHTML += `
            <div class="vagasDisponiveis">
                <h2>${vaga.id}</h2>
                <h3>${vaga.cargo}</h3>
                <h4>R$ ${vaga.salario}</h4>
                <h4>${vaga.empresa}</h4>
            </div>`;
        }
    });
}