import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


// Import Conponents
import Tab4 from './tabschild/Tab4';
import Tab5 from './tabschild/Tab5';
import Tab6 from './tabschild/Tab6';




export default function MainContent1() {

  const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData);

  const [selectedTab, setSelectedTab] = useState(1);

  const buttonOption = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="offer_form_section1 tab-content" id="tab1">
      <div className="voucher_campaign_row">
        <div className="row">
          <div className="col-md-6">
            <div className="campaign_base">
              <h1>{selectedBusinessData?.vouchers? selectedBusinessData?.vouchers.length : 0}</h1>
              <h3>Total Campaigns</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="redeem_voucher_base">
              <h1>0</h1>
              <h3>Vouchers Redeemed</h3>
            </div>
          </div>
        </div>
      </div>

      {/* sub category tabs */}
      <div className="tabs2">
        <ul id="tabs2-nav">
          <li>
            <Link to="#tab4" style={{color:selectedTab === 1 ? '#1478A8': 'inherit'}} onClick={() => buttonOption(1)}>
              Active
            </Link>
          </li>
          <li>
            <Link to="#tab5" style={{color:selectedTab === 2 ? '#1478A8': 'inherit'}} onClick={() => buttonOption(2)}>
              Completed
            </Link>
          </li>
          <li>
            <Link to="#tab6" style={{color:selectedTab === 3 ? '#1478A8': 'inherit'}} onClick={() => buttonOption(3)}>
              Draft
            </Link>
          </li>
        </ul>

        {/* tab content child */}
        <div id="tabs-content_child">
          {selectedTab === 1 && <Tab4 vouchers={selectedBusinessData?.vouchers} />}
          {selectedTab === 2 && <Tab5  vouchers={selectedBusinessData?.vouchers} />}
          {selectedTab === 3 && <Tab6  vouchers={selectedBusinessData?.vouchers} />}
        </div>
      </div>
    </div>
  );
}
