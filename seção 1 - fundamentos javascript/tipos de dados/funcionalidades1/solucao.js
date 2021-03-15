const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null){
        messages.push('Name is required!!')
    }

    
    if (password.value === '' || password.value === null){
        messages.push('Password is required!!')
    }
    else if (password.value.length <= 6){
        messages.push('Password must be less than 6 characters!!')
    }
    else if (password.value === 'password'){
        messages.push('Password cannot be equal to password')
    }
    

    if (messages.length > 0){
        e.preventDefault()
        errElement.innerHTML = messages.join(', ')
    }

})