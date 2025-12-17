export function initResize() {
  const topSep = document.getElementById("top-sep");
  const leftSep = document.getElementById("left-sep");
  const rightSep = document.getElementById("right-sep");
  const files = document.getElementById("files");
  const tools = document.getElementById("tools");
  if (!topSep || !leftSep || !rightSep || !files || !tools) return;

  /* -------- TOP (rows) -------- */

  topSep.addEventListener("mousedown", () => {
    document.body.classList.add("resizing");

    function onMove(e) {
      document.body.style.gridTemplateRows = `${e.clientY}px 4px 1fr`;
    }

    function onUp() {
      document.body.classList.remove("resizing");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });

  /* -------- LEFT (columns) -------- */

  leftSep.addEventListener("mousedown", () => {
    document.body.classList.add("resizing");

    const rightFixed = tools.getBoundingClientRect().width;

    function onMove(e) {
      const rightX = rightSep.getBoundingClientRect().left;
      const left = Math.min(e.clientX, rightX - 4);

      document.body.style.gridTemplateColumns =
        `${left}px 4px 1fr 4px ${rightFixed}px`;
    }

    function onUp() {
      document.body.classList.remove("resizing");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });

  /* -------- RIGHT (columns) -------- */

  rightSep.addEventListener("mousedown", () => {
    document.body.classList.add("resizing");

    const leftFixed = files.getBoundingClientRect().width;

    function onMove(e) {
      const leftX = leftSep.getBoundingClientRect().right;
      const x = Math.max(e.clientX, leftX + 4);
      const right = window.innerWidth - x;

      document.body.style.gridTemplateColumns =
        `${leftFixed}px 4px 1fr 4px ${right}px`;
    }

    function onUp() {
      document.body.classList.remove("resizing");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
}
