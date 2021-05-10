const card = (name,id,role, email, github) => {
    cardHtml = `<div class="card">
        <div class="name">
            <h2>${name}</h2>
        </div>
        <p class='id'>
            ID: ${id}
        </p>
        <p class="role">
            ${role}
        </p>
        <p class="email">
            ${email}
        </p>
        <p class="github">
            ${github}
        </p>
    </div>`;

    return cardHtml;
}

const studentCard = (name, id, email, school) => {
    cardHtml = `<div class="card">
        <div class="name">
            <h2>${name}</h2>
        </div>
        <p class='id'>
            ID: ${id}
        </p><p class="role">
            "Student"
        </p>
        <p class="email">
            ${email}
        </p>
        <p class="school">
            ${school}
        </p>
    </div>
    `
    return cardHtml
}
