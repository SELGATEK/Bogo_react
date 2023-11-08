import React from 'react'

export default function Tab6({campaign}) {
  return (
    <>
        <div id="tab6" className="tab-content1">
        {campaign?.map((item, i)=>{    
          
            return  !item.isPublished?  
            <div className="row">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">{item.campaignType}</div>
                </div>
                <div className="campaign_offer_type">
                    <div className="offerType1">
                    <h6 className="me-1">Buy1:</h6>
                    <h6>{item.offer}</h6>
                    </div> 
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="public_nowCampaign_row">
                    <button tyu="" className="public_nowCampaign_box">
                    Publish Now
                    </button>
                </div>
                </div>
            </div>: null;
        } ) } 
        </div>

    </>
  )
}
