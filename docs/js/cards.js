for (id of ["","1","2","3","4","5","6","7"]) {
    let container = document.querySelector(".container-cards");
    if (id != "")
        container = document.getElementById("cards-" + id);

    if (container) {
        container.addEventListener("click", (e) => {
            const target = e.target.closest(".card");
        
            if (!target) return;
        
            container.querySelectorAll(".card").forEach((card) => {
                card.classList.remove("active");
            });
        
            target.classList.add("active");
        });
        
        
        container.addEventListener('swiped-left', () => {
            let cards = [...container.querySelectorAll(".card")];
            let currentIndex = cards.findIndex(c => c.classList.contains("active"));
        
            if (currentIndex < (cards.length - 1)) {
                cards[currentIndex].classList.remove("active");
                cards[currentIndex + 1].classList.add("active");
            }
        });
        
        container.addEventListener('swiped-right', () => {
            let cards = [...container.querySelectorAll(".card")];
            let currentIndex = cards.findIndex(c => c.classList.contains("active"));
        
            if (currentIndex > 0) {
                cards[currentIndex].classList.remove("active");
                cards[currentIndex - 1].classList.add("active");
            }
        });
    }
}