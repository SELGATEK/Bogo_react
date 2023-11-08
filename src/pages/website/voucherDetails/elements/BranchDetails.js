import React from 'react'
import { Link } from 'react-router-dom'
import { ImgUrl } from '../../../../utils'

function BranchDetails({allBusinessData}) {
 
    return (
        <>
            {allBusinessData?.map((business, i) => (
                <div className="col-md-6 mt-2" key={business?.id}>
                        <div className="dir-card">
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
                                            <span className="loacation"><i className="fa-solid fa-location-dot text-primary"></i>  {business?.city?.name}
                                               
                                                 </span>
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
                        </div>
                </div>
            ))}

        </>
    )
}

export default BranchDetails
