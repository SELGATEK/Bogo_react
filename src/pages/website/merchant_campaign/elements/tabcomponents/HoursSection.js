import React, {useState} from 'react'

export default function HoursSection(props) {
    const {daysState} = props;
    // Hours Script
    const sundayState = daysState.sunday.state;
    const updateSunday = daysState.sunday.update; 

    const mondayState = daysState.monday.state;
    const updateMonday = daysState.monday.update;

    const tuesdayState = daysState.tuesday.state;
    const updateTuesday = daysState.tuesday.update;

    const wednesdayState = daysState.wednesday.state;
    const updateWednesday = daysState.wednesday.update;

    const thursdayState = daysState.thursday.state;
    const updateThursday = daysState.thursday.update;

    const fridayState = daysState.friday.state;
    const updateFriday = daysState.friday.update;

    const saturdayState = daysState.saturday.state;
    const updateSaturday = daysState.saturday.update;


    const [sundayToValue, setSundayToValue] = useState(sundayState?.closeTime);
    const [mondayToValue, setMondayToValue] = useState(mondayState?.closeTime);
    const [tuesdayToValue, setTuesdayToValue] = useState(tuesdayState?.closeTime);
    const [wednesdayToValue, setWednesdayToValue] = useState(wednesdayState?.closeTime);
    const [thursdayToValue, setThursdayToValue] = useState(thursdayState?.closeTime);
    const [fridayToValue, setFridayToValue] = useState(fridayState?.closeTime);
    const [saturdayToValue, setSaturdayToValue] = useState(saturdayState?.closeTime);

    
    const handleTimeChange = (dayState, newValue, isFrom, setValue) => {
        const { status, openTime, closeTime } = dayState;
    
        if (isFrom) {
          // Update the openTime of the dayState
          dayState.openTime = newValue;
        } else {
          if (!openTime) {
            alert('Please select First Start Time.');
            setValue('');
            return;
          } else if (newValue <= openTime) {
            alert('Please select End Time greater than Start Time.');
            setValue('');
            return;
          } else {
            // Update the closeTime of the dayState
            dayState.closeTime = newValue;
            setValue(newValue);
          }
        }
      };






  return (
    <>
      <div className="row form-input-box hour_operation">
      <div className="col-md-5 col-lg-4 col-sm-12">
        <label htmlFor="inputhours" className="inputhours">Hours of Operation</label>
        <div className="row ">
            <div className="col-12 day-box day-box1">
                <span>Sunday </span> 
                <label className="switch">
                    <input type="checkbox" checked={sundayState.status} onClick={()=> updateSunday(!(sundayState.status), sundayState.openTime, sundayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>
            </div>

            {sundayState.status && (
                <div className="col-12">
                
                <div className="hour-box hour-box1">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="sunday_from" value={sundayState.openTime} placeholder="7:00 AM" onChange={(e)=> updateSunday(sundayState.status, e.target.value, sundayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                        To
                        </div>
                        <div className="col-5 pr-0">
                        <input
                            type="time"
                            className="form-control"
                            name="sunday_to"
                            value={sundayState.closeTime}
                            placeholder="10:30 PM"
                            onChange={(e) => handleTimeChange(sundayState, e.target.value, false, setSundayToValue)}
                        />

                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>

        <div className="row ">

        <div className="col-12 day-box day-box2">
            <span>Monday </span>
            <label className="switch">
            <input type="checkbox" checked={mondayState.status} onClick={()=> updateMonday(!(mondayState.status), mondayState.openTime, mondayState.closeTime)}  />
            <span className="slider round"></span>
        </label>

        
        </div>

        {mondayState.status && (
            <div className="col-12">
                <div className="hour-box hour-box2">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="monday_from" placeholder="7:00 AM" onChange={(e)=> updateMonday(mondayState.status, e.target.value, mondayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                        To
                        </div>
                        <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="monday_to" placeholder="10:30 PM" 
                        value={mondayToValue}
                        onChange={(e) => handleTimeChange(mondayState, e.target.value, false, setMondayToValue)}/>
                        </div>
                    </div>
                </div>
            </div>
        )}
        


        </div>

        <div className="row ">

            <div className="col-12 day-box day-box3">
                <span>Tuesday </span>
                <label className="switch">
                    <input type="checkbox"  checked={tuesdayState.status} onClick={()=> updateTuesday(!(tuesdayState.status), tuesdayState.openTime, tuesdayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>

            </div>

            {tuesdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box3">
                    <div className="row">
                    <div className="col-5">
                        <input type="time" className="form-control" name="tuesday_from" placeholder="7:00 AM"  onChange={(e)=> updateTuesday(tuesdayState.status, e.target.value, tuesdayState.closeTime )}/>
                    </div>
                    <div className="col-2 text-center to-text">
                        To
                    </div>
                    <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="tuesday_to" placeholder="10:30 PM"
                        value={tuesdayToValue}
                        
                        onChange={(e) => handleTimeChange(tuesdayState, e.target.value, false, setTuesdayToValue)}/>
                       
                    </div>
                    </div>
                </div>
                </div>
            )}

            


        </div>

        <div className="row">

            <div className="col-12 day-box day-box4">
                <span>Wednesday </span>
                <label className="switch">
                    <input type="checkbox" checked={wednesdayState.status} onClick={()=> updateWednesday(!(wednesdayState.status), wednesdayState.openTime, wednesdayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>

            
            </div>

            {wednesdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box4">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="wednesday_from" placeholder="7:00 AM"  onChange={(e)=> updateWednesday(wednesdayState.status, e.target.value, wednesdayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                            To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="wednesday_to" placeholder="10:30 PM"  
                            value={wednesdayToValue}
                            onChange={(e) => handleTimeChange(wednesdayState, e.target.value, false, setWednesdayToValue)}

                            />
                        </div>
                    </div>
                </div>
            </div>
            )}
            


        </div>

        <div className="row ">
            <div className="col-12 day-box day-box5">
                <span>Thursday </span>
                <label className="switch">
                    <input type="checkbox" checked={thursdayState.status} onClick={()=> updateThursday(!(thursdayState.status), thursdayState.openTime, thursdayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>
            </div>

            {thursdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box5">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="thursday_from" placeholder="7:00 AM"  onChange={(e)=> updateThursday(thursdayState.status, e.target.value, thursdayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                            To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="thursday_to" placeholder="10:30 PM"  
                            onChange={(e)=> updateThursday(thursdayState.status, thursdayState.openTime, e.target.value )}/>
                        </div>
                    </div>
                </div>
            </div>
            )}

            
        </div>

        <div className="row ">

            <div className="col-12 day-box day-box6">
                <span>Friday </span>
                <label className="switch">
                    <input type="checkbox"  checked={fridayState.status} onClick={()=> updateFriday(!(fridayState.status), fridayState.openTime, fridayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>
            </div>


            {fridayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box6">
                    <div className="row">
                    <div className="col-5">
                        <input type="time" className="form-control" name="friday_from" placeholder="7:00 AM"  onChange={(e)=> updateFriday(fridayState.status, e.target.value, fridayState.closeTime )}/>
                    </div>
                    <div className="col-2 text-center to-text">
                        To
                    </div>
                    <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="friday_to" placeholder="10:30 PM" 
                        value={fridayToValue}
                         onChange={(e) => handleTimeChange(fridayState, e.target.value, false, setFridayToValue)}
                         />
                    </div>
                    </div>
                </div>
            </div>
            )}

            
        </div>

        <div className="row">

            <div className="col-12 day-box day-box7">
                <span>Saturday

                </span>
                <label className="switch">
                    <input type="checkbox"  checked={saturdayState.status} onClick={()=> updateSaturday(!(saturdayState.status), saturdayState.openTime, saturdayState.closeTime)}/>
                    <span className="slider round"></span>
                </label>
            </div>


            {saturdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box7">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="saturday_from" placeholder="7:00 AM"  onChange={(e)=> updateSaturday(saturdayState.status, e.target.value, saturdayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                            To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="saturday_to" placeholder="10:30 PM"
                            value={saturdayToValue}
                            onChange={(e) => handleTimeChange(saturdayState, e.target.value, false, setSaturdayToValue)}

                            />
                        </div>
                    </div>
                </div>
            </div>
            )}

            
        </div> 
      </div>
    </div>
    </>
  )
}
