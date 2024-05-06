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
    
    
    document.addEventListener('swiped-left', function(e) {
        let index = -1;
    
        let i = 0;
        let cards = container.querySelectorAll(".card");
        
        cards.forEach((card) => {
            if (card.classList.contains("active"))
                index = i;
            i++;
        });
    
        if (index < (cards.length - 1)) {
            i = 0;
            cards.forEach((card) => {
                if (index == i)
                    card.classList.remove("active");
                if ((index + 1) == i)
                    card.classList.add("active");
                i++;
            });
        }
    });
    
    document.addEventListener('swiped-right', function(e) {
        let index = -1;
    
        let i = 0;
        let cards = container.querySelectorAll(".card");
        
        cards.forEach((card) => {
            if (card.classList.contains("active"))
                index = i;
            i++;
        });
    
        if (index > 0) {
            i = 0;
            cards.forEach((card) => {
                if (index == i)
                    card.classList.remove("active");
                if ((index - 1) == i)
                    card.classList.add("active");
                i++;
            });
        }
    });
}