const dadosProdutos = [
    {
        id: 'padaria',
        nome: 'Padaria e matinal',
        itens: [
            { nome: 'Pão Francês' }, { nome: 'Pão de Forma' }, { nome: 'Pão de Milho' }, { nome: 'Baguete' },
            { nome: 'Bisnaguinha' }, { nome: 'Pão de Queijo' }, { nome: 'Croissant' }, { nome: 'Bolo de Cenoura' },
            { nome: 'Bolo de Chocolate' }, { nome: 'Rosca Doce' }, { nome: 'Sonho' }, { nome: 'Manteiga' },
            { nome: 'Requeijão' }, { nome: 'Geleia' }, { nome: 'Mel' }, { nome: 'Cereal Matinal' },
            { nome: 'Granola' }, { nome: 'Torrada' }, { nome: 'Biscoito Cream Cracker' }, { nome: 'Biscoito Recheado' }
        ]
    },
    {
        id: 'hortifruti',
        nome: 'Hortifruti',
        itens: [
            { nome: 'Alface Crespa' }, { nome: 'Alface Americana' }, { nome: 'Rúcula' }, { nome: 'Couve' },
            { nome: 'Tomate Saladete' }, { nome: 'Cebola Branca' }, { nome: 'Cebola Roxa' }, { nome: 'Alho' },
            { nome: 'Batata Inglesa' }, { nome: 'Batata Doce' }, { nome: 'Cenoura' }, { nome: 'Chuchu' },
            { nome: 'Abobrinha' }, { nome: 'Pimentão' }, { nome: 'Banana Prata' }, { nome: 'Banana Nanica' },
            { nome: 'Maçã Fuji' }, { nome: 'Maçã Gala' }, { nome: 'Uva Sem Semente' }, { nome: 'Laranja' },
            { nome: 'Limão' }, { nome: 'Abacaxi' }, { nome: 'Mamão' }, { nome: 'Melancia' }, { nome: 'Abacate' }
        ]
    },
    {
        id: 'frios',
        nome: 'Carnes e frios',
        itens: [
            { nome: 'Acém' }, { nome: 'Patinho Moído' }, { nome: 'Alcatra' }, { nome: 'Contra Filé' },
            { nome: 'Filé de Frango' }, { nome: 'Sobrecoxa de Frango' }, { nome: 'Coração de Frango' },
            { nome: 'Lombo Suíno' }, { nome: 'Linguiça Toscana' }, { nome: 'Bacon' }, { nome: 'Presunto Cozido' },
            { nome: 'Queijo Muçarela' }, { nome: 'Queijo Prato' }, { nome: 'Queijo Minas' }, { nome: 'Salame' },
            { nome: 'Mortadela' }, { nome: 'Peito de Peru' }, { nome: 'Salsicha' }
        ]
    },
    {
        id: 'mercearia',
        nome: 'Mercearia',
        itens: [
            { nome: 'Arroz Branco' }, { nome: 'Arroz Integral' }, { nome: 'Feijão Carioca' }, { nome: 'Feijão Preto' },
            { nome: 'Açúcar Refinado' }, { nome: 'Açúcar Mascavo' }, { nome: 'Sal Refinado' }, { nome: 'Café em Pó' },
            { nome: 'Óleo de Soja' }, { nome: 'Azeite de Oliva' }, { nome: 'Macarrão Espaguete' }, { nome: 'Macarrão Parafuso' },
            { nome: 'Molho de Tomate' }, { nome: 'Milho em Conserva' }, { nome: 'Ervilha' }, { nome: 'Atum Ralado' },
            { nome: 'Sardinha em Lata' }, { nome: 'Farinha de Trigo' }, { nome: 'Farinha de Mandioca' }, { nome: 'Maionese' },
            { nome: 'Ketchup' }, { nome: 'Mostarda' }
        ]
    },
    {
        id: 'limpeza',
        nome: 'Limpeza',
        itens: [
            { nome: 'Sabão em Pó' }, { nome: 'Sabão Líquido' }, { nome: 'Amaciante' }, { nome: 'Alvejante' },
            { nome: 'Desinfetante' }, { nome: 'Limpador Multiuso' }, { nome: 'Detergente Líquido' }, { nome: 'Sabão em Barra' },
            { nome: 'Esponja de Aço' }, { nome: 'Esponja de Louça' }, { nome: 'Saco de Lixo 30L' }, { nome: 'Saco de Lixo 50L' },
            { nome: 'Desengordurante' }, { nome: 'Álcool em Gel' }, { nome: 'Lustra Móveis' }, { nome: 'Limpa Vidros' }
        ]
    },
    {
        id: 'higiene',
        nome: 'Higiene e beleza',
        itens: [
            { nome: 'Papel Higiênico' }, { nome: 'Creme Dental' }, { nome: 'Escova de Dentes' }, { nome: 'Fio Dental' },
            { nome: 'Sabonete em Barra' }, { nome: 'Sabonete Líquido' }, { nome: 'Shampoo' }, { nome: 'Condicionador' },
            { nome: 'Máscara Capilar' }, { nome: 'Desodorante Spray' }, { nome: 'Desodorante Roll-on' }, { nome: 'Creme de Barbear' },
            { nome: 'Aparelho de Barbear' }, { nome: 'Algodão' }, { nome: 'Hastes Flexíveis' }, { nome: 'Absorvente' }
        ]
    },
    {
        id: 'bebidas',
        nome: 'Bebidas',
        itens: [
            { nome: 'Água Mineral 500ml' }, { nome: 'Água Mineral 2L' }, { nome: 'Refrigerante Cola 2L' }, { nome: 'Refrigerante Guaraná' },
            { nome: 'Suco de Caixinha' }, { nome: 'Suco Integral de Uva' }, { nome: 'Néctar de Frutas' }, { nome: 'Água de Coco' },
            { nome: 'Cerveja Lata' }, { nome: 'Vinho Tinto' }, { nome: 'Leite Integral' }, { nome: 'Leite Desnatado' },
            { nome: 'Iogurte Natural' }, { nome: 'Achocolatado' }
        ]
    }
];

