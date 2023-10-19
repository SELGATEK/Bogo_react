import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const VoucherCampaignOverview = () => { 

const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData);

console.log("setSelectedBusinessData(dataBusiness);", selectedBusinessData)

  return <div className="voucher_campaign_row">
    <div className="row">
      <div className="col-md-6">
        <Link to='/campaignDashboard'>
          <div className="campaign_base">
            <h1>{selectedBusinessData?.campaigns ? selectedBusinessData?.campaigns.length :'0'}</h1>
            <h3>Total Campaigns</h3>
          </div>
        </Link>
      </div>
      <div className="col-md-6">
        <Link to='/campaignDashboard'>
          <div className="redeem_voucher_base">
            <h1>45</h1>
            <h3>Vouchers Redeemed</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
};

export default VoucherCampaignOverview;
