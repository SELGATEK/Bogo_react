import React, { useState } from 'react'
import { Link } from 'react-router-dom'



// Import components
import TimeSection from './TimeSection'
import CampaignCard from './CampaignCard'
import BranchDetails from './BranchDetails'
import { useSelector } from 'react-redux'
import { ImgUrl } from '../../../../utils'

function VoucherDetails_index({allBusinessData, selectedBusinessData}) {


    const [selectBranch, setSelectBranch] = useState(1)
    const voucherList = useSelector((state) => state.merchantAuth.voucherList);  

    const TabButton = (id) => { 
        setSelectBranch(id)
    }
    return (
        

        <>
            <div className="container">


                <div className="tabs1">
                    {/* <ul id="tabs-navtab">
                        <li onClick={() => TabButton(1)}>
                            <Link to="#">Overview</Link>
                        </li>
                        <li onClick={() => TabButton(2)}>
                            <Link to="#">Campaign</Link>
                        </li>
                        <li onClick={() => TabButton(3)}>
                            <Link to="#">Branches</Link>
                        </li>
                    </ul> */}
                    {/* <!-- END tabs-nav --> */}
                    <div id="tabs-content_child">
                        {selectBranch === 1 ? (

                            <div id="tab11" className="tab-content6">
                                <div className="overviewTab_box">
                                
                                    <div className="row">
                                        
                                        <div className="col-md-6">
                                            <h2 style={{textAlign:'left'}}>Overview</h2>
                                            <TimeSection selectedBusinessData={selectedBusinessData}/>

                                        </div>
                                        <div className="col-md-6">
                                            <div className='galleryBoxHeading' style={{  marginLeft:'auto' }}>
                                                <h2 style={{textAlign:'left'}}>
                                                    Gallery
                                                </h2>
                                            </div>
                                            
                                            <div className="branch_gallery_img_row">
                                                <div className="branch-gallery_img_box">
                                                    <ul>
                                                        {selectedBusinessData?.gallery?.map((img,i)=>{
                                                            return <li key={i}><img src={`${ImgUrl}/${img}`} alt="" className="img-fluid" /></li>
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {selectBranch === 2 ? (
                            {/* <div id="tab12" className="tab-content6">
                                <div className="row">
                                    <CampaignCard voucherList={voucherList}/>
                                </div>
                            </div> */}
                        ) : null}

                        {selectBranch === 3 ? (
                            {/* <div id="tab13" className="tab-content6">
                                <div className="bogo_directory_card_row">

                                    <div className="row">

                                        <BranchDetails allBusinessData={allBusinessData} />
                                

                                    </div>



                                </div>
                            </div> */}
                        ) : null}
                    </div>
                    {/* < !--END tabs - content-- > */}
                </div>
                {/* < !--END tabs-- > */}








                {/* < !--location  --> */}
                <div className="row">
                    {/* <VoucherDetails_map /> */}

                </div>

            </div>

        </>
    )
}

export default VoucherDetails_index
