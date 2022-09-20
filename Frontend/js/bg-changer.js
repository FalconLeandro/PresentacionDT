
function bgChanger() {
    
    var label = document.getElementById("label1");
    const tema = document.body.classList.toggle('light');

    if (tema) {
        label.innerHTML='<i class="fas fa-sun i"></i>'
        
    } else{
        label.innerHTML='<i class="fas fa-moon i"></i>'
    }

}
function cardChanger() {
    var card = document.querySelectorAll(".card");
    console.log(card);
    card.forEach(element => {
        element.classList.toggle('cards-contract');
        
    });
    
}
