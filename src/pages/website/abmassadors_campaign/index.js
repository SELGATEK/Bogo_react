import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Header1 from '../../../partials/header/Header1';
import Footer from '../../../partials/footer/Footer'; 
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { format } from 'date-fns';
import InputTextRow from './elements/InputTextRow'
import TextAreaLabel from '../../../components/CommonComponent/TextAreaLabel'
import HashtagRow from './elements/HashtagRow';
import PromoCodeRow from './elements/PromoCodeRow';
import SingleSelector from './elements/SingleSelector';
import ExclusiveBtnModal from './elements/ExclusiveBtnModal';
import { useParams } from 'react-router-dom';
// Import components
import AbmassadorsHeading from './elements/AbmassadorsHeading';
import GiveAway from './elements/GiveAway';
import ExclusiveOffer from './elements/ExclusiveOffer';
import { CREATE_CAMPAIGN } from '../../../redux/slices/merchantAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';






// tabs
const AmbassadorsCampaignPage = () => {

  let { campainId } = useParams();
  const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  
  const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData);  
  const campaignList = useSelector((state) => state.merchantAuth.campaignList);  
  console.log('selectedBusinessData',selectedBusinessData)

  const socialMediaOptions = [ 
    { value: 'Facebook', label: 'Facebook' },
     { value: 'Instagram', label: 'Instagram' }, 
     { value: 'Youtube', label: 'Youtube' }, 
     { value: 'TickTok', label: 'TickTok' }, 
    ]

  const businessOption =  allBusinessData?.map((business) => (
    { value: business.id, label: business.bName, }
    ));

  const [campaignType, setcampaignType] = useState(1);
  const [offer, setOffer] = useState();
  const [estimationSaving, setEstimationSaving] = useState();
  const [cashIncentive, setCashIncentive] = useState();
  const [allowedGuest, setallowedGuest] = useState();
  const [requirement, setrequirement] = useState();
  const [prefferedPlatforms, setprefferedPlatforms] = useState([]);
  const [socialPlatforms, setSocialPlatforms] = useState( [socialMediaOptions[4], socialMediaOptions[5]]); 
  const [photo, setphoto] = useState();
  const [video, setvideo] = useState();
  const [untilDate, setuntilDate] = useState();
  const [endDate, setendDate] = useState();
  const [hashtags, sethashtags] = useState();
  const [promoCode, setpromoCode] = useState();
  const [audienceSize, setaudienceSize] = useState(); 
  const [isPublished, setIsPublished] = useState(true);
  // const [maxRedeem, setMaxRedeem] = useState(5000);
  const [businessIds, setBusinessIds] = useState([localStorage.getItem('businessId')]);
  const [campaindata, setCampaindata] = useState({});

  const buttonOption = (id) => { setcampaignType(id); };
  const handleDateChange = (date) => { setuntilDate(date); };
  const handleDateOpen = (id) =>{ setendDate(id) };

   
 useEffect(()=>{
  if(campainId && campaignList){
    const campaindata = campaignList?.find((x)=>x.id ==campainId)
    console.log("campaindata======",campaindata)
    setCampaindata(campaindata);
   if(campaindata){
    setcampaignType(campaindata.campaignType=='GiveAway' ? 1 : 2)
    setOffer(campaindata.offer)
    setEstimationSaving(campaindata.estimationSaving)
    setCashIncentive(campaindata.cashIncentive)
    setallowedGuest(campaindata.allowedGuest)
    setrequirement(campaindata.requirement)
    setBusinessIds(campaindata.business?.map((x)=>x.id))
    setprefferedPlatforms(campaindata.prefferedPlatforms)
    setSocialPlatforms(campaindata.prefferedPlatforms)
    console.log("campaindata.prefferedPlatforms",campaindata.prefferedPlatforms)
    setphoto(campaindata.photo)
    setvideo(campaindata.video)
    setuntilDate(new Date(campaindata.untilDate))
    setendDate(new Date(campaindata.endDate))
    sethashtags(campaindata.hashtags?.map((x)=>x.name)?.toString())
    setpromoCode(campaindata.promoCode)
    setaudienceSize(campaindata.audienceSize)
   }
  }
  
 },[campaignList])
   

