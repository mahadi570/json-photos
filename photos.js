fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => loadPhotos(data))

function loadPhotos(photos) {
    const photoContainer = document.getElementById('photo-container');
    for (const photo of photos) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="p-8 border-2 rounded-lg space-y-3 h-full">
        <img class="rounded-lg" src=${photo.url}>
        <h3>Title: ${photo.title}</h3>
        <p>Photo No. ${photo.id}</p>
    </div>
    `

        photoContainer.appendChild(div)
    }
}