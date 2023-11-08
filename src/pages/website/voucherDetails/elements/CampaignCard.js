import React from 'react'

function CampaignCard({voucherList}) { 
  return (
    <>
      {voucherList?.map((voucher, index) => (
        <div className="col-md-6">
           { console.log("voucher", voucher)}
          <div className="voucher_preview_row able_voucher_box">
            <div className="voucher_preview_box">
              <div className="voucher_preview_row">
                <div className="voucher_preview_box_btn_box">
                  <button className="btn btn-outline-primary voucher_preview_btn">
                    Voucher  Preview
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
                      <h3>{voucher.toBuy}</h3>
                    </div>
                    <div className="get-box">
                      <span>GET</span>
                      <h3>{voucher.toGet}</h3>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="buy-box">
                      <span>VALIDITY
                      </span>
                      <h3 style={{textTransform:'uppercase' }}>
                        {voucher?.voucherTimings?.map((time,i)=>{ if(time?.isActive) return (time.day).charAt(0)+' '   
                        })}</h3>
                    </div>
                    <div className="get-box">
                      <span>Est. Savings
                      </span>
                      <h3>AED {voucher.estimationSaving}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CampaignCard
