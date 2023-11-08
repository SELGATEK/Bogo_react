import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab5({vouchers}) {
    console.log(vouchers , "vouchers in tab5");
    const today = new Date();
  return (
    <>
        <div id="tab5" className="tab-content1">
        {vouchers?.map((item, i)=>( !item.isPublished && item.isActive?  <div className="row">
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
            </div>  : null ) ) }

        </div>
    </>
  )
}
