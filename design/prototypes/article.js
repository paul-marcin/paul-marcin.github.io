const article = document.querySelector('#reading-body');
const bar = document.querySelector('#progress-fill');
const sections = [...article.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.toc a')];
let queued = false;
function updateReading() {
  queued = false;
  const rect = article.getBoundingClientRect();
  const start = rect.top + window.scrollY;
  const distance = Math.max(1, rect.height - window.innerHeight);
  const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
  bar.style.transform = `scaleX(${progress})`;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 140) active = section;
  }
  links.forEach(link => {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function scheduleUpdate() {
  if (!queued) { queued = true; requestAnimationFrame(updateReading); }
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
if (document.fonts) document.fonts.ready.then(scheduleUpdate);
updateReading();
