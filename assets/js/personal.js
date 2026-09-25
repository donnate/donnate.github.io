const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
if (button && navigation) {
  document.documentElement.classList.add('has-menu');
  const close = () => { button.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); } });
}
