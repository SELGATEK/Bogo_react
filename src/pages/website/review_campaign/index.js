import React from 'react';
import { Link } from 'react-router-dom';


// Import Components
import Header1 from '../../../partials/header/Header1';
import Footer from '../../../partials/footer/Footer';
import { useParams } from 'react-router-dom';


import CampaignHeader from './elements/CampaignHeader';
import VoucherInfo from './elements/VoucherInfo';
// import SwitchBox from './elements/SwitchBox';
import ValidityBox from './elements/ValidityBox';
import { useDispatch, useSelector } from 'react-redux';
import { reArrangeObj } from '../../../utils';
import { CREATE_VOUCHER } from '../../../redux/slices/merchantAuthSlice';

export default function ReviewCampaign() {
    const dispatch = useDispatch()
    const saveVoucher = useSelector((state) => state.merchantAuth.saveVoucher);
  let { voucherId } = useParams();
   
const submitCampaign =(status)=>{
    
    const obj={
        ...(voucherId ? { id: voucherId } : {}),
        voucherType:saveVoucher.offers,
        toBuy:saveVoucher.buy,
        toGet:saveVoucher.get,
        estimationSaving:saveVoucher.estSaving,
    //    excludeWeekends:saveVoucher.excludeWeekends,
    //    excludePublicHolidays:saveVoucher.excludePublicHolidays,
        // businessId:localStorage.getItem('businessId'),
        finePrint:saveVoucher.finePrint,
        maxRedeem:saveVoucher.redemption,
        voucherTimings: reArrangeObj(saveVoucher) ,
        isPublished:status,
        isActive:status,
        businessIds:saveVoucher.branch,
    }

    dispatch(CREATE_VOUCHER(obj))

}




  return (

    <>
        {/* Header */}
        <Header1 />

        {/* Campaign Header */}
        <CampaignHeader />



        <div className="campaing-body-section">
        <div className="container">
            <div className="review_compaign_row">
            <div className="review_campaign_box">
                <div className="base_img">
                    <VoucherInfo saveVoucher={saveVoucher}/>
                    {/* <SwitchBox /> */}
                    <ValidityBox saveVoucher={saveVoucher}/>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='backToEdit'>
                                <i className="fa-solid fa-angle-left"></i>
                                <Link to='/merchant_campaign'>Back to Edit</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="termsCondition">
                <h4>By creating a campaign, you agree to BOGO’s Terms and Conditions and Privacy Policy.</h4>
                </div>

                <div className="row">
                <div className="col-12">
                    <Link to="/dashboard"  className="fullsubmitbtn" onClick={()=>submitCampaign(true)} style={{color:'white'}}>
                    Publish Campaign
                    </Link>
                </div>
                <div className="col-12">
                    <div className="savedraftbtn_row">
                    <Link to="/dashboard"  className="saveDraftbtn"  onClick={()=>submitCampaign(false)}>Save Draft</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>



        {/* Footer */}
        <Footer/>
    </>
    
  );
}
