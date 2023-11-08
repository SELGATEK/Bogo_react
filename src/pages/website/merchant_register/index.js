import React, { useState } from 'react'

// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'
import Headers1 from '../../../partials/header/Header1'
import { useParams } from 'react-router-dom';


// Import Components
import MerchantMainTopSection from './elements/MerchantMainTopSection '
import BusinessHeading from './elements/BusinessHeading'
import BusinessMap from './elements/BusinessMap'
import BusinessFormComponent from './elements/BusinessFormComponent'



// Import Css
import './style.css'
import GoogleMap from './elements/GoogleMap'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Index=() =>{
  const [mapData, setMapdata] = useState();
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();
  let { branchId } = useParams();

  const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  
 
  
  useEffect(()=>{
    if(branchId && allBusinessData){
      const busiData = allBusinessData?.find((x)=>x.id ==branchId)
     if(busiData){
      setlatitude(busiData?.bName) 
      setlongitude(busiData?.address) 
     }
  
    }
    
   },[])

  return (
    <>  
       {localStorage.getItem('token') && localStorage.getItem('isLogin') ? <Headers1 /> : <Headers /> }

 
          <MerchantMainTopSection />


          <div className="Business_Information_section">
            <div className="container">
                <div className='row'>
                  <div className='col-12'>
                    <BusinessHeading />
                  </div>
                </div>

                {/* map */}
                <div className='row'>
                    {/* <GoogleMap /> */}
                   <BusinessMap setlatitude={setlatitude} setlongitude={setlongitude}  setMapdata={setMapdata} latitude={latitude} longitude={longitude}/> 
                </div>

                {/* Business Section */}
                <BusinessFormComponent branchId={branchId}  latitude={latitude} longitude={longitude} mapData={mapData}/>
               
            </div>
          </div> 

        <Footer />
    </>
  )
}

export default Index;
