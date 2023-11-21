const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const file = document.getElementById("file");

  console.log(file);

  const formData = new FormData();

  formData.append("image", file.files[0]);

  fetch("https://4yf87n-5000.csb.app/upload_files", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(
        Promise.resolve(response.json()).then((data) => {
          document.getElementById("image").src =
            "https://4yf87n-5000.csb.app/" + data.imageUrl;
        })
      );
    })
    .catch((err) => ("Error occured", err));
}
