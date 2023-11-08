import React, { useState } from 'react';

const socialMediaButton = {
  color: "black",
  background: "#f7f7f7",
  border: "1px solid white",
  height: "50px",
  borderRadius: "0px",
  position: "relative",
  left: "-2px",
}

const SocialMediaInput = ({ onRemove, showSocialMediaButton }) => {

  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const [enteredLink, setEnteredLink] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const socialMediaOptions = [
    { name: 'Facebook', icon: 'facebook', color: 'blue', type: 'facebook.com' },
    { name: 'Instagram', icon: 'instagram', color: 'purple', type: 'instagram.com' },
    { name: 'Youtube', icon: 'youtube', color: 'red', type: 'youtube.com' },
    { name: 'Tiktok', icon: 'tiktok', color: 'black', type: 'tiktok.com' },
    // Add more social media options here
  ];

  const handleSocialMediaSelect = (option) => {
    setSelectedSocialMedia(option);
    setEnteredLink(`https://${option.type}`);
    setIsDropdownOpen(false); // Close the dropdown after selecting an icon
  };

  const handleLinkChange = (event) => {
    setEnteredLink(event.target.value);
  };

  const validateLink = () => {
    if (selectedSocialMedia && !enteredLink.startsWith(`https://www.${selectedSocialMedia.type}`)) {
      alert('Please enter a valid link for the selected social media platform.');
      setEnteredLink('');
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="input-box">
          <div className="row">
            <label htmlFor="Social_media">Social media</label>
            <div className="col-12 media-select">
              <div className="apto-dropdown-wrapper">
                <div
                  className={`apto-trigger-dropdown ${isDropdownOpen ? 'active' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedSocialMedia ? (
                    <i className={`fab fa-${selectedSocialMedia.icon}`} style={{ color: selectedSocialMedia.color }} />
                  ) : (
                    <i className="fab fa-facebook-messenger fa-w-14 fa-network" style={{ color: 'black' }} />
                  )}
                  <i className={`fas fa-caret-${isDropdownOpen ? 'up' : 'down'}`} style={{ color: 'black' }} />
                </div>

                <div className={`dropdown-menu-box social-media-icon-btn ${isDropdownOpen ? 'show' : ''}`}>
                  {socialMediaOptions.map((option) => (
                    <button
                      type="button"
                      className="dropdown-item"
                      key={option.type}
                      onClick={() => handleSocialMediaSelect(option)}
                    >
                      <i className={`fab fa-${option.icon}`} style={{ color: option.color }} />
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="text"
                name="Social_media"
                id="Social_media"
                className="form-control media-url"
                required
                placeholder="Enter URL"
                value={enteredLink}
                onChange={handleLinkChange}
                onBlur={validateLink}
              />
              {showSocialMediaButton && (
                <button
                  type="button"
                  style={socialMediaButton}
                  className="btn btn-danger btn-sm"
                  onClick={onRemove}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaInput;
