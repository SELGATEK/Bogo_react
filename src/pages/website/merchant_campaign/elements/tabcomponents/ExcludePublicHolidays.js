
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {useSelector} from 'react-redux';

 
  const ExcludePublicHoliday = ({ excludePublicHolidays, holidayList, setExcludePublicHolidays}) => { 

  const publicHolidaylist = useSelector((state) => state.otherInfo.holidayList);
  const currentDate = new Date();
  const isoString = currentDate.toISOString();
  const currentYear = currentDate.getFullYear(); 
  const upcomingPublicHolidays = publicHolidaylist.filter((item) => item.date > isoString);


  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
      setShowModal(false);
  };

  const handleOpenModal = () => {
      setShowModal(true);
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
            checked={excludePublicHolidays}
            onChange={()=>setExcludePublicHolidays(!excludePublicHolidays)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>

    {/* Holiday Info */}
    <Modal show={showModal} onHide={handleCloseModal} >

        <Modal.Header closeButton>
            <Modal.Title className='modal-title'>
            UAE Holiday {currentYear}
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
                    {upcomingPublicHolidays.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.day}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
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


export default ExcludePublicHoliday