const preguntas = document.getElementsByClassName('question-container');
const arrow = document.querySelectorAll('.question .arrow'); 
const answers = document.querySelectorAll('.content');

    for(var i=0; i<preguntas.length; i++){
    preguntas[i].addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        console.log(preguntas)
        //muestra la respuesta de esta pregunta 
        e.currentTarget.querySelector('.content').classList.toggle('activa');
        //muestra el icono de esta pregunta
        e.currentTarget.querySelector('.arrow').classList.toggle('activo');


    })
}     