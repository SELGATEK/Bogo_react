import React from 'react';


import { Link } from 'react-router-dom';



export default function PaymentForm() {
  return (
    <div className="payment-form-box">
      <form action="" method="post">
      <div className="row payment-input-box name-row">
          <div className="col-sm-5">
            <div className="input-box">
              <label for="inputname">Billing Cycle</label>
              <input
                type="text"
                name="business_name"
                id="buss_name"
                className="form-control"
                placeholder="Monthly"
                required
              />
              <label for="" className="next-bills">
                <span>Next billing cycle</span>
                <span>Monthly from 24/11/2021</span>
              </label>
            </div>
          </div>
          <div className="col-sm-2 offset-sm-0"></div>
          <div className="col-sm-5">
            <div className="input-box">
              <label for="inputname">Cardholder name</label>
              <input
                type="text"
                name="business_name"
                id="buss_name"
                className="form-control"
                placeholder="Jane Aubrey Doe"
                required
              />
            </div>
          </div>
        </div>

        <div className="row payment-input-box card-row">
          <div className="col-sm-5">
            <div className="input-box card-input-box">
              <label for="inputname">Card number</label>
              <input
                type="number"
                name="card-number"
                id=""
                className="form-control card_number"
                placeholder="4410 2919 2929 XXXX"
                required
                style={{border:'none'}}
              />
              <img src="/website/images/visa-icon.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-2 offset-md-0"></div>
          <div className="col-sm-5">
            <div className="input-box">
              <label for="inputname">Promo Code</label>
              <input
                type="text"
                name="business_name"
                id="buss_name"
                className="form-control"
                placeholder="Enter Promotional Code"
                required
              />
              <span className="promo-code-redeem"> Redeem </span>
            </div>
          </div>
        </div>

        <div className="row payment-input-box date-row">
          <div className="col-sm-5">
            <div className="input-box card-date-validation">
              <div className="expiry-date">
                <div className="expiry-date-box">
                  <label htmlFor="inputname">Expiry date</label>

                  <input
                    type="month"
                    name="expiry_date"
                    id=""
                    className="form-control"
                    placeholder="MM/YYYY"
                    style={{border:'none'}}
                    required
                  />
                </div>
              </div>

              <div className="card-cvv">
                <div className="cvv-date-box">
                  <label htmlFor="inputname">cvv</label>
                  <input
                    type="number"
                    name="card-cvv"
                    id=""
                    className="form-control card_number"
                    placeholder="365"
                    required
                    style={{border:'none'}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 offset-md-0"></div>
          <div className="col-sm-5">
            <div className="payment-amount-box">
              <h6>To pay now</h6>
              <span id="pay-amount">AED 150</span>
            </div>
          </div>
        </div>

        <div className="row mt-5 btn-row">
          <div className="col-12 tab-content">
            <div className="next-btn-box tab-pane active" >
              <Link to="" type="button" className="btn btn-primary btnNext">
                Pay Now
              </Link>
              <Link to="/dashboard" className="btnNext btnNextdiv mt-3"> Skip For Now 

              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
