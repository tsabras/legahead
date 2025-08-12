// Simple JavaScript for button hover accessibility enhancement
document.querySelectorAll('.btn-purchase').forEach(button => {
  button.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});
