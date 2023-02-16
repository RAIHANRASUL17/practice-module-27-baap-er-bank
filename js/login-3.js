
document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // verify
    if(email === 'smaraihanrasul17cqut@gmail.com' && password === '09877890'){
        console.log('Valid User');
        window.location.href= 'bank-4.html'
    }
    else{
        console.log('Invalid User');
        alert('Hei!!! You are not a correct person, go away police is coming')
    }
})