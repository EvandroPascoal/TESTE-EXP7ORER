document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card'); // Seleciona todos os elementos com a classe .card

    cards.forEach(function(card) {
        const cardInner = card.querySelector('.card-inner'); // Seleciona o .card-inner dentro do card
        const cardFront = card.querySelector('.card-front img');
        const cardBack = card.querySelector('.card-back');
        // const carddd = card.querySelector('.card');
        

        // Ajusta o tamanho do card após a imagem carregar
        cardFront.onload = function() {
            cardBack.style.height = `${cardFront.clientHeight}px`;
            card.style.width = `${cardFront.clientWidth}px`;
            card.style.height = `${cardFront.clientWidth}px`;
            cardBack.style.width = `${cardFront.clientWidth}px`;
        };

        // Garante que a imagem já está carregada ao ajustar, caso ela seja rápida no cache
        if (cardFront.complete) {
            cardBack.style.height = `${cardFront.clientHeight}px`;
            card.style.width = `${cardFront.clientWidth}px`; // Ajusta a largura do card
            card.style.height = `${cardFront.clientHeight}px`;
            cardBack.style.width = `${cardFront.clientWidth}px`;
        }

        // Rotação ao clicar no .card-inner
        cardInner.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
    });


    const starIcons = document.querySelectorAll('.starIcon');
    starIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = 'yellow';
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = '#fff'; // Cor padrão
            }
        });
    });

    const saveIcons = document.querySelectorAll('.saveIcon');
    saveIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#fff'; // Altera a cor para branco
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = '#fff'; // Cor padrão
            }
        });
    });
});


const images = document.querySelectorAll('.reveal');
images.forEach((img, index) => {
    ScrollReveal().reveal(img, {
        distance: '100px',
        duration: 900,
        easing: 'ease-in-out',
        origin: 'bottom',
        delay: index * 30, // Incrementa o delay em 200ms para cada imagem
        reset: true
    });
});

