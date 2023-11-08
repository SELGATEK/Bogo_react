import React, { useState } from 'react';

const SocialMediaInput = () => {
  const [socialMedia, setSocialMedia] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const [enteredLink, setEnteredLink] = useState('');

  const socialMediaOptions = [
    { name: 'Facebook', icon: 'facebook', color: 'blue', type: 'facebook.com' },
    { name: 'Instagram', icon: 'instagram', color: 'purple', type: 'instagram.com' },
    { name: 'Youtube', icon: 'youtube', color: 'red', type: 'youtube.com' },
    { name: 'Tiktok', icon: 'tiktok', color: 'black', type: 'tiktok.com' },
    // Add more social media options here
  ];

  const handleSocialMediaSelect = (option) => {
    setSelectedSocialMedia(option);
    setSocialMedia(false);
  };

  const handleLinkChange = (event) => {
    setEnteredLink(event.target.value);
  };

  const validateLink = () => {
    if (selectedSocialMedia && enteredLink) {
      // const linkRegex = new RegExp(`^https?:\/\/(www\.)?${selectedSocialMedia.type}\/.*`);
      // if (!linkRegex.test(enteredLink)) {
      //   alert('Please enter a valid link for the selected social media platform.');
      // }
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
                <div className="apto-trigger-dropdown" onClick={() => setSocialMedia(!socialMedia)}>
                  {selectedSocialMedia ? (
                    <i className={`fab fa-${selectedSocialMedia.icon}`} style={{ color: selectedSocialMedia.color }} />
                  ) : (
                    <i className="fab fa-facebook-messenger fa-w-14 fa-network" style={{ color: 'black' }} />
                  )}
                  <i className="fas fa-caret-down" style={{ color: selectedSocialMedia ? selectedSocialMedia.color : 'black' }} />
                </div>

                <div className={`dropdown-menu-box social-media-icon-btn ${socialMedia ? 'show' : ''}`}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaInput;
