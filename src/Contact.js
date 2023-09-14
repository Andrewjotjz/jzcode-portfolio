const Contact = () => {
    return (
        <div className="contact">
            <h1>Get In Touch</h1>
            <div className="contact-form-header">
                <h2>I would love to connect with you!</h2>
                <h2>Come and say hi!</h2>
            </div>
            <form className="contact-form">
                <div className="contact-form-top">
                    <input type="text" name="name" placeholder="Name" required></input>
                    <input type="email" name="email" placeholder="Email (Optional)"></input>
                    <input type="tel" name="phone" placeholder="Phone (Optional)"></input>
                    <input type="text" name="company" placeholder="Company (optional)"></input>
                </div>
                <div className="contact-form-bottom">
                    <textarea name="message" rows="4" cols="50" placeholder="Message" required></textarea>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
 
export default Contact;