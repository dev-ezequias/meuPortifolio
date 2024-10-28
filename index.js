let buttons = document.querySelectorAll("#leia-mais");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        let card = this.closest(".section-card");
        card.classList.toggle("active");
        if (card.classList.contains("active")){
            return this.textContent = "Ler menos";
        }
        this.textContent = "Leia mais";
    });
});
