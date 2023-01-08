import React, { useState } from 'react'

const Form = (props) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const sendEmail = () => {
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "treskov-1@mail.ru",
          Password : "52D591428F30B65875CAC6A30A76E36DFD6D",
          To : 'treskov-1@mail.ru',
          From : "misterreskov@gmail.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
    }
    return (
        <form>
            <label for="email">Введите свой Email </label>
            <input type="text" name="email" id="email" onChange={handleEmailChange} value={email} required></input>
            <button onClick={sendEmail}>Отправить</button>
        </form>
    );
}