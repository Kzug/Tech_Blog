const newCommentHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector(".commentcontent").value.trim();

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ entry: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};
document
  .querySelector(".addcomment")
  .addEventListener("click", newCommentHandler);
