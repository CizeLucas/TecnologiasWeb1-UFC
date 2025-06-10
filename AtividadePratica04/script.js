

const activitiesData = [
    {
        subject: "Matemática",
        activities: ["Entregar atividade livro página 28", "Estudar Derivada"]
    },
    {
        subject: "Português",
        activities: ["Trabalho de Conjugação Verbal", "Paródia sobre ortografia e acentuação"]
    },
    {
        subject: "Literatura",
        activities: ["Trabalho de Romeu e Julieta (dia 12/06)"]
    },

]

let activitiesDataIndex = 0;
const subjectActivities = document.getElementById('subject-activities');
toggleBetweenSubjects();


function toggleBetweenSubjects() {
    activitiesDataIndex++;
    const nextActivityDataIndex = activitiesDataIndex % activitiesData.length;
    const nextActivityData = activitiesData[nextActivityDataIndex];
    console.log(nextActivityData)
    subjectActivities.innerHTML = `<h2>${nextActivityData.subject}</h2>`;
    nextActivityData.activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        subjectActivities.appendChild(li);
    });
}

function toggleMotivationalMessage() {
    const message = document.getElementById('motivational-message');
    const messageToggleButton = document.getElementById('toggle-message-button');
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block';
        messageToggleButton.innerHTML = "Esconder mensagem motivacional";
    } else {
        message.style.display = 'none';
        messageToggleButton.innerHTML = "Mostrar mensagem motivacional";    
    }
}

function handleFormSubmit() {
    const formImage = document.getElementById("form-image");
    const formButton = document.getElementById("form-submit-button");
    formButton.innerHTML = 'Enviando...';
    setTimeout(() => {
        formImage.src = './assets/sent-icon.jpg';
        formButton.innerHTML = 'Enviado!';
    }, 1000);
}