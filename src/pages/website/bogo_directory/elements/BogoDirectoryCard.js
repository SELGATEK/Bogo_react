import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { ImgUrl } from '../../../../utils'

function Bogo_directory_card({allBusinessData}) {

    const [businessData, setBusinessData] = useState(allBusinessData)
    useEffect(()=>{
        setBusinessData(allBusinessData)
    },[])

    const searchBusiness=(name)=>{ 
        console.log("name",name)
        if(name){
            const searchData = allBusinessData.filter((x) => x.bName && x.bName.toLowerCase().includes(name.toLowerCase()) );
          setBusinessData(searchData);
        }
        else{
            setBusinessData(allBusinessData); 
        }
        
    }
 
const openBusiness=(id)=>{

    
}

    return (
        <>  
          <div className="row">
            <div className="col-12">
              <div className="searchBox_row">
                <form action="" className="searchBox">
                  <div className="input-group">
                    <div className="input-group-append">
                      <button className="btn " type="button">
                        <img src="/images/search.png" alt="" className="img-fluid" />
                      </button>
                    </div>
                    <input type="text" className="form-control search_input" placeholder="Search Venue" onChange={(e)=>searchBusiness(e.target.value)} />

                  </div>
                </form>
              </div>
            </div>
          </div> 
          <div className="bogo_directory_card_row">
            <div className="row">

            {businessData?.map((business, i) => (
                <div className="col-md-6 mt-2">
                    <Link to='/business_profile'>
                        <span className="card p-3 card_row">
                            <div className="row">
                                <div className="col-3">
                                    <div className="card_img">
                                    <img src={`${ImgUrl}/${business.logo}`} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card_details">
                                            <h5>{business?.bName}</h5>
                                            <span>{business?.subCategory?.name}</span>
                                            <span>{business?.address}</span>
                                            <span className="loacation"><i className="fa-solid fa-location-dot text-primary"></i>  {business?.city?.name}</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card_rating_row">
                                        <div className="rating_icon">
                                            <i className="fa-solid fa-star text-primary" ></i>
                                            <span>{business.rating ? business.rating : '0'}</span>
                                        </div>
                                        <div className="card_icon_row">
                                            <img src="/images/directory_img/dir_card_icon3.png" alt="" className="img-fluid" />
                                            <img src="/images/directory_img/dir_card_icon6.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </Link>
                    
                </div> 
            ))}
                </div> 

                </div> 


        </>
    )
}

export default Bogo_directory_card
