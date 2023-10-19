import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab4() {
  return (
    <>
        <div id="tab4" className="tab-content1">
            <div className="row">
                <div className="col-6">
                    <div className='offerBoxRow'>
                        <div className="offerLabel">
                            <div className="offerlabelbox">Buy1 Get1</div>
                        </div>

                        <div className='offersName'>
                            <h6>BUY 1: <span>Sushi Platter</span></h6>
                            <h6>GET 1: <span>Sushi Platter</span></h6>
                        </div>

                        <div className="campaign_louch_date">
                            <h6 className="me-1">Launched: </h6>
                            <h6>Apr 23, 2021</h6>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="edtiteable-row">
                        <div className="editeable_box">
                            
                            <div className="editBox">
                                <div className="dropdown MangeOfferEditRow">
                                    <button
                                        className="btn  dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Manage Offer
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                        <Link className="dropdown-item" to="/merchant_campaign">
                                            <i className="fa-solid fa-pencil mr-1"></i>
                                            Edit Application
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="dropdown-item" to="/">
                                            <i className="fa-regular fa-circle-xmark mr-1"></i>
                                            Close This Campaign
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="voucher_redim_row">
                                <Link to="/redemtionHisory" className="voucher_redim_box">
                                <span>Vouchers Redeemed</span>
                                <h4>45</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/*  */}
            <div className="row">
                <div className="col-6">
                    <div className='offerBoxRow'>
                        <div className="offerLabel">
                            <div className="offerlabelbox">Buy1 Get1</div>
                        </div>

                        <div className='offersName'>
                            <h6>BUY 1: <span>Sushi Platter</span></h6>
                            <h6>GET 1: <span>Sushi Platter</span></h6>
                        </div>

                        <div className="campaign_louch_date">
                            <h6 className="me-1">Launched: </h6>
                            <h6>Apr 23, 2021</h6>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="edtiteable-row">
                        <div className="editeable_box">
                            
                            <div className="editBox">
                                <div className="dropdown MangeOfferEditRow">
                                    <button
                                        className="btn  dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Manage Offer
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                        <Link className="dropdown-item" to="/merchant_campaign">
                                            <i className="fa-solid fa-pencil mr-1"></i>
                                            Edit Application
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="dropdown-item" to="/">
                                            <i className="fa-regular fa-circle-xmark mr-1"></i>
                                            Close This Campaign
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="voucher_redim_row">
                                <Link to="/redemtionHisory" className="voucher_redim_box">
                                <span>Vouchers Redeemed</span>
                                <h4>45</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </>
  )
}
