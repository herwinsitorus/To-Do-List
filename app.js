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

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const checkboxSelesai = document.createElement("input");
  checkboxSelesai.type = "checkbox";
  
  checkboxSelesai.addEventListener("change", function () {
    if (this.checked) {
      liBaru.classList.add("completed"); // Tambahkan class completed jika dicentang
    } else {
      liBaru.classList.remove("completed"); // Hapus class jika uncentang
    }
  });

  const teksCatatan = document.createElement("span");
  teksCatatan.textContent = isiTeks;

  taskContent.append(checkboxSelesai, teksCatatan);

  const btnHapus = document.createElement("button");
  btnHapus.className = "btn-hapus";
  btnHapus.textContent = "Hapus";
  btnHapus.addEventListener("click", function () {
    liBaru.remove();
    totalCatatan--;
    perbaruiJumlah();
    console.log(`[DOM] Catatan "${isiTeks}" dihapus`);
  });

  liBaru.append(taskContent, btnHapus);
  daftarCatatan.appendChild(liBaru);
  
  inputCatatan.value = "";
  totalCatatan++;
  perbaruiJumlah();
  console.log(`[DOM] Catatan Baru ditambahkan: ${isiTeks}`);
}

btnTambah.addEventListener("click", function () {
  tambahCatatan();
});

inputCatatan.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    tambahCatatan();
  }
});