let meuCarrinho = [];

const categoriasContainer = document.getElementById('categorias-container');
const itensContainer = document.getElementById('itens-container');
const listaPendentesContainer = document.getElementById('ul-pendentes');
const listaCompradosContainer = document.querySelector('.ul-comprados');
const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');

if (searchBtn && searchForm) {
    searchBtn.addEventListener('click', function () {
        searchForm.submit();
    });
}


function renderizarCategorias() {
    let htmlCategorias = '';
    dadosProdutos.forEach(categoria => {
        htmlCategorias += `
            <a href="#" class="list-group-item list-group-item-action list-group-item-warning" 
               id="btn-${categoria.id}" 
               data-categoria="${categoria.id}">
                ${categoria.nome}
            </a>`;
    });
    categoriasContainer.innerHTML = htmlCategorias;

    document.querySelectorAll('#categorias-container a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            exibirItens(this.getAttribute('data-categoria'));
        });
    });

    if (dadosProdutos.length > 0) exibirItens(dadosProdutos[0].id);
}

function exibirItens(categoriaId) {
    const categoriaSelecionada = dadosProdutos.find(cat => cat.id === categoriaId);
    if (!categoriaSelecionada) return;

    document.querySelectorAll('#categorias-container .list-group-item').forEach(btn => btn.classList.remove('active'));
    const btnAtivo = document.getElementById(`btn-${categoriaId}`);
    if (btnAtivo) btnAtivo.classList.add('active');

    const htmlItens = categoriaSelecionada.itens.map(item => {
        const estaNoCarrinho = meuCarrinho.some(c => c.nome === item.nome);
        const checado = estaNoCarrinho ? 'checked' : '';
        const checkboxId = `catalogo-${item.nome.replace(/\s+/g, '-')}`;

        return `
            <div class="box-item">
                <div class="custom-checkbox">
                    <input type="checkbox" id="${checkboxId}" 
                           class="catalogo-checkbox" 
                           data-nome="${item.nome}" 
                           data-categoria="${categoriaSelecionada.nome}"
                           ${checado}> 
                    <label for="${checkboxId}">${item.nome}</label>
                </div>
            </div>`;
    }).join('');

    itensContainer.innerHTML = htmlItens;
    adicionarEventosCatalogo();
    itensContainer.scrollTop = 0;
}

