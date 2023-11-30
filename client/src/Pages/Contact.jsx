
import Header from "../components/header/Header";
import { useState } from "react";


const ContactPage = () => {
    
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const baseUrl = "http://localhost:3000";
  
    const sendEmail = async () => {
      let dataSend = {
        email: email,
        subject: subject,
        message: message,
      };
  
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // HANDLING ERRORS
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
          }
        });
    };    

    return <>
        <Header />
        { <section className="section">
            <div className="container">
                <h1 className="title">contact use free</h1>
                <div className="columns">
                    <div className="column is-half">
                        <form action="https://fabform.io/f/%7Binsert-your-form-id%7D" method="post">
                            <div className="field">
                                <label className="label">Email adress</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Your Name" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Your Email" onChange={(e) => setSubject(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}>

                                    </textarea>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button" onClick={() => sendEmail()}>Submit</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section> }
        
    </>
};

export default ContactPage