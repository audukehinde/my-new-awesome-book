const navButtons = () => {
  const navBtns = document.querySelectorAll('.nav-button');
  navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const text = e.currentTarget.innerText;
      document.body.className = `show-${text.toLowerCase().replace(' ', '-')}`;
    });
  });
};

navButtons();

export default navButtons;
