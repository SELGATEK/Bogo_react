import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function GoogleCaptcha() {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <>
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                className='captcha'
                onChange={onChange}
            />
        </>
    )
}

export default GoogleCaptcha