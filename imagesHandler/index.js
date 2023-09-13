const inputFile = document.querySelector('input')

inputFile.addEventListener('change', (e) => {
    const formData = new FormData();
    formData.append("video", inputFile.files[0], inputFile.files[0].name);

    fetch("http://localhost:5000/uploads/", {
      method: "POST",
      body: formData,
    });
})
