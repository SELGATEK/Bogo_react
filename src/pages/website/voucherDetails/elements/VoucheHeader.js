import React from 'react'
import { Link } from 'react-router-dom';



function VoucheHeader() {
    return (
        <>
            <div className="voucher_head_img_box">
                <div className="backTodirectory_box">
                    <Link to="/Bogo_directory" className="backTodirectory">
                        <i className="fa fa-chevron-left mr-2" aria-hidden="true"></i>
                        Back to directory
                    </Link>
                </div>
            </div>


            <div className="branch_logo_row">
                <div className="barach_logoReviw_box">
                    <div className="branch_log">
                        <img src="/images/branch_logo_img.png" alt="" className="img_fluid" />
                    </div>
                    <div className="branch_name_review_row">
                        <span>Hutong Dubai 
                            <Link to="/merchant_register" className="backTodirectory">
                                 <i className="fa-solid fa-pen-to-square text-white pl-1" data-toggle="tooltip" title="Edit Branch" ></i>
                            </Link>
                        </span>


                        <div className="branch_review">
                            {/* <!-- start icon --> */}
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default VoucheHeader
