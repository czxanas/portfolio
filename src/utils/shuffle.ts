import { gsap } from "gsap";
import { generateRandomWord } from "./random";


export const shuffleAnimation = () => {
    const shuffleElems = gsap.utils.toArray("[data-shuffle-hover]");
    const duration = 50;
    const stopAfter = 250;
    shuffleElems.forEach((elem: any, index: number) => {
        const original = elem.innerText;
        let intervalId: any;
        elem.addEventListener("mouseenter", () => {
            intervalId = setInterval(() => {
                const WORDS_STOCK_ARRAY = original.split("");
                const NEW_WORD = generateRandomWord(WORDS_STOCK_ARRAY);
                elem.innerText = NEW_WORD;
            }, duration);
            // Stop the interval after 1000 ms (1 second)
            setTimeout(() => {
                clearInterval(intervalId);
                elem.innerText = original;
            }, stopAfter);
        });
        elem.addEventListener("mouseleave", () => {
            clearInterval(intervalId); // Stops the interval
            elem.innerText = original;
        });
    });
};
