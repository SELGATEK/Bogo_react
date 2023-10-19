import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
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

// Import components
import AbmassadorsHeading from './elements/AbmassadorsHeading';
import GiveAway from './elements/GiveAway';
import ExclusiveOffer from './elements/ExclusiveOffer';
import { CREATE_CAMPAIGN } from '../../../redux/slices/merchantAuthSlice';
import { useDispatch } from 'react-redux';






// tabs
const AmbassadorsCampaignPage = () => {
  const socialMediaOptions = [ { value: 'Facebook', label: 'Facebook' }, { value: 'Instagram', label: 'Instagram' }, { value: 'Youtube', label: 'Youtube' }, { value: 'TickTok', label: 'TickTok' }, ]

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
  const [maxRedeem, setMaxRedeem] = useState();
  const [businessIds, setBusinessIds] = useState(localStorage.getItem('businessId'));
  

  const buttonOption = (id) => { setcampaignType(id); };
  const handleDateChange = (date) => { setuntilDate(date); };
  const handleDateOpen = (id) =>{ setendDate(id) };
 
   
  const colourOptions = [ { value: 'Marina', label: 'Marina' }, { value: 'Dhubai', label: 'Dhubai' }, { value: 'Marina1', label: 'Marina1' } ]
  const MyComponent = () => ( <Select closeMenuOnSelect={false} defaultValue={[colourOptions[4], colourOptions[5]]} isMulti options={colourOptions} styles={{ control: (provided) => ({ ...provided, minHeight: '40px !important', backgroundColor: '#f7f7f7', border: 'none', }), }} /> )



  const SocialComponent = () => ( <Select  onChange={handleSelectChange} closeMenuOnSelect={false} defaultValue={socialPlatforms} isMulti options={socialMediaOptions} styles={{ control: (provided) => ({ ...provided, minHeight: '40px !important', backgroundColor: '#f7f7f7', border: 'none', }), }} /> )

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
      { value: '2000+', label: '2000+' },
      { value: '5000+', label: '5000+' },
      { value: '10000+', label: '10000+' },
      { value: '25000+', label: '25000+' },
      { value: '50000+', label: '50000+' },
      { value: '100000+', label: '100000+' },
      { value: '250000+', label: '250000+' },
      { value: '500000+', label: '500000+' },
      { value: '1m+', label: '1m+' }, 
  ];
  const dispatch = useDispatch()

 const SubmitCampaign=()=>{
   const obj ={ campaignType, offer, estimationSaving, cashIncentive, allowedGuest, requirement, prefferedPlatforms, photo, video, untilDate, endDate, hashtags, promoCode, audienceSize, isPublished, maxRedeem, businessIds}
   console.log("obj>>>>", obj)
   dispatch(CREATE_CAMPAIGN(obj))
 }

 const obj ={ campaignType, offer, estimationSaving, cashIncentive, allowedGuest, requirement, prefferedPlatforms, photo, video, untilDate, endDate, hashtags, promoCode, audienceSize, isPublished, maxRedeem, businessIds}
console.log('obj--------+++', obj)
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

          {/* Offer form input 1 */}
          {/* {campaignType === 1 && (
            <div className="offer_form_section1 tab-content" id="tab1">
              <form method="" action="" className="offer_input_box offer_input_box1">
                <GiveAway />
              </form>
            </div>
          )} */}

          {/* Offer form input 2 */}
          {/* {campaignType === 2 && (
            <div className="offer_form_section1 tab-content" id="tab2">
              <form method="" action="" className="offer_input_box offer_input_box1">
                <ExclusiveOffer/>
              </form>
            </div>
          )} */}






          <div className="offer_input_box offer_input_box1">

          <div className="">
            <InputTextRow label={campaignType === 1 ? "Giveaway Offer" :"Price"} name="Price" type="text" value={offer}  getValue={setOffer} placeholder="e.g. 3-course meal and cocktails for 2 people" required={true}/>

            <InputTextRow label={campaignType === 1 ? "Estimation saving" :"Exclusive Offers"}  name="ExsOffers" type="text" placeholder="AED" value={estimationSaving}  getValue={setEstimationSaving}  required={true}/>

            <InputTextRow  label={campaignType === 1 ? "Cash Incentive (optional)" :"Estimation saving"}  name="saving" type="text" placeholder="AED" value={cashIncentive}  getValue={setCashIncentive}  required={true}/>

            


            <div className="row ">
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
                      <MyComponent  />
                  </div>
               </div>
            </div>

            <div className="row fine-print-row">
            <label htmlFor="">Campaign Requirement</label>
            <div className="fine_print_box">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Tell the influencer what you’re looking for" onChange={(e)=>setrequirement(e.target.value)}>{requirement}</textarea>
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
                      <SocialComponent/>
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
                          {untilDate ? format(untilDate, 'dd/MM/yyyy') : 'Select Date'}
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
                                {endDate ? format(endDate, 'dd/MM/yyyy') : 'Select Date'}
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
                  <ExclusiveBtnModal SubmitCampaign={()=>SubmitCampaign()} campaignType ={campaignType} offer ={ offer} estimationSaving ={ estimationSaving} cashIncentive ={ cashIncentive} allowedGuest ={ allowedGuest} requirement ={ requirement} prefferedPlatforms ={ prefferedPlatforms} photo ={ photo} video ={ video} untilDate ={ untilDate} endDate ={ endDate} hashtags ={ hashtags} promoCode ={ promoCode}  />                           
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
