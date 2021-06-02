var vidaAtual = 10
var vidaMax = 10
var sanidadeatual= 45
	var sanidadetotal= 45

var vida = [vidaAtual,vidaMax]
vidahtml(vida)
function vidahtml(vida){
	
	
  var html = ""
	html += "<tr><td>Vida:</td>"
    html += "<td>"+ vidaAtual + "/" + vidaMax + "</td>"
    html +="<td><button onClick='adicionarVida()'>Cura</button><button onClick='retirarVida()'>Dano</button></td></tr>"
	html += "<tr><td>Sanidade:</td>"
    html += "<td>"+ sanidadeatual + "/" + sanidadetotal + "</td>"
    html +="<td><button onClick='adicionarSanidade()'>Curar</button><button onClick='retirarSanidade()'>Remover</button><button onClick='rollsanidade()'>ROLL</button></td></tr>"
	html +="<tr><td>Força:</td>"
	html +="<td>15</td>"
	html +="<td><button onClick='roll15()'>ROLL</button></td></tr>"
	html +="<tr><td>Destreza:</td>"
	html +="<td>12</td>"
	html +="<td><button onClick='roll12()'>ROLL</button></td></tr>"
	html +="<tr><td>Constituição:</td>"
	html +="<td>13</td>"
	html +="<td><button onClick='roll13()'>ROLL</button></td></tr>"
	html +="<tr><td>Educação:</td>"
	html +="<td>12</td>"
	html +="<td><button onClick='roll12()'>ROLL</button></td></tr>"
	html +="<tr><td>Aparencia:</td>"
	html +="<td>7</td>"
	html +="<td><button onClick='roll7()'>ROLL</button></td></tr>"
	html +="<tr><td>Inteligencia:</td>"
	html +="<td>11</td>"
	html +="<td><button onClick='roll11()'>ROLL</button></td></tr>"
	html +="<tr><td>Poder:</td>"
	html +="<td>7</td>"
	html +="<td><button onClick='roll7()'>ROLL</button></td></tr>"
 
  var tabelastats = document.getElementById("tabelastats")
  tabelastats.innerHTML = html
}
habsespeciasis(vida)
function habsespeciasis(vida){
	var html2 = ""
	html2 +="<tr><td>Usar Computadores:</td>"
	html2 +="<td>18</td>"
	html2 +="<td><button onClick='roll18()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Conserto Elétrico:</td>"
	html2 +="<td>16</td>"
	html2 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Eletrônica:</td>"
	html2 +="<td>18</td>"
	html2 +="<td><button onClick='roll18()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Conversa Rápida:</td>"
	html2 +="<td>16</td>"
	html2 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Usar Internet/Bibliotecas:</td>"
	html2 +="<td>16</td>"
	html2 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Outras Línguas:</td>"
	html2 +="<td>18</td>"
	html2 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Programação:</td>"
	html2 +="<td>16</td>"
	html2 +="<td><button onClick='roll18()'>ROLL</button></td></tr>"
	
	html2 +="<tr><td>Sorte:</td>"
	html2 +="<td>16</td>"
	html2 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	
	var tabelahabs = document.getElementById("tabelahabs")
  tabelahabs.innerHTML = html2
}
pericias(vida)
function pericias(vida){
	var html3 = ""
	
	html3 +="<tr><td>Antropologia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arqueologia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arremessar:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arte:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Artes Marciais:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Barganha:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Biologia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Cavalgar:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Charme:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Chaveiro:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Contabilidade:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Computação:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Direito:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Dirigir Automóveis:</td>"
	html3 +="<td>9</td>"
	html3 +="<td><button onClick='roll9()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Disfarce:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Esconder:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Esquivar:</td>"
	html3 +="<td>8</td>"
	html3 +="<td><button onClick='roll8()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Escalar:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Escutar:</td>"
	html3 +="<td>16</td>"
	html3 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Farmácia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Física:</td>"
	html3 +="<td>8</td>"
	html3 +="<td><button onClick='roll8()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Fotografia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Furtividade:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Geologia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>História:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>História Natural:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Lábia:</td>"
	html3 +="<td>15</td>"
	html3 +="<td><button onClick='roll15()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Língua Nativa:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Localizar:</td>"
	html3 +="<td>5</td>"
	html3 +="<td><button onClick='roll5()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Lutar (Soco):</td>"
	html3 +="<td>16</td>"
	html3 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Lutar (Lâmina/Espada):</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Medicina:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Natação:</td>"
	html3 +="<td>5</td>"
	html3 +="<td><button onClick='roll5()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Navegação:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Ocultar:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Ocultismo:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Ofício:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Op. Máquina:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Persuadir:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Pesquisar Biblioteca:</td>"
	html3 +="<td>5</td>"
	html3 +="<td><button onClick='roll5()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Pilotar:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Primeiros Socorros:</td>"
	html3 +="<td>6</td>"
	html3 +="<td><button onClick='roll6()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Psicanálise:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Psicologia:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Pulo:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Quimica:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Rastrear:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Reparo Mecânico:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Reparo Elétrico:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td colspan = 3>Armas De Fogo</td>"
	
	html3 +="<tr><td>Espingarda:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Metralhadora:</td>"
	html3 +="<td>3 </td></td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Pistola:</td>"
	html3 +="<td>14 </td>"
	html3 +="<td><button onClick='roll14()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Rifle:</td>"
	html3 +="<td>3 </td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Submetralhadora:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arco Balestra:</td>"
	html3 +="<td>3 </td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arco Normal:</td>"
	html3 +="<td>2 </td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	var tabelapericias = document.getElementById("tabelapericias")
  tabelapericias.innerHTML = html3
}

