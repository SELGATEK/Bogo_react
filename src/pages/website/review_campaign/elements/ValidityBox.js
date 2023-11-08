import React from 'react';

// Import Components
import FinePrint from './FinePrint';

export default function ValidityBox({saveVoucher}) {
  return (
    <div className="validity_row">
      {/* ... validity box components ... */}
        <div className="validity_box">
              <h4>VALIDITY</h4>
              <ul>
                <li>S <span>{saveVoucher?.sundayState?.status ? `${saveVoucher?.sundayState.openTime} - ${saveVoucher?.sundayState.closeTime}` :"Not available"}</span></li>
                <li>M <span>{saveVoucher?.mondayState?.status ? `${saveVoucher?.mondayState.openTime} - ${saveVoucher?.mondayState.closeTime}` :"Not available"}</span></li>
                <li>T <span>{saveVoucher?.tuesdayState?.status ? `${saveVoucher?.tuesdayState.openTime} - ${saveVoucher?.tuesdayState.closeTime}` :"Not available"}</span></li>
                <li>W <span>{saveVoucher?.wednesdayState?.status ? `${saveVoucher?.wednesdayState.openTime} - ${saveVoucher?.wednesdayState.closeTime}` :"Not available"}</span></li>
                <li>Th <span>{saveVoucher?.thursdayState?.status ? `${saveVoucher?.thursdayState.openTime} - ${saveVoucher?.thursdayState.closeTime}` :"Not available"}</span></li>
                <li>F <span>{saveVoucher?.fridayState?.status ? `${saveVoucher?.fridayState.openTime} - ${saveVoucher?.fridayState.closeTime}` :"Not available"}</span></li>
                <li>S <span>{saveVoucher?.saturdayState?.status ? `${saveVoucher?.saturdayState.openTime} - ${saveVoucher?.saturdayState.closeTime}` :"Not available"}</span></li>
              </ul>
        </div>
 
        <div className="fine_print"> 
        <h4>FINE PRINT</h4>
        <div className="fine_print_outbox">
            <span>
           {saveVoucher?.finePrint}
            </span>
        </div>
    </div>
    </div>
  );
}
