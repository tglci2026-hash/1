# script.js

```javascript
// MESSAGE DE DEMARRAGE
console.log("BCC Dashboard chargé avec succès");


// BOUTONS ACTIONS RAPIDES
const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(button => {

  button.addEventListener('click', () => {

    const actionName = button.innerText;

    alert(actionName + ' bientôt disponible');

  });

});


// NAVIGATION ACTIVE
const currentPage = window.location.pathname.split('/').pop();

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {

  const href = item.getAttribute('href');

  if(href === currentPage){
    item.classList.add('active');
  }

});
```
