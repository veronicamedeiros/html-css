const elementos = document.querySelectorAll('[data-anima]')
const aimacaoClass = 'animacao'

function animaScroll(){
    const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*3)/4); /* para a animação começar a 3/4 da janela*/

    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        } else{
            elemento.classList.remove(animacaoClass);
        }
    })
}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}