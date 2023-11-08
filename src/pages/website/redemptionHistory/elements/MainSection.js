import React from 'react'

function MainSection() {

    const RedeemCard = [
        {}, {}, {}, {}, {}, {}
    ]
    return (
        <>


            <div className="redeem_voucher_body">
                <div className="container">
                    <div className="red_section_box">
                        <div className="row">
                            {RedeemCard.map(() => (
                                <div className="col-md-6">
                                    <div className="redeem_voucher_col">
                                        <div className="redeem_voucher_box">
                                            <div className="code_row">
                                                <label for="">
                                                    Buy1 Get1
                                                </label>
                                                <span>
                                                    XY209Q
                                                </span>
                                            </div>
                                            <div className="buy_redeem_row">
                                                <span><strong>Buy:</strong> Garlic Pizza</span>
                                                <span><strong>Redem by:</strong> John Vic </span>
                                            </div>
                                            <div className="get_redeem_row">
                                                <span><strong>Get:</strong> Cold drink</span>
                                                <span>22/02/2021 10:30 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default MainSection
