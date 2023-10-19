import React,{useState} from 'react';

export default function HashtagRow({ label , sethashtags , hashtags }) {

  // State to manage the switch's value
  const [isTextareaActive, setTextareaActive] = useState(false);

  // Function to toggle the switch
  const toggleSwitch = (status) => {
    setTextareaActive(status);
    sethashtags("")
  };



  return (
    <div className="row hastag-row">
      <div className="col-3">
        <div className="input-box">
          <label htmlFor=" " className="label_text">{label}</label>
        </div>
      </div>
      <div className="col-7">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="#hashtag" onChange={(e)=>sethashtags(e.target.value)} style={{backgrond:'#f7f7f7 !important'}} disabled={!isTextareaActive} value={hashtags}></textarea>
      </div>
      <div className="col-2 switch-row">
        <label className="switch" style={{width:'37px'}}>
          <input type="checkbox" id="switchButton" checked={isTextareaActive} onChange={()=>toggleSwitch(!isTextareaActive)}/>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
