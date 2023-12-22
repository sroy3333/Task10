document.addEventListener('DOMContentLoaded', function () {
    const liElements = document.querySelectorAll('.fruit');
  
    liElements.forEach((li) => {
      const editButton = document.createElement('button');
      editButton.className = 'edit-btn';
      editButton.textContent = 'Edit';
      li.appendChild(editButton);
    });
  
    const form = document.querySelector('form');
    const fruits = document.querySelector('.fruits');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const fruitToAdd = document.getElementById('fruit-to-add').value;
      if (fruitToAdd.trim() !== '') {
        const newLi = document.createElement('li');
        newLi.className = 'fruit';
        newLi.textContent = fruitToAdd;
  
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'x';
  
        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
  
        newLi.appendChild(deleteButton);
        newLi.appendChild(editButton); // Append the edit button
  
        fruits.appendChild(newLi);
  
        document.getElementById('fruit-to-add').value = '';
      }
    });
  
    fruits.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
      }
    });
});
  