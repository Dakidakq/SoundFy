  function copyToClipboard() {
    const text = document.getElementById("copyText").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Скопировано: " + text);
    }).catch(err => {
      alert("Ошибка копирования");
      console.error(err);
    });
  }

  