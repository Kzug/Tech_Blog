const editButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    event.preventDefault();
    const id = event.target.getAttribute("data-id");
    const name = document.querySelector("#blog-name").value.trim();
    const entry = document.querySelector("#blog-entry").value.trim();

    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, entry }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to edit blog");
    }
  }
};

document
  .querySelector(".editbutton")
  .addEventListener("click", editButtonHandler);
