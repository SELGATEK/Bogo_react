import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Header and Footer
import Header1 from '../../../partials/header/Header1';
import Footer from '../../../partials/footer/Footer';


// Import Conponents
import MainContent1 from './elements/MainContent1';
import MainContent2 from './elements/MainContent2';
import CampaignHeader from './elements/CampaignHeader';




export default function Index() {

  
  const [selectedTab, setSelectedTab] = useState(1);

  const buttonOption = (id) => {
    setSelectedTab(id);
  };

  return (
    <>
      <Header1 />


      <CampaignHeader />

      <div className="campaing-body-section influencers_body_section">
        <div className="container">
          <div className="influencers_section">
            <div className="tabs-row">
              <ul id="tabs-nav">
                <li className={`offer-box influencer_tab ${selectedTab === 1 ? 'active' : ''}`} onClick={() => buttonOption(1)} >
                  <Link to="">
                    <h3>Voucher</h3>
                  </Link>
                </li>
                <li className={`offer-box influencer_tab ${selectedTab === 2 ? 'active' : ''}`} onClick={() => buttonOption(2)} >
                  <Link to="">
                    <h3>Brand Ambassador</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          {selectedTab === 1 && <MainContent1 />}
          {selectedTab === 2 && <MainContent2 />}
        </div>
      </div>


      <Footer />
    </>
  );
}
