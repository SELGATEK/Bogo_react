import React from 'react';

const CampaignHeader = () => {
    return (
        

        <div className="voucher_preview_row">
                    <div className="voucher_preview_box">
                        <div className="voucher_preview_row">
                            <div className="voucher_preview_box_btn_box">
                                <button className="btn btn-outline-primary voucher_preview_btn">
                                    Voucher Preview 
                                </button>
                            </div>
                        </div>
                        <div className="voucher_preview_row">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/voucher_img.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-4">
                                    <div className="buy-box">
                                        <span>BUY</span>
                                        <h3>Sushi Platter</h3>
                                    </div>
                                    <div className="get-box">
                                        <span>GET</span>
                                        <h3>Sushi Platter</h3>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="buy-box">
                                        <span>VALIDITY</span>
                                        <h3>S M T W T F S</h3>
                                    </div>
                                    <div className="get-box">
                                        <span>Est. Savings</span>
                                        <h3>AED 250</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default CampaignHeader;