//   const SocialComponent = () => (
//     <Select  
//     onChange={handleSelectChange} 
//     closeMenuOnSelect={false}  
//     defaultValue={socialPlatforms}
//     isMulti options={socialMediaOptions} 
//     styles={{ control: (provided) => ({ ...provided, minHeight: '40px !important', backgroundColor: '#f7f7f7', border: 'none', }), }
//     }
//     /> 
// )
const SocialComponent = () => (
  <Select
    onChange={handleSelectChange}
    closeMenuOnSelect={false}
    // defaultValue={campaindata.prefferedPlatforms
    //   ? campaindata.prefferedPlatforms.map((platform) =>
    //       socialMediaOptions.find((option) => option.label === platform)
    //     )
    //   : socialPlatforms}
    value={prefferedPlatforms.map((platform) =>
      socialMediaOptions.find((option) => option.label === platform)
    )}
    isMulti
    options={socialMediaOptions}
    styles={{
      control: (provided) => ({
        ...provided,
        minHeight: '40px !important',
        backgroundColor: '#f7f7f7',
        border: 'none',
      }),
    }}
  />
);


   const  handleSelectChange = (selectedOptions) => { 
    setSocialPlatforms(selectedOptions)
    if(selectedOptions && selectedOptions.length){
      var socialarr =[]
      selectedOptions.forEach(element => {
        socialarr.push(element.label)
      });
      setprefferedPlatforms(socialarr);
    }
    
  }
    const audienceSizeOption = [
      { value: '2000', label: '2000+' },
      { value: '5000', label: '5000+' },
      { value: '10000', label: '10000+' },
      { value: '25000', label: '25000+' },
      { value: '50000', label: '50000+' },
      { value: '100000', label: '100000+' },
      { value: '250000', label: '250000+' },
      { value: '500000', label: '500000+' },
      { value: '1m', label: '1m+' }, 
  ];
  const dispatch = useDispatch()
