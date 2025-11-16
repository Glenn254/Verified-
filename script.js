document.addEventListener("DOMContentLoaded", () => {
    const current = 678;
    const target = 1000;
    const remaining = target - current;

    document.getElementById("current").textContent = current;
    document.getElementById("remaining").textContent = remaining;

    const progress = Math.round((current / target) * 100);
    document.getElementById("progress-percentage").textContent = progress + "%";
    document.getElementById("progress").style.width = progress + "%";
});