function adicionarVida(){
  var resposta1 = parseInt(prompt('Quanto vida vai curar?'))
   vidaAtual = vidaAtual + resposta1
   vidahtml (vida)
}

function retirarVida(){
	var resposta2 = parseInt(prompt('Quanto dano levou?'))
   vidaAtual = vidaAtual - resposta2
   vidahtml (vida)
}

function adicionarSanidade() {
	var resposta3 = parseInt(prompt('Quanto de sanidade vai curar?'))
   sanidadeatual = sanidadeatual + resposta3
   vidahtml (vida)
}

function retirarSanidade() {
	var resposta4 = parseInt(prompt('Quanto de sanidade vai retirar?'))
   sanidadeatual = sanidadeatual - resposta4
   vidahtml (vida)
}

function rollsanidade () {
	var rolladasanidade = Math.floor(Math.random() * 100) + 1;
	if (rolladasanidade > sanidadeatual){
		alert("Fracasso com " + rolladasanidade)
	}else{
		alert("Sucesso com " + rolladasanidade)
	}
}

function roll15 (){
	var rolladaForça = Math.floor(Math.random() * 20) + 1
	if (rolladaForça >= 18){
		alert("Extremo Dado:"+rolladaForça)
	}else if (rolladaForça >= 14){
		alert("Bom Dado:"+rolladaForça)
	}else if (rolladaForça >= 6){
		alert("Normal Dado:"+rolladaForça)
	}else{
		alert("Fracasso Dado:"+rolladoForça)
	}
}

function roll12 (){
	var rolladoDestreza = Math.floor(Math.random() * 20) + 1
	if (rolladoDestreza >= 19){
		alert("Extremo Dado:"+rolladoDestreza)
	}else if (rolladoDestreza >= 15){
		alert("Bom Dado:"+rolladoDestreza)
	}else if (rolladoDestreza >= 9){
		alert("Normal Dado:"+rolladoDestreza)
	}else{
		alert("Fracasso Dado:"+rolladoDestreza)
	}
}

function roll13 (){
	var rolladoConstituiçao = Math.floor(Math.random() * 20) + 1
	if (rolladoConstituiçao >= 19){
		alert("Extremo Dado:"+rolladoConstituiçao)
	}else if (rolladoConstituiçao >= 15){
		alert("Bom Dado:"+rolladoConstituiçao)
	}else if (rolladoConstituiçao >= 8){
		alert("Normal Dado:"+rolladoConstituiçao)
	}else{
		alert("Fracasso Dado:"+rolladoConstituiçao)
	}
}

function roll7(){
	var rolladoAparencia = Math.floor(Math.random() * 20) + 1
	if (rolladoAparencia = 20){
		alert("Extremo Dado:"+rolladoAparencia)
	}else if (rolladoAparencia >= 18){
		alert("Bom Dado:"+rolladoAparencia)
	}else if (rolladoAparencia >=14){
		alert("Normal Dado:"+rolladoAparencia)
	}else{
		alert("Fracasso Dado:"+rolladoAparencia)
	}
}

function roll11 (){
	var rolladoInteligencia = Math.floor(Math.random() * 20) + 1
	if (rolladoInteligencia >= 19){
		alert("Extremo Dado:"+rolladoInteligencia)
	}else if (rolladoInteligencia >= 16){
		alert("Bom Dado:"+rolladoInteligencia)
	}else if (rolladoInteligencia >= 10){
		alert("Normal Dado:"+rolladoInteligencia)
	}else{
		alert("Fracasso Dado:"+rolladoInteligencia)
	}
}

