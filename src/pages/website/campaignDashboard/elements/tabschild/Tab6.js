import React from 'react'

export default function Tab6({vouchers}) {

    const today = new Date();

  return (
    <>
        <div id="tab6" className="tab-content1">
        {vouchers?.map((item, i)=>{    
            return  !item.isPublished && !item.isActive?  
            <div className="row">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">{item.voucherType}</div>
                </div>
                <div className="campaign_offer_type">
                    <div className="offerType1">
                    <h6 className="me-1">Offer:</h6>
                    <h6>{item.toBuy}</h6>
                    </div>
                    <div className="offerType2">
                    <h6 className="me-1">Get1:</h6>
                    <h6>{item.toGet}</h6>
                    </div>
                     
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="completed_redem_row justify-content-start align-items-end ">
                <div className="public_nowCampaign_row">
                    <button tyu="" className="public_nowCampaign_box">
                    Publish Now
                    </button>
                </div>
                </div>
                </div>
            </div>  : null;
          } ) } 
        </div>

    </>
  )
}


