export function initViewSelect() {
  const viewSelectElememnt = document.querySelector("[data-view-select]");

  viewSelectElememnt.addEventListener("change", (event) => {
    viewSelectElememnt.dispatchEvent(
      new CustomEvent("view-change", {
        detail: {
          view: viewSelectElememnt.value,
        },
        bubbles: true,
      }),
    );
  });
}
