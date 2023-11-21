const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const file = document.getElementById("file");

  console.log(file);

  const formData = new FormData();

  formData.append("image", file.files[0]);

  fetch("http://localhost:5000/upload_files", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(
        Promise.resolve(response.json()).then((data) => {
          document.getElementById("image").src =
            "http://localhost:5000/" + data.imageUrl;
        })
      );
    })
    .catch((err) => ("Error occured", err));
}
