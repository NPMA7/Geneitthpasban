// PAGE RENDERED /SECONDS
window.addEventListener("load", () => {
  const renderTime = (performance.now() / 1000).toFixed(4); // Menghitung waktu render dalam detik
  document.getElementById("renderTimeValue").textContent = renderTime;
});
