

async function getContent() {
    try {
        const response = await fetch('http://localhost:4567')

        const data = await response.json()

        showData(data)

    } catch (error) {
       console.log(error) 
    }
}

getContent()

function showData (users) {
    let output = ''

    for (let user of users) {
        output += `<p>${user.name} (${user.email})</p>`
    }

    document.querySelector('div').innerHTML = output
}
