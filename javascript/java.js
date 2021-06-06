

var slider = document.querySelector('.sliders')

var inicio;

slider.style.marginLeft = '0vw';

//setInterval(atualizartempo, 8000)

function atualizartempo(){
    inicio = setInterval(atualizarSlider, 200)
}

function atualizarSlider(){
    slider.style.marginLeft = (parseInt(slider.style.marginLeft) - 1) + 'vw';
    if(parseInt(slider.style.marginLeft) == -100){
        clearInterval(inicio)
    }
}
