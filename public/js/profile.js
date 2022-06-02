const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#blog-name").value.trim();
  const entry = document.querySelector("#blog-entry").value.trim();

  if (name && entry) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ name, entry }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create blog");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete blog");
    }
  }
};
//adding edit button handler
const editButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to edit blog");
    }
  }
};

document
  .querySelector(".new-blog-entry")
  .addEventListener("submit", newFormHandler);

document
  .querySelector("#deletebutton")
  .addEventListener("click", delButtonHandler);

document
  .querySelector(".editbutton")
  .addEventListener("click", editButtonHandler);
