// script proposal page start

const hitung = document.getElementById("hitung");

hitung.addEventListener("click", (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir default

  const luasWilayahInput = document.getElementById("luas");
  const luasWilayah = parseFloat(luasWilayahInput.value); // Konversi ke angka

  const inputs = document.querySelectorAll("section.form .form input");

  let isValid = true;

  // Memeriksa setiap input
  inputs.forEach((input) => {
    if (input.value === "") {
      isValid = false;
    }
  });

  if (luasWilayah >= 1000 && isValid) {
    // Simpan nilai luas wilayah di localStorage
    localStorage.setItem("luasWilayah", luasWilayah);
    window.location.href = "./harga.html";
  } else {
    console.log("Minimal luas wilayah 1000 dan semua input harus diisi.");
  }
});

// script proposal page end
