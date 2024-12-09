const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", () => {
  const randomDegree = Math.floor(Math.random() * 3600) + 360; // Random spin
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    const finalDegree = randomDegree % 360;
    let prize;
    if (finalDegree < 90) prize = "Prize 1";
    else if (finalDegree < 180) prize = "Prize 2";
    else if (finalDegree < 270) prize = "Prize 3";
    else prize = "Prize 4";

    alert(`You won: ${prize}`);
  }, 4000); // Match the animation duration
});
