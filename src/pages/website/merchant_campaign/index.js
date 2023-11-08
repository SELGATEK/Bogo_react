import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import Css
import './style.css';

// Import Components Header and Footer
import Footer from '../../../partials/footer/Footer.js';
import Header1 from './../../../partials/header/Header1';

// Import Component
import TabsComponents from './elements/TabsCompenent'; // Correct the import name here
import CampaignHeader from './elements/CampaignHeader';
import {SAVE_VOUCHER, CREATE_VOUCHER } from '../../../redux/slices/merchantAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getVoucherDetail } from '../../../utils';

export default function Index() { // Renamed to start with an uppercase letter
 
  let { voucherId } = useParams();
  console.log("voucherId",voucherId)

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
  const [sundayState, setSundayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });
  const [mondayState, setMondayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });
  const [tuesdayState, setTuesdayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });
  const [wednesdayState, setWednesdayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });
  const [thursdayState, setThursdayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });
  const [fridayState, setFridayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });
  const [saturdayState, setSaturdayState] = useState({ status: false, openTime: '00:00', closeTime: '23:59', });


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
  const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);
  const holidayList = useSelector((state) => state.otherInfo.holidayList);
  // const voucherList = useSelector((state) => state.merchantAuth.voucherList); 
  const voucherList = useSelector((state) => state.merchantAuth.voucherList); 

  
  useEffect(() => { 
    console.log("saveVoucher",saveVoucher)
    if(saveVoucher && Object.keys(saveVoucher).length > 0){
      
    setOffers( saveVoucher.offers=="BuyOneGetOne" ? 1 : saveVoucher.offers=="BuyXGetX" ? 2 :  saveVoucher.offers=="BuyBundleGetUnit" ? 3:'' )
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
    }
}, []);



useEffect(()=>{ 
  if(voucherId && voucherList){ 
    const voucher = voucherList?.find((x)=>x.id === voucherId)


    if(voucher){ 
      setOffers( voucher.voucherType=="BuyOneGetOne" ? 1 : voucher.voucherType=="BuyXGetX" ? 2 :  voucher.voucherType=="BuyBundleGetUnit" ? 3:'' )
      setBuy(voucher.toBuy)
      setGet(voucher.toGet)
      setEstSaving(voucher.estimationSaving)
      setExcludeWeekends(voucher.excludeWeekends)
      setExcludePublicHolidays(voucher.excludePublicHolidays)
      setBranch(voucher.business.map((x)=>x.id))
      setFinePrint(voucher.finePrint)
      setRedemption(voucher.maxRedeem)
      setCustomizeTime(true)
      updateSunday(voucher?.voucherTimings[0]?.isActive , voucher?.voucherTimings[0]?.startTime , voucher?.voucherTimings[0]?.endTime) 
      updateMonday(voucher?.voucherTimings[1]?.isActive , voucher?.voucherTimings[1]?.startTime , voucher?.voucherTimings[1]?.endTime) 
      updateTuesday(voucher?.voucherTimings[2]?.isActive , voucher?.voucherTimings[2]?.startTime , voucher?.voucherTimings[2]?.endTime) 
      updateWednesday(voucher?.voucherTimings[3]?.isActive , voucher?.voucherTimings[3]?.startTime , voucher?.voucherTimings[3]?.endTime) 
      updateThursday(voucher?.voucherTimings[4]?.isActive , voucher?.voucherTimings[4]?.startTime , voucher?.voucherTimings[4]?.endTime) 
      updateFriday(voucher?.voucherTimings[5]?.isActive , voucher?.voucherTimings[5]?.startTime , voucher?.voucherTimings[5]?.endTime) 
      updateSaturday(voucher?.voucherTimings[6]?.isActive , voucher?.voucherTimings[6]?.startTime , voucher?.voucherTimings[6]?.endTime) 
    }
      
  }
  
 },[voucherList])


  const dispatch = useDispatch()


  const SaveVoucher=()=>{
     const obj ={offers: offers==1 ? "BuyOneGetOne": offers==2 ? "BuyXGetY":  offers==3 ? "BuyBundleGetUnit":''  ,buy, get, estSaving,excludeWeekends,  excludePublicHolidays, finePrint, branch, redemption,sundayState,mondayState,tuesdayState,wednesdayState,thursdayState,fridayState,saturdayState}
     dispatch(SAVE_VOUCHER(obj))
  }

  const businessOptions = allBusinessData.map((business) => ({ value: business.id, label: business.bName, }));

  const obj ={offers: offers==1 ? "BuyOneGetOne": offers==2 ? "BuyXGetY":  offers==3 ? "BuyBundleGetUnit":''  ,buy, get, estSaving,excludeWeekends,  excludePublicHolidays, finePrint, branch, redemption,sundayState,mondayState,tuesdayState,wednesdayState,thursdayState,fridayState,saturdayState}
  console.log('obj===', obj)

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
                                <button className="btn btn-outline-primary voucher_preview_btn"> Voucher Preview </button>
                            </div>
                        </div>
                        <div className="voucher_preview_row">
                            <div className="row">
                                <div className="col-3"> <img src="/images/voucher_img.png" alt="" className="img-fluid" /> </div>
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
                                        <h3>
                                          {sundayState?.status ? 'S ' : ''}
                                          {mondayState?.status ? 'M ' : ''}
                                          {tuesdayState?.status ? 'T ' : ''}
                                          {wednesdayState?.status ? 'W ' : ''}
                                          {thursdayState?.status ? 'T ' : ''}
                                          {fridayState?.status ? 'F ' : ''}
                                          {saturdayState?.status ? 'S ' :''}
                                          
                                          </h3>
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
 
      <div className="campaign-body-section">
        <div className="container"> 
          <div className="compaing-body-title">
            <h3>CREATE NEW CAMPAIGN</h3>
            <h4 className="offer-text">CHOOSE OFFER TYPE</h4>
          </div>
 
          <div className="offer-row">
            <TabsComponents 
             setBuy={setBuy} buy={buy}  setGet={setGet} get={get}
             setEstSaving={setEstSaving} estSaving={estSaving}
              branch={branch} setBranch={setBranch}
             finePrint={finePrint} setFinePrint={setFinePrint}
             redemption={redemption} setRedemption={setRedemption}
             daysState={daysState} excludeWeekends={excludeWeekends} setExcludeWeekends={setExcludeWeekends} 
             excludePublicHolidays={excludePublicHolidays} setExcludePublicHolidays={setExcludePublicHolidays}
             customizeTime={customizeTime} setCustomizeTime={setCustomizeTime}
             setOffers={setOffers} offers={offers}
             SaveVoucher={SaveVoucher}
             allBusniessData={allBusinessData}
             businessOptions={businessOptions}
             holidayList={holidayList}
             voucherId={voucherId}
            /> 
          </div>
        </div>
      </div>
 
      <Footer />
    </>
  );
}