function roll16 (){
	var rollada16 = Math.floor(Math.random() * 20) + 1
	if (rollada16 >= 18){
		alert("Extremo Dado:"+rollada16)
	}else if (rollada16 >= 13){
		alert("Bom Dado:"+rollada16)
	}else if (rollada16 >= 5){
		alert("Normal Dado:"+rollada16)
	}else{
		alert("Fracasso Dado:"+rollada16)
	}
}

function roll18 (){
	var rollada18 = Math.floor(Math.random() * 20) + 1
	if (rollada18 >= 18){
		alert("Extremo Dado:"+rollada18)
	}else if (rollada18 >= 12){
		alert("Bom Dado:"+rollada18)
	}else if (rollada18 >= 3){
		alert("Normal Dado:"+rollada18)
	}else{
		alert("Fracasso Dado:"+rollada18)
	}
}

function roll2 (){
	var rollada2 = Math.floor(Math.random() * 20) + 1
	 if (rollada2 = 20){
		alert("Bom Dado:"+rollada2)
	}else if (rollada18 >= 19){
		alert("Normal Dado:"+rollada2)
	}else{
		alert("Fracasso Dado:"+rollada2)
	}
}

function roll3 (){
	var rollada3 = Math.floor(Math.random() * 20) + 1
	 if (rollada3 = 20){
		alert("Bom Dado:"+rollada3)
	}else if (rollada3 >= 18){
		alert("Normal Dado:"+rollada3)
	}else{
		alert("Fracasso Dado:"+rollada3)
	}
}

function roll4 (){
	var rollada4 = Math.floor(Math.random() * 20) + 1
	 if (rollada4 >= 19){
		alert("Bom Dado:"+rollada4)
	}else if (rollada4 >= 17){
		alert("Normal Dado:"+rollada4)
	}else{
		alert("Fracasso Dado:"+rollada4)
	}
}

function roll1 (){
	var rollada1 = Math.floor(Math.random() * 20) + 1
	if (rollada1 = 20){
		alert("Normal Dado:"+rollada1)
	}else{
		alert("Fracasso Dado:"+rollada1)
	}
}

function roll9 (){
	var rollado9 = Math.floor(Math.random() * 20) + 1
	if (rollado9 >= 20){
		alert("Extremo Dado:"+rollado9)
	}else if (rollado9 >= 17){
		alert("Bom Dado:"+rollado9)
	}else if (rollado9 >= 12){
		alert("Normal Dado:"+rollado9)
	}else{
		alert("Fracasso Dado:"+rollado9)
	}
}

function roll8 (){
	var rollado8 = Math.floor(Math.random() * 20) + 1
	if (rollado8 >= 20){
		alert("Extremo Dado:"+rollado8)
	}else if (rollado8 >= 17){
		alert("Bom Dado:"+rollado8)
	}else if (rollado8 >= 13){
		alert("Normal Dado:"+rollado8)
	}else{
		alert("Fracasso Dado:"+rollado8)
	}
}

function roll5 (){
	var rollado5 = Math.floor(Math.random() * 20) + 1
	if (rollado5 >= 20){
		alert("Extremo Dado:"+rollado5)
	}else if (rollado5 >= 19){
		alert("Bom Dado:"+rollado5)
	}else if (rollado5 >= 16){
		alert("Normal Dado:"+rollado5)
	}else{
		alert("Fracasso Dado:"+rollado5)
	}
}

function roll14 (){
	var rollada14 = Math.floor(Math.random() * 20) + 1
	if (rollada14 >= 19){
		alert("Extremo Dado:"+rollada14)
	}else if (rollada14 >= 14){
		alert("Bom Dado:"+rollada14)
	}else if (rollada14 >= 7){
		alert("Normal Dado:"+rollada14)
	}else{
		alert("Fracasso Dado:"+rollada14)
}
}

function roll6(){
	var rollado6 = Math.floor(Math.random() * 20) + 1
	if (rollado6 = 20){
		alert("Extremo Dado:"+rollado6)
	}else if (rollado6 >= 18){
		alert("Bom Dado:"+rollado6)
	}else if (rollado6 >= 15){
		alert("Normal Dado:"+rollado6)
	}else{
		alert("Fracasso Dado:"+rollado6)
	}
}
