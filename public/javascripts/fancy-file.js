// Logica del input tipe file con la carpetita en register
const files = document.querySelectorAll(".fancy-file");

Array.from(files).forEach(f => {
  f.addEventListener("change", e => {
    const span = document.getElementById("file-name");
    if (f.files.length === 0) {
      span.innerHTML = "Ningún archivo seleccionado";
    } else {
      const fileName = f.files[0].name;
      const maxLength = 20; // Define la longitud máxima del nombre del archivo
      if (fileName.length > maxLength) {
        const truncatedName = fileName.substring(0, maxLength) + "...";
        span.innerHTML = truncatedName;
      } else {
        span.innerHTML = fileName;
      }
    }
  });
});
