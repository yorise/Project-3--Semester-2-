//script harga page start

// Ambil nilai luas wilayah dari localStorage
const luasWilayah = localStorage.getItem("luasWilayah");

// Kalikan nilai dengan 25.000 dan 30.000
const basis = luasWilayah * 25000;
const premium = luasWilayah * 30000;

// Format hasil dengan pemisah ribuan
const formattedBasis = basis.toLocaleString("id-ID");
const formattedPremium = premium.toLocaleString("id-ID");

document.getElementById("luas-wilayah").textContent = luasWilayah;
document.getElementById("basis").textContent = formattedBasis;
document.getElementById("premium").textContent = formattedPremium;

//script harga page end
