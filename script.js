const spinner = document.getElementById("spinner");
const spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", () => {
  const randomDegree = Math.floor(Math.random() * 3600) + 360; // Random spin
  spinner.style.transition = "transform 4s ease-out";
  spinner.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    const finalDegree = randomDegree % 360;
    let prize = Math.ceil(finalDegree / 45); // Each section covers 45 degrees
    if (prize === 0) prize = 8; // Ensure we count section 8 correctly
    alert(`You won: ${prize}`);
  }, 4000); // Match the animation duration
});