const navigate = useNavigate()


 const SubmitCampaign=(status)=>{
   const obj ={ ...(campainId ? { id: campainId } : {}), campaignType:campaignType==1 ? "GiveAway":"Exclusive", offer, estimationSaving:estimationSaving, cashIncentive:parseInt(cashIncentive), allowedGuest:parseInt(2), requirement, prefferedPlatforms, photo, video, untilDate:untilDate.toISOString(), endDate:endDate.toISOString(), hashtags:hashtags?.includes('#')? [ hashtags.replace(/#/g, '')]:[hashtags], promoCode, audienceSize:parseInt(audienceSize), isPublished:status,  businessIds}
   console.log('obj1 ',obj)
   dispatch(CREATE_CAMPAIGN(obj ,status, navigate))
 }

 const obj ={ campaignType, offer, estimationSaving:parseInt(estimationSaving), cashIncentive:parseInt(cashIncentive), allowedGuest:parseInt(2), requirement, prefferedPlatforms, photo, video, untilDate, endDate, hashtags, promoCode, audienceSize, isPublished, businessIds}
 console.log('obj2 ',obj)
 
 const handleSelectBusiness = (selectedOptions) => { const selectedIds = selectedOptions.map(option => option.value); setBusinessIds(selectedIds); };

 console.log('requirement ',requirement)

 
  return (
    <>
      <Header1 />
      <AbmassadorsHeading />

      <div className="campaing-body-section">
        <div className="container"> 
        <div className="compaing-body-title"> <h3>CHOOSE CAMPAIGN TYPE</h3> <h4 className="offer-text">CHOOSE OFFER TYPE</h4> </div> 
          <div className="influencers_section">
            <div className="tabs-row">
              <ul id="tabs-nav">
                <li className={ campaignType === 1 ? 'offer-box influencer_tab aos-init aos-animate active' : 'offer-box influencer_tab aos-init aos-animate' } data-aos="flip-up" onClick={() => setcampaignType(1)} >
                  <Link to=""> <h3>Give Away</h3> </Link>
                </li>
                <li className={ campaignType === 2 ? 'offer-box influencer_tab aos-init aos-animate active' : 'offer-box influencer_tab aos-init aos-animate' } data-aos="flip-down" onClick={() => setcampaignType(2)} >
                  <Link to=""> <h3>Exclusive Offer</h3> </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="offer_input_box offer_input_box1">

            

          <div className="">
            <InputTextRow label={campaignType === 1 ? "Giveaway Offer" :"Exclusive Offers"} name="Price" type="text" value={offer}  getValue={setOffer} placeholder="e.g. 3-course meal and cocktails for 2 people" required={true}/>

            <InputTextRow label={campaignType === 1 ? "Estimation saving" :" Price"}  name="ExsOffers" type="text" placeholder="AED" value={estimationSaving}  getValue={setEstimationSaving}  required={true}/>

            <InputTextRow  label={campaignType === 1 ? "Cash Incentive (optional)" :"Estimation saving"}  name="saving" type="number" placeholder="AED" value={cashIncentive}  getValue={setCashIncentive}  required={true}/>

            


            <div className="row mt-2">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label for="">Allow Guest  (+1) </label>
                  <label className="switch" style={{width:'44px'}}> <input type="checkbox" id="switchButton"  onChange={() => setallowedGuest(!allowedGuest)} checked={allowedGuest} /> <span className="slider round"></span> </label>
                </div>
              </div>
            </div>

            {/* multi selector  */}
            <div className="row ">
               <div className="col-12">
                  <div className="input-box">
                      <label htmlFor=" " className="label_text">Select Branch</label>
                      <Select onChange={handleSelectBusiness} 
                      closeMenuOnSelect={false} 
                      value={businessOption.filter((option) => businessIds?.includes(option.value))}
                      isMulti
                      options={businessOption}
                      styles={{ control: (provided) => ({ ...provided, minHeight: '40px !important', backgroundColor: '#f7f7f7', border: 'none', }), }}
                      
                      /> 
                  </div>
               </div>
            </div>

            <div className="row fine-print-row">
            <label htmlFor="">Campaign Requirement</label>
            <div className="fine_print_box">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Tell the influencer what you’re looking for"
              value={requirement}
               onChange={(e)=>setrequirement(e.target.value)}></textarea>
            </div>
          </div> 


            <div className="row mt-3 ">
              <div className="col-8">
                <div className="input-box">
                  <label htmlFor=" " className="label_text">Content</label>
                </div>
              </div>
              <div className="col-4">
                <ul className="jst_cont_end">
                  <li>
                    <div className="input-box ">
                      <label htmlFor="" className="text-center " >Photo</label>
                      <label className="switch">
                        <input type="checkbox" id="switchButton" onChange={() => setphoto(!photo)} checked={photo} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-box ">
                      <label htmlFor="" className="text-center">Video</label>
                      <label className="switch mr-0" style={{width:'37px'}}>
                        <input type="checkbox" id="switchButton" onChange={() => setvideo(!video)} checked={video} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <HashtagRow label='Add Hashtag' sethashtags={sethashtags} hashtags={hashtags}/>

            <PromoCodeRow label='Add Promo Code' setpromoCode={setpromoCode} promoCode={promoCode}/>


            {/* multi selector  */}
            <div className="row ">
               <div className="col-12">
                  <div className="input-box">
                      <label htmlFor=" " className="label_text">Preffered Social Media Platform</label>
                      <SocialComponent />
                  </div>
               </div>
            </div>


 
            <div className="row mt-3">
              <div className="col-12">
                <div className="input-box">
                  <label htmlFor="">Audience Size</label>
                  <select className="form-select" aria-label="Default select example" onChange={e=>setaudienceSize(e.target.value)}>
                    <option selected>Audience Size</option>
                    {audienceSizeOption.map((option) => (
                      <option key={option.value} value={option.value} selected={option.value ==audienceSize}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="input-box">
                  <label for="" >Campaign timeline</label>
                </div>
              </div>
            </div>   

            <div className="row mt-3">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label for="" >Accept applications until</label>
                  <div className="select_datebox">
                  <div>
                          <label onClick={() => document.getElementById('datepicker-trigger').click()} style={{color:'#029cab', cursor: 'pointer'}}>
                          {untilDate ? moment(untilDate).format('dd/MM/yyyy') : 'Select Date'}
                          </label>
                          <DatePicker
                            id="datepicker-trigger"
                            selected={untilDate}
                            minDate={new Date()}
                            onChange={handleDateChange}
                            popperPlacement="bottom-end"
                            onFocus={() => document.getElementById('datepicker-trigger').click()}
                            
                          />
                        </div>

                  </div>

                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label htmlFor="" >Campaign completion date</label>
                  <div className="select_datebox">
                    
                  <div>
                        <label onClick={() => document.getElementById('datepickerTriggers').click()} style={{color:'#029cab'}}>
                                {endDate ?  moment(endDate).format('dd/MM/yyyy') : 'Select Date'}
                        </label>
                        <DatePicker
                            id="datepickerTriggers"
                            selected={endDate}
                            minDate={new Date()}
                            onChange={handleDateOpen}
                            popperPlacement="bottom-end"
                            onFocus={() => document.getElementById('datepickerTriggers').click()}
                        />
                      </div>
                    
                  </div>

                </div>
              </div>
            </div>


            <div className="row review_submit_btn_row">
              <div className="next-btn-box review_submit_btn_box tab-pane active">
                  <ExclusiveBtnModal SubmitCampaign={(status)=>SubmitCampaign(status)} campaignType ={campaignType} offer ={ offer} estimationSaving ={ estimationSaving} cashIncentive ={ cashIncentive} allowedGuest ={ allowedGuest} requirement ={ requirement} prefferedPlatforms ={ prefferedPlatforms} photo ={ photo} video ={ video} untilDate ={ untilDate} endDate ={ endDate} hashtags ={ hashtags} promoCode ={ promoCode}  isPublished={isPublished} setIsPublished={setIsPublished}/>                           
              </div>
            </div>
          </div>
           
          </div> 
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AmbassadorsCampaignPage;
