/** Mobile menu: the button toggles the link list and keeps aria-expanded in sync. */
export function initNav(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const list = document.querySelector<HTMLElement>("[data-nav-list]");
  if (!button || !list) return;

  button.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}