function adicionarEventosCatalogo() {
    document.querySelectorAll('.catalogo-checkbox').forEach(check => {
        check.addEventListener('change', function () {
            const nome = this.getAttribute('data-nome');
            const cat = this.getAttribute('data-categoria');

            if (this.checked) {
                adicionarAoCarrinho(nome, cat);
            } else {
                removerDoCarrinho(nome);
            }
        });
    });
}

function tocarSomSucesso() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine'; // Som suave
    oscillator.frequency.setValueAtTime(523.25, context.currentTime); // Nota Dó (C5)
    oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.1); // Sobe para Lá (A5)

    gain.gain.setValueAtTime(0.1, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
}

function tocarSomLimpar() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(440, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(220, context.currentTime + 0.1);

    gain.gain.setValueAtTime(0.05, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
}

function adicionarAoCarrinho(nome, categoria) {
    const existe = meuCarrinho.some(item => item.nome === nome);
    if (!existe) {
        meuCarrinho.push({
            nome: nome,
            quantidade: 1,
            categoria: categoria,
            comprado: false
        });
        renderizarMinhasListas();
    }
}

function removerDoCarrinho(nome) {
    meuCarrinho = meuCarrinho.filter(item => item.nome !== nome);
    renderizarMinhasListas();
}

function renderizarMinhasListas() {
    listaPendentesContainer.innerHTML = '';
    listaCompradosContainer.innerHTML = '';

    meuCarrinho.forEach((item) => {
        const safeName = item.nome.replace(/\s+/g, '-');
        const checkboxId = `lista-${safeName}`;
        const li = document.createElement('li');

        if (item.comprado === false) {
            li.className = 'box-item row mx-0';
            li.innerHTML = `
                <div class="col-12">
                    <div class="custom-checkbox">
                        <input type="checkbox" id="${checkboxId}" class="acao-checkbox" data-nome="${item.nome}"> 
                        <label for="${checkboxId}">${item.nome}</label>
                    </div>
                </div>
                <div class="col-12 mt-2 d-flex justify-content-between align-items-center">
                    <span class="badge text-bg-warning">${item.categoria}</span>
                    <div class="controles-qtd">
                        <button class="btn-qtd" onclick="mudarQuantidade('${item.nome}', -1)">-</button>
                        <span class="px-2">${item.quantidade}</span>
                        <button class="btn-qtd" onclick="mudarQuantidade('${item.nome}', 1)">+</button>
                    </div>
                </div>`;
            listaPendentesContainer.appendChild(li);
        } else {
            li.className = 'box-item row item-riscado mx-0';
            li.innerHTML = `
                <div class="col-12">
                    <div class="custom-checkbox">
                        <input type="checkbox" id="${checkboxId}" class="acao-checkbox" data-nome="${item.nome}" checked> 
                        <label for="${checkboxId}">${item.nome}</label>
                    </div>
                </div>
                <div class="col-12 mt-1">
                    <span class="badge text-bg-secondary">${item.categoria}</span>
                    <span class="ms-2 text-muted small">Qtd: ${item.quantidade}</span>
                </div>`;
            listaCompradosContainer.appendChild(li);
        }
    });

    adicionarEventosCheckListas();
}

function criarItemPersonalizado() {
    const nomeInput = document.getElementById('novo-item-nome');
    const categoriaInput = document.getElementById('novo-item-categoria');

    const nome = nomeInput.value.trim();
    const categoria = categoriaInput.value;

    if (nome === "") {
        alert("Por favor, digite o nome do produto!");
        return;
    }

    const existe = meuCarrinho.some(item => item.nome.toLowerCase() === nome.toLowerCase());

    if (!existe) {
        meuCarrinho.push({
            nome: nome,
            quantidade: 1,
            categoria: categoria,
            comprado: false
        });
        tocarSomSucesso();

        nomeInput.value = "";

        renderizarMinhasListas();

        console.log(`Sucesso: ${nome} adicionado!`);
    } else {
        alert("Este item já está na sua lista!");
    }
}

function adicionarEventosCheckListas() {
    document.querySelectorAll('.acao-checkbox').forEach(check => {
        check.addEventListener('change', function () {
            const nomeItem = this.getAttribute('data-nome');
            alternarStatusComprado(nomeItem);
        });
    });
}

function alternarStatusComprado(nome) {
    const item = meuCarrinho.find(i => i.nome === nome);
    if (item) {
        item.comprado = !item.comprado;

        if (item.comprado) {
            const todosComprados = meuCarrinho.every(i => i.comprado);

            if (todosComprados && meuCarrinho.length > 0) {
                celebrarConclusao();
            } else {
                tocarSomSucesso();
            }
        }

        renderizarMinhasListas();
    }
}

window.mudarQuantidade = function (nome, delta) {
    const item = meuCarrinho.find(i => i.nome === nome);
    if (item) {
        const novaQtd = item.quantidade + delta;
        if (novaQtd > 0) {
            item.quantidade = novaQtd;
            renderizarMinhasListas();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarCategorias();
    renderizarMinhasListas();
});


function compartilharWhatsApp() {
    if (meuCarrinho.length === 0) {
        alert("Sua lista está vazia!");
        return;
    }

    let mensagem = "*Minha Lista de Compras*%0A%0A";

    const pendentes = meuCarrinho.filter(i => !i.comprado);

    if (pendentes.length === 0) {
        mensagem += "Todos os itens já foram comprados! ✅";
    } else {
        pendentes.forEach(item => {
            mensagem += `• *${item.nome}* - Qtd: ${item.quantidade}%0A`;
        });
    }

    const url = `https://api.whatsapp.com/send?text=${mensagem}`;

    window.open(url, '_blank');
}

function gerarPDF() {
    if (meuCarrinho.length === 0) {
        alert("Sua lista está vazia!");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("LISTA DE COMPRAS", 10, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 10, 30);
    doc.line(10, 35, 200, 35);

    let yBus = 45;

    doc.setFont("helvetica", "bold");
    doc.text("ITENS PARA COMPRAR:", 10, yBus);
    yBus += 10;
    doc.setFont("helvetica", "normal");

    const pendentes = meuCarrinho.filter(i => !i.comprado);

    if (pendentes.length === 0) {
        doc.text("Nenhum item pendente.", 15, yBus);
        yBus += 10;
    } else {
        pendentes.forEach(item => {
            doc.text(`() ${item.nome} (Qtd: ${item.quantidade}) - Categoria: ${item.categoria}`, 15, yBus);
            yBus += 8;

            if (yBus > 280) { doc.addPage(); yBus = 20; }
        });
    }

    yBus += 10;
    doc.setFont("helvetica", "bold");
    doc.text("ITENS JÁ COMPRADOS:", 10, yBus);
    yBus += 10;
    doc.setFont("helvetica", "normal");

    const comprados = meuCarrinho.filter(i => i.comprado);
    comprados.forEach(item => {
        doc.text(`[X] ${item.nome}`, 15, yBus);
        yBus += 8;
        if (yBus > 280) { doc.addPage(); yBus = 20; }
    });

    doc.save("lista-de-compras.pdf");
}

function limparTodaALista() {
    if (meuCarrinho.length === 0) return;

    const confirmacao = confirm("Tem certeza que deseja apagar toda a sua lista de compras?");

    if (confirmacao) {
        meuCarrinho = [];

        renderizarMinhasListas();

        const checkboxes = document.querySelectorAll('.catalogo-checkbox');
        checkboxes.forEach(cb => cb.checked = false);

        tocarSomLimpar();

        console.log("Lista limpa com sucesso!");
    }
}

function celebrarConclusao() {
    tocarSomSucesso();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#eeb90f', '#ffffff', '#228B22']
    });
}