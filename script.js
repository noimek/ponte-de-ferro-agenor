function solicitarCorrida() {
    let destino = document.getElementById("destino").value;
    let tipo = document.getElementById("tipo").value;
    let status = document.getElementById("status");

    if (destino === "") {
        status.innerHTML = "Por favor, informe um destino.";
        status.style.color = "red";
        return;
    }

    status.style.color = "#5b3df5";
    status.innerHTML = "Procurando motorista disponível...";

    // Simulate finding a driver
    setTimeout(() => {
        status.innerHTML = `Motorista encontrado! Veículo: ${tipo.toUpperCase()}. Está a caminho!`;
        status.style.color = "green";
    }, 2000);
}


// IA básica
function respostaIA() {
    let entrada = document.getElementById("iaInput").value.toLowerCase();
    let saída = document.getElementById("iaOutput");

    if (entrada.includes("segurança")) {
        saída.innerHTML = "Estou monitorando a rota. Qualquer desvio, aciono alerta.";
    }
    else if (entrada.includes("oi") || entrada.includes("ola")) {
        saída.innerHTML = "Olá! Como posso te ajudar hoje?";
    }
    else if (entrada.includes("acessibilidade")) {
        saída.innerHTML = "Ative o modo acessível para textos ampliados e maior contraste.";
    }
    else {
        saída.innerHTML = "Não entendi muito bem, mas estou aqui para ajudar!";
    }
}


// Função acessibilidade
function ativarAcessibilidade() {
    document.body.classList.toggle("acessibilidade");
    alert("Modo acessível ativado!");
}