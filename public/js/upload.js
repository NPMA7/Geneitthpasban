
document
.getElementById("uploadForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append(
    "sender_name",
    document.getElementById("senderName").value
  );
  formData.append("image", document.getElementById("image").files[0]);

  fetch("/api/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Tampilkan modal setelah upload berhasil
        const modal = document.getElementById("upload-success-modal");
        const closeModalButton = document.getElementById(
          "close-upload-success-modal"
        );

        modal.style.display = "block";

        closeModalButton.onclick = () => {
          modal.style.display = "none";
        };

        window.onclick = (event) => {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };

        // Kosongkan input form setelah berhasil upload
        document.getElementById("senderName").value = "";
        document.getElementById("image").value = "";
        loadImages(); // Muat ulang gambar setelah unggahan berhasil
        viewImages(); // Muat ulang gambar setelah unggahan berhasil
      } else {
        alert("Failed to upload image");
      }
    })
    .catch((error) => console.error("Error:", error));
});

function loadImages() {
fetch("/api/images")
  .then((response) => response.json())
  .then((images) => {
    const imageTableBody = document.getElementById("imageTableBody");
    imageTableBody.innerHTML = ""; // Kosongkan tabel
    images.forEach((image) => {
      const tr = document.createElement("tr");
      const tdImg = document.createElement("td");
      const img = document.createElement("img");
      img.src = `/api/images/${image.id}`;
      img.alt = image.sender_name;
      img.style.width = "200px";
      img.style.height = "100px";
      tdImg.appendChild(img);

      const tdName = document.createElement("td");
      tdName.textContent = image.sender_name;

      tr.appendChild(tdImg);
      imageTableBody.appendChild(tr);
    });
  })
  .catch((error) => console.error("Error:", error));
}

// Muat gambar saat halaman dimuat
loadImages();