const engineerCardTemplate = (name,id, email, github) => {
    cardHtml = `<div class="card">
        <div class="name">
            <h2>${name}</h2>
        </div>
        <p class='entry'>
            ID: ${id}
        </p>
        <p class="entry">
            Role: Engineer
        </p>
        <p class="entry">
        <a href="mailto:${email}">${email}</a></p>
        </p>
        <p class="entry">
        <a href="https://github.com/${github}">${github}</a>
        </p>
    </div>`;

    return cardHtml;
}
module.exports = engineerCardTemplate