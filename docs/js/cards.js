const container = document.querySelector(".container-cards");
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
        let currentIndex = -1;
        let cards = container.querySelectorAll(".card");
        
        let i = 0;
        cards.forEach((card) => {
            if (card.classList.contains("active"))
                currentIndex = i;
            i++;
        });
    
        if (currentIndex < (cards.length - 1)) {
            i = 0;
            cards.forEach((card) => {
                if (currentIndex == i)
                    card.classList.remove("active");
                if ((currentIndex + 1) == i)
                    card.classList.add("active");
                i++;
            });
        }
    });
    
    container.addEventListener('swiped-right', () => {
        let currentIndex = -1;
        let cards = container.querySelectorAll(".card");

        let i = 0;
        cards.forEach((card) => {
            if (card.classList.contains("active"))
                currentIndex = i;
            i++;
        });
    
        if (currentIndex > 0) {
            i = 0;
            cards.forEach((card) => {
                if (currentIndex == i)
                    card.classList.remove("active");
                if ((currentIndex - 1) == i)
                    card.classList.add("active");
                i++;
            });
        }
    });
}