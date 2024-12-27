document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    const progress = bar.querySelector(".progress");
    const percentageText = bar.querySelector(".skill-percentage");
    const targetPercentage = parseInt(percentageText.textContent, 10);

    // Atur lebar progress bar dengan animasi
    setTimeout(() => {
      progress.style.width = `${targetPercentage}%`;
    }, 500);

    // Animasi angka persentase dari 0 hingga target
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage >= targetPercentage) {
        clearInterval(interval);
      } else {
        currentPercentage++;
        percentageText.textContent = `${currentPercentage}%`;
      }
    }, 20); // Kecepatan animasi angka (20ms per step)
  });
});