const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function handleTabClick(e) {
  tabPanels.forEach((panel) => (panel.hidden = true));
  tabButtons.forEach((btn) => btn.setAttribute('aria-selected', false));
  e.currentTarget.setAttribute('aria-selected', true);
  const id = e.currentTarget.id;
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
