import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import BusinessFormGallerySection from './Gallery/BusinessFormGallerySection';
import BusinessFormHoursSection from './Store/BusinessFormHoursSection';
import NextButton from './Store/NextButton';
import PrivacyPolicy from './Store/PrivacyPolicy';
import Integration from './Integration/Integration';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchSubcategory } from '../../../../redux/slices/subCategorySlice';
import { UpdateBusinessInfo } from '../../../../redux/slices/businessInfoSlice';



const BusinessFormMainSection = () => {
  
  const [bName ,setBName] = useState('')
  const [address ,setAddress] = useState('')
  const [country ,setCountry] = useState('')
  const [allcity ,setAllcity] = useState([])
  const [pin ,setPin] = useState('')
  const [state ,setState] = useState('')
  const [categoryId ,setCategoryId] = useState('')
  const [subCategoryId ,setSubCategoryId] = useState('')
  const [whatsappNo ,setWhatsappNo] = useState('')
  const [logo ,setLogo] = useState('')
  const [banner ,setBanner] = useState('')
  const [gallery ,setGallery] = useState('')

  const [sundayState, setSundayState] = useState({ status: false, openTime: '', closeTime: '', });
  const [mondayState, setMondayState] = useState({ status: false, openTime: '', closeTime: '', });
  const [tuesdayState, setTuesdayState] = useState({ status: false, openTime: '', closeTime: '', });
  const [wednesdayState, setWednesdayState] = useState({ status: false, openTime: '', closeTime: '', });
  const [thursdayState, setThursdayState] = useState({ status: false, openTime: '', closeTime: '', });
  const [fridayState, setFridayState] = useState({ status: false, openTime: '', closeTime: '', });
  const [saturdayState, setSaturdayState] = useState({ status: false, openTime: '', closeTime: '', });

  const updateSunday = (act, ot, Ct) => {console.log("helooo", act, ot, Ct) ; setSundayState({ ...sundayState, status: act, openTime: ot, closeTime: Ct, }) };
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
  
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category.categories);
  const countries = useSelector((state) => state.country.countries);

  const selectedSubCategoryId = useSelector((state) => state.subCategory.subcategories);
 
  
  const [activeTab, setActiveTab] = useState("tabs-1");

  useEffect(() => {
 
  if(countries && countries.length){
   setCountry(countries[0].id)
   setAllcity(countries[0].cities)
   setState(countries[0].cities ? countries[0].cities[0].id :'')
  }
    
  }, [dispatch,  countries]);

  const handleTabSelect = (tabId) => { setActiveTab(tabId); };
  const handleNextClick = () => {

    const obj = {bName , address ,country ,pin ,state ,categoryId ,subCategoryId ,whatsappNo , sundayState , mondayState , tuesdayState , wednesdayState , thursdayState , fridayState , saturdayState }
    
    console.log("obj",obj)
    
    dispatch(UpdateBusinessInfo(obj)) 
     setActiveTab("tabs-2");
     }; 


  const handleInterNextClick = () => { setActiveTab("tabs-3"); };
 
  const countryUpdate=(id)=>{
    const getCountry =countries?.find((x)=>x.id==id);
   if(getCountry){
    setCountry(getCountry.id)
    setAllcity(getCountry.cities)
   }
    
  }
   


  return (
    <div className="business_form_main_section">
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="controlled-tab-example" style={{ borderBottom: '2px solid #ccc' }}>
        <Tab eventKey="tabs-1" title="Store">
          {/* Content for Store tab */}
          <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                    <div className="input-box">
                        <label  htmlFor="inputname">Business name</label>
                        <input type="text" value={bName} onChange={e=>setBName(e.target.value)} name="business_name" id="buss_name" className="form-control" placeholder="Name" required />
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <div className="input-box">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text"  value={address} onChange={e=>setAddress(e.target.value)}  name="address" id="buss_address" className="form-control" placeholder="Address" required />
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12">

                            <div className="input-box">
                                <label htmlFor="inputCountry">Country</label>
                                <select className="form-control" name="" id="buss_country" onChange={e=>countryUpdate(e.target.value)} >
                                {countries?.map(item=> <option  key={item.id} value={item.id}>{item.name}</option>)} 
                                </select>
                            </div>
                    
                    </div>

                </div>


                <div className="row form-input-box">
                    
                    <div className="col-md-4 col-sm-12">
                    <div className="input-box">
                        <label htmlFor="emirate">Emirate/State</label>
                        <select className="form-control" name="country" id="emirate"  onChange={e=>setState(e.target.value)}>
                        {allcity?.map(item=> <option  key={item.id} value={item.id}>{item.name}</option>)} 
                        </select>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12">

                        <div className="input-box">
                            <label htmlFor="inputCountry">Category</label>
                            <select className="form-control" name="country" id="buss_country"  onChange={e=>{setCategoryId(e.target.value); dispatch(fetchSubcategory(e.target.value))}} >
                            <option value="">Select Category</option>
                              {category?.map(item=> <option  key={item.id} value={item.id}>{item.name}</option>)} 
                        </select>
                        </div>
                    
                    </div>
                    <div className="col-md-4 col-sm-12">


                    <div className="input-box">
                      <label htmlFor="inputCountry">Sub Category</label>
                      <select className="form-control" name="country" id="buss_country" onChange={e=>setSubCategoryId(e.target.value)} >
                      <option value="">Select Subcategory</option>
                      {selectedSubCategoryId && selectedSubCategoryId.map((item, index) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    </div>

                </div>

                <BusinessFormHoursSection  daysState ={daysState} setWhatsappNo={setWhatsappNo}/>

                {/* Privacy Policy */}
                <PrivacyPolicy/>


                {/* Next Btn */}
                <NextButton onNextClick={handleNextClick} />

          </div>
        </Tab>
        <Tab eventKey="tabs-2" title="Gallery">
          {/* Content for Gallery tab */}
          <BusinessFormGallerySection onNextClick={handleInterNextClick} /> 
        </Tab>
        <Tab eventKey="tabs-3" title="Integration">
          {/* Content for Integration tab */}
          <Integration/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BusinessFormMainSection;
