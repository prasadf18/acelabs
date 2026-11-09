/**
 * Decorative animated network behind the home page hero.
 * Respects prefers-reduced-motion: it draws one still frame and never animates.
 */
export function startNetwork(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
  const LINK_DISTANCE = 130;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resize();
  addEventListener("resize", resize);

  for (let i = 0; i < 46; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    });
  }

  function frame() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach((a, i) => {
      if (!reduced) {
        a.x += a.vx;
        a.y += a.vy;
      }
      if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
      if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

      ctx!.fillStyle = "#ff8a57";
      ctx!.fillRect(a.x, a.y, 2, 2);

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < LINK_DISTANCE) {
          ctx!.strokeStyle = `rgba(255,138,87,${(1 - distance / LINK_DISTANCE) * 0.35})`;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }
    });

    if (!reduced) requestAnimationFrame(frame);
  }

  frame();
}
