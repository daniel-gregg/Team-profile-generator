const card = (role, email, github) => {
    cardHtml = `<div class="card">
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

const studentCard = (email, school) => {
    cardHtml = `<div class="card">
        <p class="role">
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
