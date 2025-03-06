// const form: HTMLFormElement | null = document.getElementById("form") as HTMLFormElement;
// const countdownDisplay: HTMLElement | null = document.getElementById("countdown-display") as HTMLElement;

// form.onsubmit = function(event: Event): void {
//     event.preventDefault();
//     let countdown: number = parseInt((document.getElementById("countdown") as HTMLInputElement).value, 10);
    
//     const countDownTimer: NodeJS.Timeout = setInterval(() => {
//         if (countdownDisplay) {
//             countdownDisplay.innerHTML = countdown.toString();
//         }
//         countdown--;
        
//         if (countdown < 0) {
//             clearInterval(countDownTimer);
//             if (countdownDisplay) {
//                 countdownDisplay.innerHTML = "Done!";
//             }
//         }
//     }, 1000);
// }