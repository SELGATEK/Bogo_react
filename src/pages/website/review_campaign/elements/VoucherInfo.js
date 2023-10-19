import React from 'react';

export default function VoucherInfo({saveVoucher}) {
  return (
    <div className="voucher_preview_datarow">
      {/* ... other voucher info components ... */}
        <div className="offer_voucher_box">
            <img src="/images/voucher_img.png" alt="" className="img-fluid" />
        </div>
        <div className="offer_voucher_box">
            <div className="buy-box">
                <span>BUY</span>
                <h3>{saveVoucher?.buy}</h3>
            </div>
            <div className="get-box">
                <span>GET</span>
                <h3>{saveVoucher?.get}</h3>
            </div>
        </div>
        <div className="offer_voucher_box">
            <div className="buy-box">
                <span>VALIDITY
                    </span>
                <h3>S M T W T F S</h3>
            </div>
            <div className="get-box">
                <span>Est. Savings
                    </span>
                <h3>AED {saveVoucher?.estSaving}</h3>
            </div>
        </div>
    </div>
  );
}
