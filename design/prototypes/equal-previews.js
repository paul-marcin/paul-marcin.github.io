// Equal height within each page, recalculated without clipping any text.
const previews = [...document.querySelectorAll('.thematic-prototype .story')];
let pending;
function scheduleEqualHeights() {
  cancelAnimationFrame(pending);
  pending = requestAnimationFrame(() => {
    previews.forEach(preview => { preview.style.minHeight = ''; });
    const height = Math.ceil(Math.max(0, ...previews.map(preview => preview.getBoundingClientRect().height)));
    previews.forEach(preview => { preview.style.minHeight = `${height}px`; });
  });
}
window.addEventListener('resize', scheduleEqualHeights);
if (document.fonts) document.fonts.ready.then(scheduleEqualHeights);
scheduleEqualHeights();
