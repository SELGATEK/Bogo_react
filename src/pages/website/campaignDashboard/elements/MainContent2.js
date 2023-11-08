import React, {useState} from 'react'


// Import Conponents
// import Tab4 from './tabschild/Tab4';
// import Tab5 from './tabschild/Tab5';
// import Tab6 from './tabschild/Tab6';
import Tab7 from './tabschild/Tab7';
import Tab8 from './tabschild/Tab8';
import Tab9 from './tabschild/Tab9';
import { useSelector } from 'react-redux';





export default function MainContent2() {
    const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData);

  const [selectedTab, setSelectedTab] = useState(1);

  const buttonOption = (id) => {
    setSelectedTab(id);
  };




  return (
    <div>
        <div className="offer_form_section1 tab-content" id="tab2" >
            <div className="voucher_campaign_row">
                <div className="row">
                    <div className="col-md-6">
                    <div className="campaign_base">
                        <h1>{selectedBusinessData?.campaigns? selectedBusinessData?.campaigns.length : 0}</h1>
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
            <div className="tabs3">
                <ul id="tabs3-nav">
                    <li><a href="#tab7" style={{color:selectedTab === 1 ? '#1478A8': 'inherit'}} onClick={() => buttonOption(1)}>Active</a></li>
                    <li><a href="#tab8" style={{color:selectedTab === 2 ? '#1478A8': 'inherit'}} onClick={() => buttonOption(2)}>Completed</a></li>
                    <li><a href="#tab9" style={{color:selectedTab === 3 ? '#1478A8': 'inherit'}} onClick={() => buttonOption(3)}>Draft</a></li>
                </ul> 


                {/* tab content child */}
                <div id="tabs-content_child">
                    {selectedTab === 1 && <Tab7 campaign={selectedBusinessData?.campaigns}  />}
                    {selectedTab === 2 && <Tab8 campaign={selectedBusinessData?.campaigns} />}
                    {selectedTab === 3 && <Tab9 campaign={selectedBusinessData?.campaigns} />}
                </div>
            </div>

        </div>
    </div>
  )
}
