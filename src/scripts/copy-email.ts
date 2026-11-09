/**
 * Contact page: "Copy address" button. The mailto link works without JavaScript;
 * this only adds a convenience for people whose mail app does not open.
 */
export function initCopyEmail(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-copy-email]");
  const status = document.querySelector<HTMLElement>("[data-copy-status]");
  if (!button) return;

  button.addEventListener("click", async () => {
    const address = button.dataset.copyEmail ?? "";
    try {
      await navigator.clipboard.writeText(address);
      if (status) status.textContent = "Address copied.";
    } catch {
      if (status) status.textContent = "Copy failed. Please select the address and copy it.";
    }
  });
}
