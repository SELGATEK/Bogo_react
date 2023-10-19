
import React, { useEffect, useState } from 'react';


// Import Css
import './style.css';

// Import slice


// Import Components Header and Footer
import Footer from '../../../partials/footer/Footer.js';
import Header1 from './../../../partials/header/Header1';

// Import Component
import TabsComponents from './elements/TabsCompenent'; // Correct the import name here
import CampaignHeader from './elements/CampaignHeader';
import {SAVE_VOUCHER, CREATE_VOUCHER } from '../../../redux/slices/merchantAuthSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Index() { 

  


  const dispatch = useDispatch();


  
 
  const [offers ,setOffers] = useState(1)
  const [buy ,setBuy] = useState('')
  const [get ,setGet] = useState('')
  const [estSaving, setEstSaving] = useState('');

  const [excludeWeekends, setExcludeWeekends] = useState(false);
  const [excludePublicHolidays, setExcludePublicHolidays] = useState(false);
  const [branch, setBranch] = useState([ ]);

 
  const [finePrint, setFinePrint] = useState('');
  const [redemption, setRedemption] = useState('');
  const [customizeTime, setCustomizeTime] = useState(false);


  // // Hours state

  const [sundayState, setSundayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });
  const [mondayState, setMondayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });
  const [tuesdayState, setTuesdayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });
  const [wednesdayState, setWednesdayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });
  const [thursdayState, setThursdayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });
  const [fridayState, setFridayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });
  const [saturdayState, setSaturdayState] = useState({ status: false, openTime: '00:00', closeTime: '22:00', });

  


  const updateSunday = (act, ot, Ct) => {setSundayState({ ...sundayState, status: act, openTime: ot, closeTime: Ct, }) };
  const updateMonday = (act, ot, Ct) => { setMondayState({ ...mondayState, status: act, openTime: ot, closeTime: Ct, }) };
  const updateTuesday = (act, ot, Ct) => { setTuesdayState({ ...tuesdayState, status: act, openTime: ot, closeTime: Ct, }) };
  const updateWednesday = (act, ot, Ct) => { setWednesdayState({ ...wednesdayState, status: act, openTime: ot, closeTime: Ct, }) };
  const updateThursday = (act, ot, Ct) => { setThursdayState({ ...thursdayState, status: act, openTime: ot, closeTime: Ct, }) };
  const updateFriday = (act, ot, Ct) => { setFridayState({ ...fridayState, status: act, openTime: ot, closeTime: Ct, }) };
  const updateSaturday = (act, ot, Ct) => { setSaturdayState({ ...saturdayState, status: act, openTime: ot, closeTime: Ct, }) };

  const daysState = {
    sunday: { state: sundayState, update: updateSunday },
    monday: { state: mondayState, update: updateMonday },
    tuesday: { state: tuesdayState, update: updateTuesday },
    wednesday: { state: wednesdayState, update: updateWednesday },
    thursday: { state: thursdayState, update: updateThursday },
    friday: { state: fridayState, update: updateFriday },
    saturday: { state: saturdayState, update: updateSaturday },
  };


  const saveVoucher = useSelector((state) => state.merchantAuth.saveVoucher);

  useEffect(() => {
    setOffers(saveVoucher.offers)
    setBuy(saveVoucher.buy)
    setGet(saveVoucher.get)
    setEstSaving(saveVoucher.estSaving)
    setExcludeWeekends(saveVoucher.excludeWeekends)
    setExcludePublicHolidays(saveVoucher.excludePublicHolidays)
    setBranch(saveVoucher.branch)
    setFinePrint(saveVoucher.finePrint)
    setRedemption(saveVoucher.redemption)
    setCustomizeTime(saveVoucher.customizeTime)
    setSundayState(saveVoucher.sundayState)
    setMondayState(saveVoucher.mondayState)
    setTuesdayState(saveVoucher.tuesdayState)
    setWednesdayState(saveVoucher.wednesdayState)
    setThursdayState(saveVoucher.thursdayState)
    setFridayState(saveVoucher.fridayState)
    setSaturdayState(saveVoucher.saturdayState)
    
}, []);

  const dispatch = useDispatch()


  const SaveVoucher=()=>{
     const obj ={offers,buy, get, estSaving,excludeWeekends, excludePublicHolidays, branch, finePrint,redemption,sundayState,mondayState,tuesdayState,wednesdayState,thursdayState,fridayState,saturdayState}
     console.log('obj===', obj)
     dispatch(SAVE_VOUCHER(obj))
  }

  return (

 

    <>
      {/* Header */}
      <Header1 />

      <div className="campaign-header">
        <div className="container">
        <div className="voucher_preview_row">
                    <div className="voucher_preview_box">
                        <div className="voucher_preview_row">
                            <div className="voucher_preview_box_btn_box">
                                <button className="btn btn-outline-primary voucher_preview_btn">
                                    Voucher Preview
                                </button>
                            </div>
                        </div>
                        <div className="voucher_preview_row">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/voucher_img.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-4">
                                    <div className="buy-box">
                                        <span>BUY</span>
                                        <h3>{buy ? buy : "Sushi Platter"}</h3>
                                    </div>
                                    <div className="get-box">
                                        <span>GET</span>
                                        <h3>{get ? get : "Sushi Platter"}</h3>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="buy-box">
                                        <span>VALIDITY</span>
                                        <h3>S M T W T F S</h3>
                                    </div>
                                    <div className="get-box">
                                        <span>Est. Savings</span>
                                        <h3>AED {estSaving ? estSaving : " 250"}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
        </div>
      </div>

      {/* campaign body section */}
      <div className="campaign-body-section">
        <div className="container">
          {/* Title */}
          <div className="compaing-body-title">
            <h3>CREATE NEW CAMPAIGN</h3>
            <h4 className="offer-text">CHOOSE OFFER TYPE</h4>
          </div>

          {/* offer type */}
          <div className="offer-row">
            <TabsComponents 
             setBuy={setBuy} buy={buy}  setGet={setGet} get={get}
             setEstSaving={setEstSaving} estSaving={estSaving}
            //  branch={branch} setBranch={setBranch}
             finePrint={finePrint} setFinePrint={setFinePrint}
             redemption={redemption} setRedemption={setRedemption}
             daysState={daysState} excludeWeekends={excludeWeekends} setExcludeWeekends={setExcludeWeekends} 
             excludePublicHolidays={excludePublicHolidays} setExcludePublicHolidays={setExcludePublicHolidays}
             customizeTime={customizeTime} setCustomizeTime={setCustomizeTime}
             setOffers={setOffers} offers={offers}

             SaveVoucher={SaveVoucher}

            /> 
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
