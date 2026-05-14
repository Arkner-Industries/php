const usuarios = []:

fetch("http://localhost:4000")
    .then(response => response.json())
    .then(data => {
        usuarios.push(...data);
        console.log(usuarios);
    })
.catch(error => console.error("Error:", error));
