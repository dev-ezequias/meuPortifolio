let button = document.getElementById("leia-mais");

button.addEventListener("click", function(){
    let card = document.querySelector(".section-card");
    card.classList.toggle("active");

    if (card.classList.contains("active")){
        return button.textContent = "Ler menos";
    }

    button.textContent = "Leia mais";
});