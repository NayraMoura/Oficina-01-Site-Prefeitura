document.getElementById('imcForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    
    const peso = parseFloat(document.getElementById('peso').value);  
    const altura = parseFloat(document.getElementById('altura').value);  
    
    // Verifica se os valores de peso e altura são válidos.  
    if (peso <= 0 || altura <= 0) {  
        resultadoDiv.innerHTML = '<p>Favor inserir valores válidos.</p>';  
        imagemPersonagem.src = 'assets/img/dados-invalidos.png';   
        imagemPersonagem.style.display = 'block'; // Exibe a imagem  
        return;   
    }  
    
    const imc = (peso / (altura * altura)).toFixed(2);  
    const resultadoDiv = document.getElementById('resultado');  
    const imagemPersonagem = document.getElementById('imagemPersonagem');  
    
    let descricao = '';  

    if (imc < 18.5) {  
        descricao = 'Você está abaixo do peso';  
        imagemPersonagem.src = 'assets/img/peso_abaixo.png';   
    } else if (imc < 24.9) {  
        descricao = 'Você está com peso normal';  
        imagemPersonagem.src = 'assets/img/peso_normal.png';   
    } else if (imc < 29.9) {  
        descricao = 'Você está com sobrepeso';  
        imagemPersonagem.src = 'assets/img/peso_sobre.png';   
    } else {  
        descricao = 'Você está com obesidade';  
        imagemPersonagem.src = 'assets/img/peso_acima.png';   
    }  

    resultadoDiv.innerHTML = `<p>Seu IMC é ${imc}. Classificação: ${descricao}</p>`;  
    imagemPersonagem.style.display = 'block';  
});