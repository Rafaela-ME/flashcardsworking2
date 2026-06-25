const cards = document.querySelectorAll(".card");
const contador = document.getElementById("contador");

let descobertos = 0;

cards.forEach(card => {

    card.addEventListener("click", () => {

        if(!card.classList.contains("visitado")){

            card.classList.add("visitado");
            descobertos++;

            contador.innerHTML =
                `Você descobriu ${descobertos} de ${cards.length} curiosidades 🌱`;

            if(descobertos === cards.length){

                setTimeout(() => {

                    alert("🎉 Parabéns! Você concluiu todas as curiosidades sobre Agro Forte, Futuro Sustentável!");

                },300);

            }

        }

        card.classList.toggle("flipped");

    });

});
