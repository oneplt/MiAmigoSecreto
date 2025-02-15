// Array para almacenar los nombres
let names = [];

// Elementos del DOM
const inputName = document.getElementById("input-name");
const addButton = document.getElementById("add-button");
const nameList = document.getElementById("name-list");
const drawButton = document.getElementById("draw-button");
const resultDiv = document.getElementById("result");

// Función para agregar nombres
addButton.addEventListener("click", () => {
    const name = inputName.value.trim();
    if (name) {
        names.push(name); // Agrega el nombre al array
        inputName.value = ""; // Limpia el input
        updateNameList(); // Actualiza la lista en pantalla
    }
});

// Función para actualizar la lista de nombres
function updateNameList() {
    nameList.innerHTML = names.map(name => `<li>${name}</li>`).join("");
}

// Función para realizar el sorteo
drawButton.addEventListener("click", () => {
    if (names.length < 2) {
        resultDiv.textContent = "¡Necesitas al menos 2 nombres para sortear!";
        return;
    }

    // Mezcla los nombres aleatoriamente
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);

    // Asigna los amigos secretos
    const results = [];
    for (let i = 0; i < shuffledNames.length; i++) {
        const giver = shuffledNames[i];
        const receiver = shuffledNames[(i + 1) % shuffledNames.length]; // Circular
        results.push(`${giver} ➔ ${receiver}`);
    }

    // Muestra los resultados
    resultDiv.innerHTML = results.join("<br>");
});