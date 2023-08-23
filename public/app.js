document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }

    if (event.target.dataset.type === 'edit') {
        const id = event.target.dataset.id

        edit(id).then(() => {
            event.target.closest('li').textContent
        })
        console.log(event.target.closest('li'))
    }
})

async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(id) {
    const editNote = prompt('Введите новое название')
    if (editNote) {
        console.log(editNote)
        return  await fetch(`/${id}`, {method: 'PUT'})
    }
    return editNote
}