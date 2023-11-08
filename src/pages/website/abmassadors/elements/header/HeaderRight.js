import React, { useState } from 'react'
import Select from 'react-select'


//import components
import InputBox from '../InputBoxComponent'
import MobileInput from '../../../../../components/CommonComponent/MobileInputbox'
import SocialMediaInput from './SocialMediaInput'
import Recapture from '../../../../../components/CommonComponent/Recapture'


const HeaderRight = () => {


// handleSubmit function
const handleSubmit = (e)=>{
    e.preventDefault();
}


// State to keep track of SocialMediaInput components
const [socialMediaInputs, setSocialMediaInputs] = useState([[{ key: Date.now() }]]);




  
// Function to add a new SocialMediaInput component
const handleAddMore = () => {
    if (socialMediaInputs.length < 4) {

      const newSocialMediaInputs = [...socialMediaInputs];
      newSocialMediaInputs.push({ key: Date.now() });
      
      setSocialMediaInputs(newSocialMediaInputs);
    } else {
      alert("You can't add more than 4 SocialMediaInput components.");
    }
};

// Function to remove a SocialMediaInput component
const handleRemove = (keyToRemove) => {
    const newSocialMediaInputs = socialMediaInputs.filter((input) => input.key !== keyToRemove);
    setSocialMediaInputs(newSocialMediaInputs);
};


// select box
const colourOptions = [
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Fitness', label: 'Fitness' },
    { value: 'Foodie', label: 'Foodie' },
    { value: 'Lifestyle', label: 'Lifestyle' },
    { value: 'Model', label: 'Model' },
    { value: 'Mommy Blogger', label: 'Mommy Blogger' },
    { value: 'Nightlife', label: 'Nightlife' },
    { value: 'Other ', label: 'Other ' },
]
      
const MyComponent = () => (
<Select closeMenuOnSelect={false}
// defaultValue={[colourOptions[4], colourOptions[5]]}
isMulti
options={colourOptions}
styles={{
// Add a custom style to set the height of the input
control: (provided) => ({
    ...provided,
    minHeight: '40px !important',
}),
}}
/>
)



// password type change

const [passwordVisible, setPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};


// confirm password type change

const [ConfirmpasswordVisible, ConfirmsetPasswordVisible] = useState(false);

const toggleConfirmPasswordVisibility = () => {
    ConfirmsetPasswordVisible(!ConfirmpasswordVisible);
};



 // Function to handle Enter key press inside input fields
 const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent Enter key press from triggering the form submission
    }
  };



    return(

        <div className="brand-header-right-section">
            <div className="interest-heading-box">
                <h1>
                <img src="/images/interest-icon.png" alt="" className="img-fluid" />
                Submit your interest
                </h1>
            </div>
            <div className="interest-form-box">
                <form id="addformBrand" className="interst-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                    <div className="input-box selectpicker1">
                        <label htmlFor="sub-category">Type of Influencer:</label>
                        <MyComponent />

                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="input-box full-name-box">
                        <label htmlFor>Full Name</label>
                        <input type="text" name="name" id="name" className="form-control" required 
                        onKeyDown={handleInputKeyDown}
                        />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <InputBox label="Email address" type="email" name="email" id="email" required  onKeyDown={handleInputKeyDown}/>
                    </div>
                </div>
                {/* Render SocialMediaInput components */}
                {socialMediaInputs.map((input, index) => (
                    <SocialMediaInput key={input.key} 
                    onRemove={() => handleRemove(input.key)}  
                    showSocialMediaButton={index > 0}
                    style={{borderTopRightRadius: index === 0 ? '0' : '5px', borderBottomRightRadius: index === 0 ? '0' : '5px' }}
                    />
                ))}
                <div className="row">
                    <div className="col-12">
                        <div className="btn addMoreSocialMedia" onClick={handleAddMore}>
                            Add More <i className="fa fa-plus" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <MobileInput/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                    <div className="input-box password-input-box">
                        <label htmlFor>Create Password</label>
                        <input type={passwordVisible ? 'text' : 'password'} className="form-control use_registration_password" id="password" name="password" placeholder="Create Password" />
                        <i
                            className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="input-box password-input-box">
                        <label htmlFor>Repeat Password</label>
                        <input type={ConfirmpasswordVisible ? 'text' : 'password'}  className="form-control use_registration_Rpassword" id="repeat_password" name="repeat_password" placeholder="Repeat password" />
                        <i
                            className={`fa-solid ${ConfirmpasswordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                            onClick={toggleConfirmPasswordVisibility}
                        />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <Recapture className='capture'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <button type="submit" className="btn interest-form-btn">
                        Submit
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
    );
}



export default HeaderRight;