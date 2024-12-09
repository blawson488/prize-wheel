const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", () => {
  const randomDegree = Math.floor(Math.random() * 3600) + 360; // Random spin
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    const finalDegree = randomDegree % 360;
    let prize;
    if (finalDegree < 45) prize = "Stickers";
    else if (finalDegree < 90) prize = "Sticky Hand";
    else if (finalDegree < 135) prize = "Pop It";
    else if (finalDegree < 180) prize = "Slinky";
    else if (finalDegree < 225) prize = "Bouncy Ball";
    else if (finalDegree < 270) prize = "Parachute Man";
    else if (finalDegree < 315) prize = "Mini Puzzle";
    else prize = "Rubber Duck";

    alert(`You won: ${prize}`);
  }, 4000); // Match the animation duration
});
