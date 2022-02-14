function ValidMail() {
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const myMail = document.getElementById('email').value;
    const valid = re.test(myMail);

    if (valid) output = 'Адрес эл. почты введен правильно!'.fontcolor('green');
    
    else output = 'Адрес электронной почты введен неправильно!'.fontcolor('red');
    document.getElementById('message').innerHTML = output;
    return valid;
}

function ValidPhone() {
    const re = /^\d[\d\(\)\ -]{4,14}\d$/;
    const myPhone = document.getElementById('phone').value;
    const valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!'.fontcolor('green');
    else output = 'Номер телефона введен неправильно!'.fontcolor('red');
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;
    return valid;
}

function ValidComment() {
    // const re = /./;
    const myComment = document.getElementById('comment').value;
    // const valid = re.test(myComment);
    const valid = myComment.length>0;

    if (valid) output = 'Коментарий введен!'.fontcolor('green');
    else output = 'Комментарий отсутсвует!'.fontcolor('red');
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;
    return valid;
}