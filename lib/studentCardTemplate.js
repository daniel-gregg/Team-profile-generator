const studentCardTemplate = (name, id, email, school) => {
    cardHtml = `<div class="card">
        <div class="name">
            <h2>${name}</h2>
        </div>
        <p class='entry'>
            ID: ${id}
        </p><p class="entry">
            Role: "Intern"
        </p>
        <p class="entry">
        <a href="mailto:${email}">${email}</a>
        </p>
        <p class="entry">
            School: ${school}
        </p>
    </div>
    `
    return cardHtml
}

module.exports = studentCardTemplate
