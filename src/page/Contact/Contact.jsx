import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contactez-nous</h1>
            <ul className="contact-methods">
                <li>Email: geurtsromain.dic@gmail.com</li>
                <li>Téléphone: +32 495 10 19 53</li>
                <li>Adresse: Chaussée Brunehaut 235, 4450 Juprelle, Belgique</li>

            </ul>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button className="buttonContact" type="submit">Envoyer</button>
            </form>
        </div>
    );
}

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Message envoyé avec succès!');
    } else {
        alert('Erreur lors de l\'envoi du message.');
    }
};

export default Contact;