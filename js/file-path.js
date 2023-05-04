document.addEventListener("DOMContentLoaded", (_) => {
  document.querySelectorAll("code").forEach((el) => {
    const regex = /file:\S*/g;

    if (regex.test(el.className)) {
      console.log(el.className);
      const className = el.className.match(regex)[0];
      const fileName = className.split("file:").pop();
      const child = document.createElement("sub");
      child.style = "width: 100%; text-align: right; display: block;";
      child.innerHTML = `☝ ${fileName}`;
      el.parentNode.append(child);
    }
  });
});
