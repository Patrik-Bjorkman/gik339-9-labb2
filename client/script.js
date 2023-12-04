// Definiera en global variabel som kan hålla användardata
let users = [];

// Funktion för att hämta användardata från servern
function fetchUsers() {
    fetch('http://localhost:3000/users') // Anpassa URL efter din serverkonfiguration
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Omvandla svaret till JSON
        })
        .then(data => {
            users = data; // Tilldela det omvandlade svaret till den globala variabeln
            addUsersToDOM(users); // Använd arrayen för att lägga till användare till DOM
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Anropa funktionen för att utföra hämtningen
fetchUsers();
console
  

// // Funktion för att skapa en färgklass baserat på användarens favoritfärg
// function createColorClass(color) {
//     return `color-${color}`;
//   }
  
// Funktion för att lägga till användare i listan
function addUserToList(user) {
    // Skapar ett nytt li-element
    const li = document.createElement('li');
    
    // Tillämpa användarens färg som bakgrundsfärg
    li.style.backgroundColor = user.color;
    li.style.fontSize = "1rem";
    li.style.border = "solid .2rem black";
    li.style.borderRadius = "1rem";
    li.style.minWidth = "2rem";
    li.style.margin = "1rem";
    li.style.padding = "1rem";
    
    // Använder en templatesträng för att skapa HTML innehållet
    li.innerHTML = `
      <div>
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Username: ${user.username}</p>
        <p>ID: ${user.id}</p>
      </div>
    `;
  
    // Lägg till det nya li-elementet i ul-listan
    document.querySelector('ul').appendChild(li);
  }
  
  // Funktion för att lägga till alla användare till listan
  function addUsersToDOM(users) {
    // Skapar ett nytt ul-element
    const ul = document.createElement('ul');
    document.body.appendChild(ul); // Lägger till ul-elementet i body
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";
    ul.style.justifyContent = "center";
    ul.style.backgroundImage = 'linear-gradient(45deg, orange 0%, yellow 20%, green 40%, blue 60%, indigo 80%, violet 100%)';
    // ul.style.borderRadius = "10rem";
    ul.style.border = "solid .2rem #FEE440";
    // Loopar igenom varje användare och lägger till dem till listan
    users.forEach(addUserToList);
  }

  addUsersToDOM(users); // Anropar funktionen för att lägga till användare till DOM
  