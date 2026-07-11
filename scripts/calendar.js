export function initCalendar() {
  const monthCalendarElement = document.querySelector("[data-month-calendar]");
  const weekCalendarElement = document.querySelector("[data-week-calendar]");

  document.addEventListener("view-change", (event) => {
    const selectView = event.detail.view;

    if (selectView === "month") {
      monthCalendarElement.style.display = "flex";
      weekCalendarElement.style.display = "none";
    } else if (selectView === "week") {
      monthCalendarElement.style.display = "none";
      weekCalendarElement.style.display = "flex";
    } else {
      monthCalendarElement.style.display = "none";
      weekCalendarElement.style.display = "none";
    }
  });
}
