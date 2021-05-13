const managerCardTemplate = (name,id, email, officeNumber) => {
    cardHtml = `<div class="card">
        <div class="name">
            <h2>${name}</h2>
        </div>
        <p class='entry'>
            ID: ${id}
        </p>
        <p class="entry">
            Role: Manager
        </p>
        <p class="entry">
        <a href="mailto:${email}">${email}</a></p>
        </p>
        <p class="entry">
            Office #: ${officeNumber}
        </p>
    </div>`;

    return cardHtml;
}
module.exports = managerCardTemplate