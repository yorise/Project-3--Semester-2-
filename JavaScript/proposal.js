// script proposal page start

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir default

  const luasWilayahInput = document.getElementById("luas");
  const luasWilayah = parseInt(luasWilayahInput.value); // Konversi ke angka

  const inputs = document.querySelectorAll("section.form .form input");
  var error = document.querySelector("section.form .form form span.error");

  let isValid = true;

  // Memeriksa setiap input
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value === "") {
        isValid = false;
      }
    });
  });

  if (luasWilayah >= 1000) {
    if (isValid) {
      // Simpan nilai luas wilayah di localStorage
      localStorage.setItem("luasWilayah", luasWilayah);
      window.location.href = "./harga.html";
    }
  } else {
    error.style.display = "block";
  }
});

// script proposal page end
