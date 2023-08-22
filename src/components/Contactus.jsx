import React from "react";


function Contactus() {
    // const [countryCode, setCountryCode] = useState("+91");
    // const [mobileNumber, setMobileNumber] = useState("");

    // const handleCountryCodeChange = (event) => {
    //     const newCountryCode = event.target.value;
    //     setCountryCode(newCountryCode);
    // };

    // const handleMobileNumberChange = (event) => {
    //     const newMobileNumber = event.target.value;
    //     setMobileNumber(newMobileNumber);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Replace this with your actual submission logic
    //     console.log("Form submitted");
    // };
    return (
    <div>
      <section id="scroll-top-contact" className="contact-htmlForm section-padding">
        <div className="max_width">
            <div className="clear">
                <div className="title text-center home-title">
                    <h2>CONTACT US</h2>
                    <p>Let’s talk and see what impact we can drive to your business.</p>
                </div>
            </div>
            <div className="clear">
                <div className="width50">
                    <div className="input_container">
                        <input type="text" className="floatlabel" id="full-name-calc" />
                        <label htmlFor="full-name-calc">Your Name (required)</label>
                        <span id="full-name-span" className="span-error" style={{ display: 'none' }}>Please provide Name.</span>
                    </div>
                </div>
                <div className="width50">
                    <div className="input_container">
                        <input type="text" className="floatlabel" id="email-calc" />
                        <label htmlFor="email-calc">Your Email (required)</label>
                        <span id="email-calc-span" className="span-error" style={{ display: 'none' }}>Please provide valid business Email Id. </span>
                    </div>
                </div>
            </div>
            <div className="clear">
                <div className="width50">
                    <div className="input_container">
                        <input type="text" className="floatlabel" id="company-name-calc" />
                        <label htmlFor="company-name-calc">Company Name (required)</label>
                        <span id="company-name-span" className="span-error" style={{ display: 'none' }}>Please provide Company Name</span>
                    </div>
                </div>
                <div className="width50">
                    <div className="input_container">
                        <div className="cuntry-code autocomplete">
                            <input type="text" id="country_code" onKeyPress="return isNumberKeyCountryCode(event)" placeholder="+91" defaultValue="+91" maxLength="5" />
                        </div>
                        <div className="number-input">
                            <input type="text" id="MobileNocalc" maxLength="10" className="floatlabel" onKeyPress="isNumberKey(event)" />
                            <label htmlFor="MobileNocalc">Mobile Number (required)</label>
                        </div>
                        <span id="MobileNocalc-span" className="span-error" style={{ display: 'none' }}>Please provide valid Country code and Mobile no.</span>
                    </div>
                </div>
            </div>
            <div className="clear">
                <div className="input_container">
                    <textarea className="floatlabel" id="ProjectDetails-calc"></textarea>
                    <label htmlFor="ProjectDetails-calc">Project Details</label>
                    <span id="ProjectDetails-span" className="span-error" style={{ display: 'none' }}>Please provide Project Details</span>
                </div>
            </div>
            <div className="clear">
                <div className="input_container">
                    <div className="checkbox">
                        <div className="clear">
                            <div className="checkbox-group">
                                <input type="checkbox" name="" defaultValue="" checked id="chkAutorise" />
                                <label htmlFor="chkAutorise">I authorize Fulcro to contact me via email, phone or WhatsApp</label>
                            </div>
                        </div>
                    </div>
                    <span id="check-span" className="span-error" style={{ display: 'none' }}>Required</span>
                </div>
                <br />
            </div>
            <div id="captcha" className="clear hide">

            </div>
            <div className="margin-auto">
                <button className="btn_outline" id="btnSubmitTD" onclick="Submit(event)">Submit</button>
            </div>
            <div className="error" style={{ display: 'none' }}><span>One or more fields have an error. Please check and try again.</span></div>
        </div>
    </section>
    <section className="section-padding">
        <div className="success" style={{ display: 'none' }}><span>Thank you htmlFor your message. It has been sent.</span></div>
    </section>
    </div>
  )
}

export default Contactus
