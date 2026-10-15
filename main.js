document.addEventListener('DOMContentLoaded', () => {
  // Валидация форм Bootstrap
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // Проверка совпадения паролей для формы регистрации
      const password = document.getElementById('regPassword');
      const confirmPassword = document.getElementById('regConfirmPassword');
      const confirmError = document.getElementById('confirmError');

      if (password && confirmPassword) {
        if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity("Passwords do not match");
          if (confirmError) confirmError.textContent = "Passwords do not match!";
        } else {
          confirmPassword.setCustomValidity("");
        }
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Form submitted successfully!');
      }

      form.classList.add('was-validated');
    }, false);
  });
});