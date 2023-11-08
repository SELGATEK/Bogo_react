import React, { useEffect } from 'react'

// import Header and Footer
import Headers from '../../../partials/header/Header';  
import Footer from '../../../partials/footer/Footer';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; 


// Import components

import VoucheHeader from './elements/VoucheHeader'
import MainSection from './elements/MainSection'
import Header1 from '../../../partials/header/Header1';
import { useDispatch, useSelector } from 'react-redux';
import { GET_BUSINESS_VOUCHER } from '../../../redux/slices/merchantAuthSlice';

function VoucherDetails(props) {
const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  
const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData); 

const dispatch = useDispatch();

useEffect(() => { 
    dispatch(GET_BUSINESS_VOUCHER(localStorage.getItem('activeBusiness')))
 
}, []);



console.log('allGalleryData:', selectedBusinessData);

    return (
        
        <>
        <Header1/>
            <section className="voucher_previews_section">

                <VoucheHeader selectedBusinessData={selectedBusinessData}/>
                <MainSection allBusinessData={allBusinessData}  selectedBusinessData={selectedBusinessData} />

                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="location_heading" style={{color:'#1478a8', fontWeight:'500'}}>Location:</h3>
                        </div>
                    </div>
                </div>
                

                <div className="">
                <div className="Business_Information_map_section location_map">
                                <Map
                                google={props.google} 
                                zoom={14}
                                initialCenter={{ lat: selectedBusinessData.latitude, lng: selectedBusinessData.longitude }}  
                                >
                                <Marker position={{ lat: selectedBusinessData.latitude, lng: selectedBusinessData.longitude }} />
                                </Map> 
                            </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA',
  })(VoucherDetails); 

