//DELETE TABLE

const table = document.querySelector('tbody tr');
const btnsDelete = document.querySelectorAll('.cells-btn5');

btnsDelete.forEach(btn => {
   btn.addEventListener('click', (event) => {
      event.target.closest('tr').remove();
      event.preventDefault();
   });
});