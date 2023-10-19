import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CompareOffer() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="compare-text-box">
        <h4 onClick={handleOpenModal}>COMPARE OFFER TYPES</h4>
      </div>





      {/* Compare Offer types */}
      {/* Holiday Info */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" >
          <Modal.Header closeButton>
              <Modal.Title className='modal-title'>
              Offer Types
              </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="row">
            <div className="col-md-4">
              <div className="compare_offer_box">
                <h5>Buy X Get Y</h5>
                <div className="img">
                  <img src="/images/voucher_img0.png" alt="" className="img-fluid"/>
                </div>
                <div className="compare_text">
                  <span>
                    Buy 1 Get 1 deals are best suited to couples, groups of friends of co-workers
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="compare_offer_box">
                <h5>Buy X Get Y</h5>
                <div className="img">
                  <img src="/images/voucher_img1.png" alt="" className="img-fluid" />
                </div>
                <div className="compare_text">
                  <span>
                    Buy X Get Y deals are best suited for solo customers
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="compare_offer_box">
                <h5>Buy X Get Y</h5>
                <div className="img">
                  <img src="/images/voucher_img2.png" alt="" className="img-fluid"/>
                </div>
                <div className="compare_text">
                  <span>
                    Buy Bundle Get Unit deals are best suited for large volume buyers, like families or big groups.
                  </span>
                </div>
              </div>
            </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleCloseModal} className="btn " data-bs-dismiss="modal"style={{backgroundColor:'#029CAB' , color: 'white'}}>Close</Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}
