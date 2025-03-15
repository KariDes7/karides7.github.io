fetch('url/endpoint', {
    method: 'GET', // or POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // Only for methods with a body
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // or response.text(), response.blob(), etc.
})
.then(data => {
    console.log('Data received:', data);
})
.catch(error => {
    console.error('Error:', error);
});