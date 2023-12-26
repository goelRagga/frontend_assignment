//Moving text Animation
export function displayText(index, text, ref) {
  ref.current.textContent = text.slice(0, index);
}

export function scaleText(ref) {
  ref.current.style.transform = "scale(1.4)";
}

export function resetText(ref) {
  ref.current.style.transform = "scale(1)";
}

export function startMovingTextAnimation(ref, text) {
  let index = 0;
  function animate() {
    displayText(index, text, ref);
    index++;

    if (index <= text.length) {
      setTimeout(animate, 100);
    } else {
      scaleText(ref);
      setTimeout(() => {
        resetText(ref);
        index = 0;
        animate();
      }, 2000);
    }
  }

  animate();
}
