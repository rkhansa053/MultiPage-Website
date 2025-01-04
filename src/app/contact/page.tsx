

export default function Contact() {
    return(
        <div className="contactPage">
            <section className="contact-section">
                <div className="container">
                    <h2 className="title">Get in touch</h2>
                    <p className="description">feel free to reach out to me for collaboration</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Your Email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea> 
                        </div>                    
                        <button type= "submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}