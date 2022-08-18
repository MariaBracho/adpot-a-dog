export const downloadImage = (url, name) => {
  console.log(url);
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    });
};
