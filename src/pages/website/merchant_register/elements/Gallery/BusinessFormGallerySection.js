import React, {useCallback, useEffect, useState}  from 'react';
import { Cancel } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UpdateGalleryInfo } from '../../../../../redux/slices/businessInfoSlice';

const BusinessFormGallerySection = ({onNextClick, oldlogo, oldbanner,oldgallery }) => {

  // Upload logo image
  const [logoImage, setLogoImage] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleLogoImageUpload = (event) => { 
    let form = new FormData(); 
    form.append('logo', event.target.files[0]); 

    setLogo(event.target.files[0])
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setLogoImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  // Upload Banner image
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerobj, setBannerobj] = useState();

  const handleBannerImageUpload = (event) => {
    const file = event.target.files[0];
    setBannerobj(file)
    let form = new FormData();
    form.append('bannerImage', JSON.stringify(file)); 
    const reader = new FileReader();

    reader.onload = () => {
      setBannerImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
             

 



  // Upload Gallery image
  const [selectedImages, setSelectedImages] = useState([]);
  const [galleryimg, setGalleryimg] = useState([]);
  console.log('====', selectedImages);

  const onDrop = useCallback(acceptedFiles => {

      setSelectedImages([...selectedImages, ...acceptedFiles]);
  }, [selectedImages]);

  const removeImage = (index) => {
      setSelectedImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages.splice(index, 1);
          return updatedImages;
      });
  };

  const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      multiple: true,
      onDrop,
  });

  const dispatch = useDispatch()
const submitGallery=()=>{
 const obj = {logo, bannerobj, selectedImages: selectedImages} 
 console.log("obj gallery", obj)
  
  dispatch(UpdateGalleryInfo(obj))
  onNextClick();
}


const handleMultipleImageUpload = (event) => {
  const files = event.target.files;  
  const selectedImageArray = Array.from(files);
  setSelectedImages(selectedImageArray);
};
 

const obj = {logo, bannerobj, selectedImage1: selectedImages}

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="form_gallery_main_section form-gallery-left-box">
            <div className="logo-image-box">
              <h3>Logo</h3>
              <div className="upload_preview_box">
                <div id="imagePreview" style={{ backgroundImage:logoImage ? `url(${logoImage})`: oldlogo ? `url(${oldlogo})` :'url(/images/upload_logo.png)', border: logoImage ? 'none' : '2px dashed #cccccc',}}></div>
                <span>Upload New</span>
              </div>
            </div>
            <input type="file" name="brand_logo" id="imageUpload" onChange={handleLogoImageUpload}  />
          </div>
        </div>
        <div className="col-md-8">
          <div className="form_gallery_main_section form-gallery-right-box">
            <div className="multi-img-box">
              <h3>Banner</h3>
              <div className="multi-img-box-group">
                <div id="multi_img" style={{ backgroundImage:bannerImage ? `url(${bannerImage})`:  oldbanner ? `url(${oldbanner})`: 'url(/images/from_images_bannerrr.png)', border: bannerImage ? 'none' : '2px dashed #cccccc', }}></div>
                <input type="file" name="gallery" id="BannerImage" onChange={handleBannerImageUpload} />
                <button
                  type="button"
                  id="upload-button"
                  className="multi-upload_gallery"
                  data-toggle="modal"
                  data-target="#uploadImageModal"
                >
                  <span>Upload New</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 py-4 text-end">
          <div className="form_gallery_main_section upload-banner-img">
            <h3>Gallery Image</h3>
            
            {selectedImages.length > 0 ? (
                <div style={{ border: '2px dashed #cccccc', minHeight: '60px', width: '100%' ,borderRadius:'5px'}}>

                  <ul style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap',border: 'none', }}>
                      {selectedImages?.map((file, index) => (
                          <li key={index} style={{ listStyle: 'none', margin: '10px' }}>
                              <img
                                  src={URL.createObjectURL(file)}
                                  alt={`Selected ${index}`}
                                  style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '10px' }}
                              />
                              <Link onClick={() => removeImage(index)} style={{ position: 'absolute', marginLeft: -31,  border: 'none', }}>
                                  <Cancel size="20px" color='#ffff' backgrond="black" />
                              </Link>
                          </li>
                      ))}
                  </ul>
                </div>
                ):<div style={{ border: '2px dashed #cccccc', minHeight: '60px', width: '100%' ,borderRadius:'5px',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <img src="/images/gallery_img.png" alt="Upload "  className='img-fluid'/>
              
                </div>}

                <div style={{position:"relative", width:"100%"}}>
                  <input  accept="*" multiple type="file" name="gallery_img" id="imageUplod" onChange={handleMultipleImageUpload} style={{position:"absolute", right:'0', opacity:'0'}}/>
                  <label className="upload__btn">
                        <p >Upload images</p>
                    </label>
                </div>



                {/* <div {...getRootProps()} style={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <label className="upload__btn">
                        <p >Upload images</p>
                    </label>
                </div>	 */}
          </div>
        </div>
      </div>

      {/* next btn */}
      <div className="row">
        <div className="col-12 tab-content">
          <div className="next-btn-box tab-pane active" id="tabs-2">
            <button type="button" className="btn btn-primary btnNext" onClick={submitGallery}>
              Next
            </button>
            <span className="btnNext btnNextdiv" onClick={submitGallery}>Skip For Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};



const dropzoneStyle = {
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  padding: '10px',
  height: 'auto',
  textAlign:'end',
};

export default BusinessFormGallerySection;
