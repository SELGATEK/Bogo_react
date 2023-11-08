import React from 'react'
import { Link } from 'react-router-dom';
import { ImgUrl } from '../../../../utils';



function VoucheHeader({selectedBusinessData}) { 
    return (
        <>

            <div className="voucher_head_img_box" style={{ background: `url(${ImgUrl}/${selectedBusinessData.banner})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' 
            }}>

                <div className="backTodirectory_box">
                    <Link to="/Bogo_directory" className="backTodirectory">
                        <i className="fa fa-chevron-left mr-2" aria-hidden="true"></i>
                        Back to directory
                    </Link>
                </div>
            </div>


            <div className="branch_logo_row">
                <div className="container">
                    <div className="barach_logoReviw_box">
                        
                        <div className="branch_log">
                            <img src={`${ImgUrl}/${selectedBusinessData?.logo}`} alt="" className="img_fluid" />
                        </div>
                        <div className="branch_name_review_row">
                            <span>{selectedBusinessData?.bName} 
                                {/* <Link to={`/edit_branch/${selectedBusinessData.id}`} className="backTodirectory">
                                    <i className="fa-solid fa-pen-to-square text-white pl-1" data-toggle="tooltip" title="Edit Branch" ></i>
                                </Link> */}
                            </span>


                            <div className="branch_review">
                                <i className={`fa fa-star ${ selectedBusinessData?.rating >= 1 ? 'active':''}`} aria-hidden="true"></i>
                                <i className={`fa fa-star ${ selectedBusinessData?.rating >= 2 ? 'active':''}`} aria-hidden="true"></i>
                                <i className={`fa fa-star ${ selectedBusinessData?.rating >= 3 ? 'active':''}`} aria-hidden="true"></i>
                                <i className={`fa fa-star ${ selectedBusinessData?.rating >= 4 ? 'active':''}`} aria-hidden="true"></i>
                                <i className={`fa fa-star ${ selectedBusinessData?.rating >= 5 ? 'active':''}`} aria-hidden="true"></i>
                            </div>
                        </div>
                        <Link to={`/edit_branch/${selectedBusinessData.id}`} className="backTodirectory editBtnBox">
                                    <span>Edit <i className="fa-solid fa-pen-to-square text-white pl-1" data-toggle="tooltip" title="Edit Branch" ></i></span>
                                    
                                </Link>
                        
                    </div>   
                </div>
            </div>
        </>
    )
}

export default VoucheHeader
