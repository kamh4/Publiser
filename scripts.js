function buyProduct(price) {
  document.querySelector("#checkout").style.display = "block";
  document.querySelector("#products").style.display = "none";
  document.querySelector("#total").textContent = price;
}

document.querySelector("#checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.querySelector("#phone").value;
  const total = document.querySelector("#total").textContent;

  if (phone) {
    alert(`Pembelian pulsa senilai Rp${total} untuk nomor ${phone} berhasil!`);
    location.reload(); // Kembali ke halaman awal
  } else {
    alert("Nomor HP tidak boleh kosong!");
  }
});