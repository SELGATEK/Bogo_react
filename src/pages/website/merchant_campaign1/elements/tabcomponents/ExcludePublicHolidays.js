
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ExcludePublicHolidays() {

    // Holiday Info Modal
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };




// switch button
  const [excludeHolidays, setExcludeHolidays] = useState(false);

  const handleSwitchChange = () => {
    setExcludeHolidays((prevValue) => !prevValue);
  };

  return (


    <>

    <div className="row">
      <div className="offday_row">
        <label htmlFor="">Exclude public holidays 
            <img src="/images/holidayIcon.png" alt="" className='ml-1 holidayInfo' onClick={handleOpenModal} />
        </label>
        <label className="switch">
          <input
            type="checkbox"
            checked={excludeHolidays}
            onChange={handleSwitchChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>

    {/* Holiday Info */}
    <Modal show={showModal} onHide={handleCloseModal} >

        <Modal.Header closeButton>
            <Modal.Title className='modal-title'>
            UAE Holiday 2022
                 <p style={{fontSize:'18px', color:'f9f9f9'}}>
                    Some holiday dates are subject to change*
                 </p>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="table-responsive uae_holidayTable" style={{ overflowY: 'scroll', height: '250px' }}>
                <table className="table table-bordered ">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Lands On</th>
                    <th>Public Holiday</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Replace with your data */}
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    <tr>
                        <td>January 1, 2022</td>
                        <td>Saturday</td>
                        <td>New Year's Day</td>
                    </tr>
                    {/* Add more rows for other holidays */}
                </tbody>
                </table>
            </div>
        </Modal.Body>

        <Modal.Footer>
        <Button type="button" variant="secondary" onClick={handleCloseModal} className="btn " data-bs-dismiss="modal"style={{backgroundColor:'#029CAB' , color: 'white'}}>Close</Button>
        </Modal.Footer>

    </Modal>


    </>
    


  );
}
