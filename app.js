console.log("Tugas To-Do List");

const inputCatatan = document.getElementById("input-task");
const btnTambah = document.getElementById("btn-add");
const daftarCatatan = document.getElementById("list-tasks");
const jumlahCatatan = document.getElementById("amount-tasks");
const pesanKosong = document.getElementById("empty-massage");

let totalCatatan = 0;

function perbaruiJumlah() {
  jumlahCatatan.innerText = totalCatatan;
  if (totalCatatan === 0) {
    pesanKosong.classList.remove("hidden");
  } else {
    pesanKosong.classList.add("hidden");
  }
}

function tambahCatatan() {
  const isiTeks = inputCatatan.value.trim();
  if (isiTeks === "") {
    alert("Catatan tidak boleh kosong!");
    return;
  }

  const liBaru = document.createElement("li");
  liBaru.className = "note-item";

  const teksCatatan = document.createElement("span");
  teksCatatan.textContent = isiTeks;

  const btnHapus = document.createElement("button");
  btnHapus.className = "btn-hapus";
  btnHapus.textContent = "Delete";
  btnHapus.addEventListener("click", function () {
    liBaru.remove();
    totalCatatan--;
    perbaruiJumlah();
    console.log(`[DOM] Catatan "${isiTeks}" dihapus`);
  });

  liBaru.append(teksCatatan, btnHapus);
  daftarCatatan.appendChild(liBaru);
  inputCatatan.value = "";
  totalCatatan++;
  perbaruiJumlah();
  console.log(`[DOM] Catatan Baru ditambahkan: ${isiTeks}`);
} // <-- KURUNG KURAWAL DITUTUP DI SINI

// Event Listener sekarang berada di luar fungsi utama
btnTambah.addEventListener("click", function () {
  tambahCatatan();
});

inputCatatan.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    tambahCatatan();
  }
});