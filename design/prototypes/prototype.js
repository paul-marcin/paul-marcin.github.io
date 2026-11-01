const descriptions = {
  columns: 'A : les textes se découvrent côte à côte. Sur petit écran, ils passent en une colonne.',
  list: 'B : les textes se découvrent l’un après l’autre, dans une colonne centrale. Le parcours est plus long.'
};
const controls = document.querySelectorAll('input[name="layout"]');
function setLayout(value) {
  const layout = Object.hasOwn(descriptions, value) ? value : 'columns';
  document.body.dataset.layout = layout;
  document.querySelector('#layout-note').textContent = descriptions[layout];
  controls.forEach(control => { control.checked = control.value === layout; });
}
controls.forEach(control => control.addEventListener('change', () => {
  if (control.checked) setLayout(control.value);
}));
setLayout(new URLSearchParams(window.location.search).get('layout'));
