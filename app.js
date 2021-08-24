function logIn(){
    let emails = document.getElementById('email');
    let email = emails.value ;
    let passwords = document.getElementById('password');
    let password = passwords.value ;

    if(email=='rafayelbd@gmail.com' && password == 'rafa'){
        window.location.href = 'banking.html';
    }else{
        let para = document.getElementById('message');
        para.removeAttribute('class');
    }
    emails.value = '';
    passwords.value = '';
}

document.getElementById('logButton').addEventListener('click', function(){
    logIn();
})

// ------------------------------------------------------


