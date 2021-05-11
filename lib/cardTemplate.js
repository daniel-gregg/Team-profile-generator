const cardTemplate = (name,id,role, email, github) => {
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
module.exports = cardTemplate