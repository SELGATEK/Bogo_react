import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab5({campaign}) {
    console.log(campaign , "campaign in tab8");
    const today = new Date();

  return (
    <>
        <div id="tab5" className="tab-content1">
        {campaign?.map((item, i)=>{  
             
            const endDate = new Date(item.endDate);
            const isActive =  today >= endDate; 
            return isActive && item.isPublished?   <div className="row">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">{item.campaignType}</div>
                </div>
                <div className="campaign_offer_type">
                    <div className="offerType1">
                    <h6 className="me-1">Offer:</h6>
                    <h6>{item.offer}</h6>
                    </div>
                   
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="completed_redem_row">
                    <div className="completed_redem_box">
                    <Link
                        to="/redemtionHisory"
                        className="com_voucher_redim_box"
                    >
                        <span>Vouchers Redeemed</span>
                        <small>{item.noOfRedeem}</small>

                    </Link>
                    </div>
                </div>
                </div>
            </div> : null;
          } ) }

        </div>
    </>
  )
}
