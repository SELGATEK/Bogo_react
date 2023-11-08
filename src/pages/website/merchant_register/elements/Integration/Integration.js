import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


// Import Components
import InstagramGalleryItem from './InstagramGalleryItem'
import { useDispatch, useSelector } from 'react-redux';
import { MERCHANT_BUSINESS, MERCHANT_BUSINESS_SUB } from '../../../../../redux/slices/merchantAuthSlice';
import { TOAST_ERROR, reArrangeObj } from '../../../../../utils';




export default function Integration({branchId}) {

  const [latitude, setLatitude] = useState(80);
  const [longitude, setLongitude] = useState(80);

 const businessInfo = useSelector((state) => state.businessInfo);
  const [showGallery, setShowGallery] = useState(false);

//  const handleNextClick = () => { setShowGallery(!showGallery); };


  const dispatch = useDispatch()
  const history = useNavigate()

  const nextStapReg=()=>{ history('/merchant_registration') }

  const handleNextClick=()=>{  
  const accessToken = 'IGQWRPQ2dxQ0N1cU10RXZAjUlpSYWtQWlQ2UEp3ckcwLV8zaGtWMk1MVVd5ZA21ROGZAUcGxZAWXRqZAGpFNWZAxa0ZARX1BiZA3ljcmctdzEyYUtEUFplWnZA6aEJ5RGNoWjJzRnZAabjlpT2hnNVNiYkZA2SEVYSFhYcGVMZAHcZD';
  const userId = 'dicaprioandrea89'; 
  const endpoint = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`;
  
  fetch(endpoint)
  .then((response) => response.json())
  .then((data) => { 
    console.log("data---pp",data);
  })
  .catch((error) => { 
    console.error("----error======pp",error);
  });

   }
  
  

  const businessAdd=()=>{
        const obj ={
          ...(branchId ? { id: branchId } : {}),
          ...(businessInfo.galleryData.logo ? { logo: businessInfo.galleryData.logo } : {}),
          ...( businessInfo.galleryData.bannerobj ? { banner: businessInfo.galleryData.bannerobj } : {}),
           ...( businessInfo.galleryData.selectedImages ? { gallery: businessInfo.galleryData.selectedImages } : {}),
          bName: businessInfo.businessData.bName , 
          address: businessInfo.businessData.address ,
        whatsappNo: businessInfo.businessData.whatsappNo ,
        countryId: businessInfo.businessData.country , 
          cityId: businessInfo.businessData.state ,
          categoryId: businessInfo.businessData.categoryId ,
          rating:businessInfo.businessData.rating,
          subCategoryId: businessInfo.businessData.subCategoryId ,   
          hoursOfOperation: reArrangeObj(businessInfo.businessData) ,
          latitude: businessInfo.businessData.latitude ,
          longitude: businessInfo.businessData.longitude ,
          whatsappNo:businessInfo.businessData.whatsappNo,
        }

        if (!obj.bName) TOAST_ERROR('Business name is required.')
        else if (!obj.address) TOAST_ERROR('Address is required.')
        else if (!obj.countryId) TOAST_ERROR('Country is required.')
        else if (!obj.cityId) TOAST_ERROR('State is required.')
        else if (!obj.categoryId) TOAST_ERROR('Category is required.')
        else if (!obj.subCategoryId) TOAST_ERROR('Subcategory is required.') 
        else if (!obj.latitude || !obj.longitude) TOAST_ERROR('Please Select Your Business Location.')
        else {
          console.log('intregration whatappno ======', businessInfo.businessData);
       dispatch(MERCHANT_BUSINESS(obj));
        setTimeout(() => {
          history('/dashboard')
        }, 5000);
      }
  }

  function openLoginPopup(responseHandler) {
    window.open(
      'https://www.facebook.com/v12.0/dialog/oauth?' +
        'client_id=1088597931155576' +
        '&redirect_uri=http://localhost:3003/add_branch' +
        '&scope=instagram_basic' +
        '&response_type=token',
      'popup',
      'width=600,height=400'
    );
  
    // Attach the response handler to the window for when the popup completes the login
    window.responseHandler = responseHandler;
  }

  const responseFacebook = (response) => {
    if (response.accessToken) {
      // Handle the access token here
      const accessToken = response.accessToken;
      console.log(accessToken);
    } else {
      console.log("not connectinnnnnnnnnnn")
    }
  };
  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="form_left_content_section">
                <h4>Instagram</h4>
                {/* <button onClick={() => openLoginPopup(responseFacebook)}>Login with Instagram</button> */}
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
                    
                  {localStorage.getItem('token') ?
                  branchId  ?   <button   type="submit" className="btn btn-primary btnNext integration-btn-next" onClick={businessAdd}> Update Business </button> :
                  <button   type="submit" className="btn btn-primary btnNext integration-btn-next" onClick={businessAdd}> Add Business </button> 
                  : <button   type="submit" className="btn btn-primary btnNext integration-btn-next" onClick={nextStapReg}> Next </button> 
                    }
                  
              </div>
            </div>
        </div>
    </>
  )
}
