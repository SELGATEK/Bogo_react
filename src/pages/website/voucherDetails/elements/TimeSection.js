import React from 'react'
import { convertToAmPm } from '../../../../utils'

function TimeSection({selectedBusinessData}) {

 

  return (
    <>
      <div className="time_address_box">

        <div className="hours_box">
          <strong>  Hours: </strong>
          {selectedBusinessData?.hoursOfOperation ?
          selectedBusinessData?.hoursOfOperation.map((time,i)=>{
            return   <div className="day_boxes" key={i}>
            <span style={{textTransform:'capitalize'}}>{time.day}</span>
            <span>{  time.startTime ? `${convertToAmPm(time.startTime)} - ${convertToAmPm(time.endTime)}`:''}</span>
          </div>
          }):''}
         
        </div>
        <div className="address_box mt-2">
          <p>
            <strong>Address: </strong>
          {selectedBusinessData?.address}
          </p>
        </div>

      </div>

    </>
  )
}

export default TimeSection
