import React from "react";
import ContactImg from "../../Contact_Us_Background.png";
import { Input } from 'antd';
function Contact() {
  const {TextArea} = Input
  return (
    <section className='section-contact-us'>
      <div className='contact-us-container'>
        {/* <img src={ContactImg} alt="background of contact page"/> */}
        <div className='contact-us-form'>
          <div className='c--details'>
            <h4 className='heading'>Contact us</h4>
            <div className='sub-title'>
              <div className='sub-details'>Corporate headquarters:</div>
              <div className='address sub-details'>
                <p>27 Merry Lane NP000126854</p>
                <p>New Jersey, East Hanover, 07936</p>
              </div>
            </div>
            <div className='contact-details sub-details'>
              <div>
                <div>
                  <b>Phone:</b>
                </div>
                <div>
                  <b>Email:</b>
                </div>
              </div>
              <div>
                <div>19739476185</div>
                <div>hello@company.com</div>
              </div>
            </div>
          </div>
          <div className='c-form'>
            <div className='c-form-heading'>Get in Touch</div>
            <div>
              <div className="sub-details heading-two">Please fill out the form</div>
              <Input className="input-element" type="text" placeholder="Name"/>
              <Input className="input-element" type="text" placeholder="Your email address" required={true}/>
              <TextArea className="input-element"  rows={3} placeholder="Message" maxLength={15} />
              {/* <div><input className="input-element" type="text" placeholder="Name"></input></div> */}
              {/* <div><input className="input-element" type="text" placeholder=" * Your email address" required></input></div> */}
              {/* <div><textarea className="input-element text-area" type="text"></textarea></div> */}
            </div>
            <button className="submit-button .sub-details">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
