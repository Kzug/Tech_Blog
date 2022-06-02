const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#addComment").value.trim();

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile"); //what is this doing?
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".addComment")
  .addEventListener("submit", newCommentHandler);
