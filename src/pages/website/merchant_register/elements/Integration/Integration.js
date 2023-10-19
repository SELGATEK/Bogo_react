import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


// Import Components
import InstagramGalleryItem from './InstagramGalleryItem'
import { useDispatch } from 'react-redux';
import { MERCHANT_BUSINESS_SUB } from '../../../../../redux/slices/merchantAuthSlice';




export default function Integration() {


    // script for instgram img show
    const [showGallery, setShowGallery] = useState(false);

  const handleNextClick = () => {
    setShowGallery(!showGallery); // Toggle the showGallery state
  };


  const dispatch = useDispatch()
  const history = useNavigate()

  const nextStapReg=()=>{ 
    
   // dispatch(MERCHANT_BUSINESS_SUB())
    history('/merchant_registration')
  }
  

  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="form_left_content_section">
                <h4>Instagram</h4>
                <button className="form_facebook" onClick={handleNextClick} style={{ backgroundColor: '#029CAB' }}>Connect To Instagram</button>
                </div>
            </div>
        </div>

        {showGallery && (
        <div className="insta-gallery-section row">
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
        </div>
      )}


        <div className="row g-bussi-row">
        <div className="col-6">
            <div className="form_right_last_content_section g-bussiness">
            <p className="m-0">Google Business</p>
            <h4>ID: 454323933747472</h4>
            </div>
        </div>
        <div className="col-6">
            <div className="form_left_last_content_section">
            <button className="btn from_fackbook_disconnect">Disconnect To Google</button>
            </div>
        </div>
        </div>

        {/* <!-- submit details button --> */}
        <div className="row ">
            <div className="col-12 tab-content">
              <div className="next-btn-box tab-pane active" id="tabs-2"> 
                    <button   type="submit" className="btn btn-primary btnNext integration-btn-next" onClick={nextStapReg}>
                    Next
                    </button> 
                 
                  
              </div>
            </div>
        </div>
    </>
  )
}
