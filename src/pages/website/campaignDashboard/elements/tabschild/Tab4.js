import moment from 'moment/moment';
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { reArrangeObj } from '../../../../../utils';
// import { CREATE_VOUCHER } from '../../../../redux/slices/merchantAuthSlice';
import { CREATE_VOUCHER } from '../../../../../redux/slices/merchantAuthSlice';


export default function Tab4({vouchers}) { 

  const dispatch = useDispatch()
  const voucherList = useSelector((state) => state.merchantAuth.voucherList); 

    const today = new Date();

    const submitCampaign =(voucherId)=>{
      console.log('voucherId', voucherId);
      const voucher = voucherList?.find((x)=>x.id === voucherId)

      let voucherday = [];

      voucher?.voucherTimings?.map((x)=>{
        // filter day,endTime,startTime and isActive
        const obj = {
          day:x.day,
          endTime:x.endTime,
          startTime:x.startTime,
          isActive:x.isActive
        }
        voucherday.push(obj)  
      })

      console.log('voucherday', voucherday);






      const obj={
          id: voucherId ,
          voucherType:voucher.voucherType,
          toBuy:voucher.toBuy,
          toGet:voucher.toGet,
          estimationSaving:voucher.estimationSaving,
          finePrint:voucher.finePrint,
          maxRedeem:voucher.maxRedeem,
          voucherTimings: voucherday,
          isPublished:false,
          isActive:true,
          businessIds:voucher.business.map((x)=>x.id),
      }

      console.log('obj voucher type check', obj.voucherType);
  
      dispatch(CREATE_VOUCHER(obj))
  
  }

return (
    <div id="tab5" className="tab-content1">
      {vouchers?.map((item, i) => {
        
        // Move the variable declarations outside of the map function
        const startDate = new Date(item.untilDate);
       
        const endDate = new Date(item.endDate);
        const isActive = today >= startDate && today <= endDate;

        return item.isPublished && item.isActive ? (
          <div className="row" key={i}>
            <div className="col-6 d-flex flex-column justify-content-between">
              <div className="offerLabel">
                <div className="offerlabelbox">{item.voucherType}</div>
              </div>
              <div className="campaign_offer_type">
                <div className="offerType1">
                  <h6 className="me-1">Buy:</h6>
                  <h6>{item.toBuy}</h6>
                </div>
                <div className="offerType2">
                  <h6 className="me-1">Get:</h6>
                  <h6>{item.toGet}</h6>
                </div>
              </div>
              {/* <div className="campaign_louch_date">
                <h6 className="me-1">Launched: </h6>
                <h6>{startDate ? moment(startDate).format("DD MMM YYYY") : ''}</h6>
              </div> */}
            </div>
            <div className="col-6">
              <div className="edtiteable-row">
                <div className="editeable_box">
                  <div className="editBox">
                    <div className="dropdown MangeOfferEditRow">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Manage Offer
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        
                        <li>
                          <Link className="dropdown-item" to={`/merchant_campaign/${item.id}`}>
                            <i className="fa-solid fa-pencil mr-1"></i>
                            Edit Application
                          </Link>
                          <span  className="dropdown-item" onClick={ () => submitCampaign(item.id)} >
                            <i className="fa-regular fa-circle-xmark mr-1"></i>
                            Close This Campaign
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="voucher_redim_row">
                    <Link to="/redemptionHistory" className="voucher_redim_box">
                      <span>Vouchers Redeemed</span>
                      <h4>{item.noOfRedeem}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
