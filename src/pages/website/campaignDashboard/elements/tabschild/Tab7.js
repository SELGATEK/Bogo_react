import moment from 'moment';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_CAMPAIGN, CREATE_VOUCHER } from '../../../../../redux/slices/merchantAuthSlice';

export default function Tab4({campaign}) {
    const today = new Date(); 
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const campaignList = useSelector((state) => state.merchantAuth.campaignList);  
  
 
    const submitCampaign =(campainId)=>{ 
      const campaindata = campaignList?.find((x)=>x.id ==campainId)
      const obj={
          id: campainId ,
          campaignType:campaindata.campaignType, 
          offer:campaindata.offer, 
          estimationSaving:campaindata.estimationSaving,
          cashIncentive:campaindata.cashIncentive,
          allowedGuest:campaindata.allowedGuest,
          requirement:campaindata.requirement,
          prefferedPlatforms:campaindata.prefferedPlatforms,
          photo:campaindata.photo,
          video:campaindata.video,
          untilDate:campaindata.untilDate,
          endDate:today,
          hashtags:campaindata.hashtags?.map((x)=>x.name),
          promoCode:campaindata.promoCode,
          audienceSize:campaindata.audienceSize,
          isPublished:campaindata.isPublished,  
          businessIds:campaindata.business.map((x)=>x.id),
      }
  
      dispatch(CREATE_CAMPAIGN(obj ,'close', navigate)) 
 setTimeout(function() {
    window.location.reload();
  }, 2000);  
  
  }

  return (
    <>
<div id="tab4" className="tab-content1">
{campaign?.map((item, i)=>{

const startDate = new Date(item.untilDate);
const endDate = new Date(item.endDate);

 
const isActive = today >= startDate && today <= endDate;
return isActive && item.isPublished? 
            <div className="row">
                <div className="col-6 d-flex flex-column justify-content-between">
                    <div className="offerLabel">
                        <div className="offerlabelbox">{item.campaignType}</div>
                    </div>
                    <div className="campaign_offer_type">
                        <div className="offerType1">
                        <h6 className="me-1">Offer:</h6>
                        <h6>{item.offer}</h6>
                        </div>
                    </div>

                    <div className="campaign_louch_date">
                            <h6 className="me-1">Launched: </h6>
                            <h6>{startDate ? moment(startDate).format("DD MMM YYYY"):''}</h6>
                    </div>
                </div>
                <div className="col-6">
                    <div className="edtiteable-row">
                        <div className="editeable_box">
                            
                            <div className="editBox">
                                <div className="dropdown MangeOfferEditRow">
                                    <button
                                        className="btn  dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Manage Offer
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                        <Link className="dropdown-item" to="/invite_influencer">
                                           <i className="fa-solid fa-eye mr-1"></i>
                                            Review Applications
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="dropdown-item" to={`/ambassdors_compaign/${item.id}`}>
                                            <i className="fa-solid fa-pencil mr-1"></i>
                                            Edit Application
                                        </Link>
                                        <span className="dropdown-item" onClick={ () => submitCampaign(item.id)} >
                                            <i className="fa-regular fa-circle-xmark mr-1"></i>
                                            Close This Campaign
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="voucher_redim_row">
                                <Link to="/redemtionHisory" className="voucher_redim_box">
                                <span>Vouchers Redeemed</span>
                                <h4>{item.noOfRedeem}</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>: null;
          } ) }
        </div>

    </>
  )
}
