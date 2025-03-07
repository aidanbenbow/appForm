

  const textArea = document.querySelector("#playergood");
  const wordCounter = document.getElementById("word-good");

  textArea.addEventListener("input", () => {
    const text = textArea.value.trim();
    const wordCount = text === "" ? 0 : text.split(/\s+/).length;
    wordCounter.textContent = `${wordCount} words`;
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  });

