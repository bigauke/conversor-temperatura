// Termômetro animado

function tempLoad(){
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb;";

    setTimeout(function(){
        temp.innerHTML = "&#xf2ca;";
    }, 1000);

    setTimeout(function(){
        temp.innerHTML = "&#xf2c9;";
    }, 2000);

    setTimeout(function(){
        temp.innerHTML = "&#xf2c8;";
    }, 3000);

    setTimeout(function(){
        temp.innerHTML = "&#xf2c7;";
    }, 4000);
}

tempLoad();

setInterval(tempLoad, 5000);

// Converter de Celsius para ->
document.getElementById('temperatura-entrada').addEventListener('input', function(e){
    //Carrega o valor da temperatura de entrada em Celsius
    let temperaturaEntrada = parseFloat(e.target.value);

    if (temperaturaEntrada){
        document.getElementById('saida').style.display = "inline";
    

    //Carrega o valor da temperatura de entrada Kelvin
    document.getElementById('saida-kelvin').innerHTML = (temperaturaEntrada + 273.15).toFixed(2) + " K";

    //Carrega o valor da temperatura de entrada Fahrenheit
    document.getElementById('saida-fahrenheit').innerHTML = (( 5 / 9 ) * ((temperaturaEntrada) - 32)).toFixed(2) + " °F";

    //Carrega o valor da temperatura de entrada RANKINE
    document.getElementById('saida-rankine').innerHTML = ((temperaturaEntrada + 273.15) * (9/5)).toFixed(2) + " °R";
    
    }else{
        document.getElementById('saida').style.display = "none";
    }
});