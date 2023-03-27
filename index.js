function submitData (name, email) {
    const bodyElement = document.querySelector('body');
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        }),
    })
    .then(resp => resp.json())
    .then(data => {
        //retrieves new id value and appends it to the DOM
        bodyElement.append(data.id);
    })
    .catch(error => {
        //handles a failed POST request using catch, appends the error message to the DOM
        bodyElement.append("Unauthorized Access");
    })
}