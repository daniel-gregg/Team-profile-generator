const studentCardTemplate = (name, id, email, school) => {
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

module.exports = studentCardTemplate
