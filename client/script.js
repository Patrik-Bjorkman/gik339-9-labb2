const localUrl = "http://localhost:3000/users";
const responsePromise = fetch(localUrl);

responsePromise
  .then(response => {
    return response.json();
  })
const request = new Request(localUrl);
fetch(localUrl)
  .then(response => response.json())
  .then((users) => {
    document.body.classList.add("h-14", "bg-gradient-to-r", "from-cyan-500", "to-blue-500");
    const ul = document.createElement('ul');
    ul.classList.add("ul__styling");
    document.body.appendChild(ul);
    users.forEach(user => {
      const li = document.createElement('li'); // Skapa ett li-element
      li.innerHTML = `<h3>${user.firstName} ${user.lastName}</h3>
                      <p>Username: ${user.username}</p>
                      <p>ID: ${user.id}</p>`;
      li.style.backgroundColor = user.color;
      li.classList.add("section__card", "li__styling","hover:bg-gradient-to-br"); // Lägger till klasser på li-elementet
      ul.appendChild(li); // Appenda li-elementet till ul-elementet
    });
    return users;
  })
  .then((data) => console.log(data));
