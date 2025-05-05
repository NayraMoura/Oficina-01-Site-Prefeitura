document.getElementById('imcForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    
    const peso = parseFloat(document.getElementById('peso').value);  
    const altura = parseFloat(document.getElementById('altura').value);  
    const resultadoDiv = document.getElementById('resultado');  
    const imagemPersonagem = document.getElementById('imagemPersonagem');  

    // Verifica se os valores de peso e altura são válidos.  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {  
        resultadoDiv.innerHTML = '<p style="color: red;">Favor inserir valores válidos.</p>';  
        imagemPersonagem.src = 'assets/img/dados-invalidos.png';   
        imagemPersonagem.style.display = 'block'; // Exibe a imagem  
        return;    
    }  
    
    const imc = (peso / (altura * altura)).toFixed(2);  
    
    let descricao = '';  
    let imagemSrc = '';  

    if (imc < 18.5) {  
        descricao = 'Você está abaixo do peso';  
        imagemSrc = 'assets/img/peso_abaixo.png';   
    } else if (imc < 24.9) {  
        descricao = 'Você está com peso normal';  
        imagemSrc = 'assets/img/peso_normal.png';   
    } else if (imc < 29.9) {  
        descricao = 'Você está com sobrepeso';  
        imagemSrc = 'assets/img/peso_sobre.png';   
    } else {  
        descricao = 'Você está com obesidade';  
        imagemSrc = 'assets/img/peso_acima.png';   
    }  

    resultadoDiv.innerHTML = `<p>Seu IMC é <strong>${imc}</strong>. Classificação: ${descricao}</p>`;  
    imagemPersonagem.src = imagemSrc;  
    imagemPersonagem.style.display = 'block';  
});