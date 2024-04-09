let index = 1;
showSlides(1);

//
function addSlides(n) {
    showSlides(index += n)
}

//carrega o card atual que o usuário quer exibir
function currentSlide(n) {
    showSlides(index = n)
}

//Irá exibir o card na tela
function showSlides(n) {
    //seleciona os cards
    let slides = document.getElementsByClassName("slides");
    //seleciona os pontos que irão alterar o card atual na tela
    let dots = document.getElementsByClassName("dot");

    //se o número do slide que o usuário tentar exibir for maior que a quantidade de cards disponíveis ele irá automaticamente voltar para o primeiro slide ou seja, quando o usuário estiver no último slide ele automaticamente volta para o primeiro
    if (n > slides.length) {
        index = 1;
    }

    //se o número do slide for menor que 0 ele irá automaticamente para o último card do slide.
    if (n < 1) {
        index = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        //replace(" active", "") = substitui uma string por qualquer outra que for definida, será obrigatório informar primeiramente a string que será substituida e depois a string que irá substituir a primeira.
        dots[i].className = dots[i].className.replace(" active","");
    }

    slides[index - 1].style.display = "flex";
    dots [index - 1].className += "active";
}