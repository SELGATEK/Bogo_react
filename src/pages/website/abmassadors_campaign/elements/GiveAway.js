import React, { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { format } from 'date-fns';




// Import Components
import InputTextRow from './InputTextRow'
import TextAreaLabel from '../../../../components/CommonComponent/TextAreaLabel'
import HashtagRow from './HashtagRow';
import PromoCodeRow from './PromoCodeRow';
import SingleSelector from './SingleSelector';
import GiveBtnModal from './GiveBtnModal';

export default function GiveAway() {
  


  // select box
  const colourOptions = [
    { value: 'Marina', label: 'Marina' },
    { value: 'Dhubai', label: 'Dhubai' },
    { value: 'Marina1', label: 'Marina1' }
  ]
  
  const MyComponent = () => (
    <Select closeMenuOnSelect={false}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
    styles={{
    // Add a custom style to set the height of the input
    control: (provided) => ({
      ...provided,
      minHeight: '40px !important',
      backgroundColor: '#f7f7f7',
      border: 'none',
    }),
  }}
    />
  )





  // select box
  const socialMediaOptions = [
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'Youtube', label: 'Youtube' },
    { value: 'TickTok', label: 'TickTok' },
  ]
  
  const SocialComponent = () => (
    <Select closeMenuOnSelect={false}
    defaultValue={[socialMediaOptions[4], socialMediaOptions[5]]}
    isMulti
    options={socialMediaOptions}
    styles={{
    // Add a custom style to set the height of the input
    control: (provided) => ({
      ...provided,
      minHeight: '40px !important',
      backgroundColor: '#f7f7f7',
      border: 'none',
    }),
  }}
    />
  )











  // date picker
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };


  // Date Picker 2
  const [dateStart, setDateStart] = useState(null);

  const handleDateOpen = (id) =>{
    setDateStart(id)
  };
  




    // Audience Size options
    const audienceSize = [
        { value: '1', label: '2000+' },
        { value: '2', label: '5000+' },
        { value: '3', label: '10000+' },
        { value: '3', label: '25000+' },
        { value: '3', label: '50000+' },
        { value: '3', label: '100000+' },
        { value: '3', label: '250000+' },
        { value: '3', label: '500000+' },
        { value: '3', label: '1m+' },
        // Add more options as needed
    ];


    




  return (
    <>
      <div className="">
            <InputTextRow label="Giveaway Offer" name="giveawayOffer" type="text" placeholder="e.g. 3-course meal and cocktails for 2 people" required={true}/>
            <InputTextRow label="Estimation saving" name="saving" type="text" placeholder="AED" required={true}/>

            <InputTextRow label="Cash Incentive (optional)" name="Incentive" type="text" placeholder="AED" required={true}/>


            <div className="row ">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label for="">Allow Guest  (+1)
                  </label>
                  <label className="switch" style={{width:'44px'}}>
                    <input type="checkbox" id="switchButton"/>
                    <span className="slider round"></span>
                  </label>
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
            


            <TextAreaLabel label='Campaign Requirement' rows="5" placeholder="Tell the influencer what you’re looking for"  />


            <div className="row mt-3 ">
              <div className="col-7">
                <div className="input-box">
                  <label htmlFor=" " className="label_text">Content</label>
                </div>
              </div>
              <div className="col-5">
                <ul className="jst_cont_end">
                  <li>
                    <div className="input-box ">
                      <label htmlFor="" className="text-center ">Photo</label>
                      <label className="switch" >
                        <input type="checkbox" id="switchButton"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-box ">
                      <label htmlFor="" className="text-center">Video</label>
                      <label className="switch mr-0" style={{width:'37px'}}>
                        <input type="checkbox"  id="switchButton"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <HashtagRow label='Add Hashtag'/>

            <PromoCodeRow label='Add Promo Code' />



            {/* multi selector  */}
            <div className="row ">
               <div className="col-12">
                  <div className="input-box">
                      <label htmlFor=" " className="label_text">Preffered Social Media Platform</label>
                      <SocialComponent  />
                  </div>
               </div>
            </div>

            <SingleSelector label="Audience Size" defautlOptions='Audience Size' options={audienceSize} />

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
                          {startDate ? format(startDate, 'dd/MM/yyyy') : 'Select Date'}
                          </label>
                          <DatePicker
                            id="datepicker-trigger"
                            selected={startDate}
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
                                {dateStart ? format(dateStart, 'dd/MM/yyyy') : 'Select Date'}
                        </label>
                        <DatePicker
                            id="datepickerTriggers"
                            selected={dateStart}
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


            <GiveBtnModal/>





      </div>
    </>
  )
}
