let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');
const fontSelect = document.getElementById('fontSelect');

// Increment counter
incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// Reset counter
resetBtn.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Toggle theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
});

// Change font
fontSelect.addEventListener('change', () => {
  document.body.style.fontFamily = fontSelect.value;
});
