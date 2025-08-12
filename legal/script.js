// Accessibility: enable button activation on Enter or Space keys
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
  button.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});
