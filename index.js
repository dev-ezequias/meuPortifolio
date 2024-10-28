let buttons = document.querySelectorAll(".leia-mais");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let card = this.closest(".section-card");

        // Verifica o estado atual do card clicado
        let isActive = card.classList.contains('active');

        // Fecha todos os cards
        document.querySelectorAll('.section-card').forEach(c => {
            c.classList.remove('active');
            c.querySelector('.content').style.maxHeight = '215px';
            c.querySelector('.leia-mais').textContent = 'Leia mais';
        });

        // Se o card clicado não estava ativo, abre ele
        if (!isActive) {
            card.classList.add("active");
            card.querySelector('.content').style.maxHeight = '1000px'; // ou o valor que deseja expandir
            this.textContent = "Ler menos";
        }
    });
});

document.getElementById("limpar").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("meu-formulario").reset();
})