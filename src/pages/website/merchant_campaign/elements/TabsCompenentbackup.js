import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import InputBoxComponent from '../../../../components/CommonComponent/InputBoxComponent.js';
import ComparerOffer from './tabcomponents/CompareOffer.js';
import DaysInput from './tabcomponents/DaysInput.js';
import ExcludeWeekends from './tabcomponents/ExcludeWeekends';
import Weekends from './tabcomponents/Weekends.js';
import ExcludePublicHolidays from './tabcomponents/ExcludePublicHolidays';
import TextAreaLabel from '../../../../components/CommonComponent/TextAreaLabel';

export default function TabsComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [daysSelection, setDaysSelection] = useState({
    all: false,
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    Thursday: false,
    friday: false,
    saturday: false,
  });

  const handleDayChange = (day) => {
    if (day === 'all') {
      if (!daysSelection.all) {
        setDaysSelection({
          all: true,
          sunday: true,
          monday: true,
          tuesday: true,
          wednesday: true,
          Thursday: true,
          friday: true,
          saturday: true,
        });
      } else {
        setDaysSelection({
          all: false,
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          Thursday: false,
          friday: false,
          saturday: false,
        });
      }
    } else {
      setDaysSelection((prevSelection) => ({
        ...prevSelection,
        [day]: !prevSelection[day],
        all: false,
      }));
    }
  };

  const days = [
    { day: 'all', label: 'All' },
    { day: 'sunday', label: 'Sun' },
    { day: 'monday', label: 'Mon' },
    { day: 'tuesday', label: 'Tue' },
    { day: 'wednesday', label: 'Wed' },
    { day: 'Thursday', label: 'Thu' },
    { day: 'friday', label: 'Fri' },
    { day: 'saturday', label: 'Sat' },
  ];

  const [selectedTab, setSelectedTab] = useState(1);

  const buttonOption = (id) => {
    setSelectedTab(id);
  };

  const colourOptions = [
    { value: 'Marina', label: 'Marina' },
    { value: 'Dhubai', label: 'Dhubai' },
    { value: 'Marina1', label: 'Marina1' },
  ];

  const MyComponent = () => (
    <Select
      closeMenuOnSelect={false}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
      styles={{
        control: (provided) => ({
          ...provided,
          minHeight: '40px !important',
          backgroundColor: '#f7f7f7',
          border: 'none',
        }),
      }}
    />
  );

  return (
    <div>
      <div className="offer-type">
        <ul id="tabs-nav">
          {[1, 2, 3].map((tabId) => (
            <li
              key={tabId}
              className={`offer-box ${selectedTab === tabId ? 'activebox' : ''}`}
              onClick={() => buttonOption(tabId)}
            >
              <a href={`#tab${tabId}`}>
                <h3>Tab {tabId}</h3>
              </a>
            </li>
          ))}
        </ul>

        {selectedTab === 1 && (
          <div className="">
            <ComparerOffer />
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
              <div className="offer_form_section1">
                <form method="" action="" className=" offer_input_box offer_input_box1">
                  <InputBoxComponent
                    label="What should they buy?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="Example: Sushi Platter"
                  />

                  <InputBoxComponent
                    label="What will they get?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="AED"
                  />

                  <InputBoxComponent
                    label="Estimated Savings?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="AED"
                  />

                  <div className="row">
                    <div className="col-12">
                      <div className="input-box">
                        <label htmlFor=" " className="label_text">
                          Select Branch
                        </label>
                        <MyComponent />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="days-input-row">
                      <label>Day of the week</label>
                      <div className="checkbox-container">
                        {days.map(({ day, label }) => (
                          <DaysInput
                            key={day}
                            day={day}
                            id={day}
                            label={label}
                            selected={daysSelection[day]}
                            onChange={handleDayChange}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Weekends />
                  <ExcludePublicHolidays />
                  <ExcludeWeekends />

                  <div className="row">
                    <h4 className="modificatin-notification">
                      Campaign modifications take 24 hours to take effect.
                    </h4>
                  </div>

                  <TextAreaLabel label="Fine Print" placeholder="" rows="5" />

                  <div className="input-box mt-2">
                    <div className="d-flex justify-content-between align-center maxRedemption_group">
                      <label htmlFor="">Maximum redemptions</label>
                      <span style={{ color: "#F1C62E" }}>
                        {" "}
                        <i className="fa-regular fa-gem" style={{ position: "inherit", color: "#F1C62E" }}></i>{" "}
                        Gold Feature
                      </span>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="example:500"
                      className="form-control"
                      required=""
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="row review_submit_btn_row">
                    <div className="next-btn-box review_submit_btn_box tab-pane active">
                      <button type="button" className="btn btn-primary btnNext review_submit_btn">
                        <Link to="/review_campaign">Review and Submit</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 2 && (
          <div className="">
            <ComparerOffer />
            <div className="tab-pane active" id="tabs-2" role="tabpanel">
              <div className="offer_form_section1">
                <form method="" action="" className=" offer_input_box offer_input_box1">
                  {/* Add content for Tab 2 here */}
                  <InputBoxComponent
                    label="What should they buy?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="Example: Sushi Platter"
                  />

                  <InputBoxComponent
                    label="What will they get?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="AED"
                  />

                  <InputBoxComponent
                    label="Estimated Savings?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="AED"
                  />

                  <div className="row">
                    <div className="col-12">
                      <div className="input-box">
                        <label htmlFor=" " className="label_text">
                          Select Branch
                        </label>
                        <MyComponent />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="days-input-row">
                      <label>Day of the week</label>
                      <div className="checkbox-container">
                        {days.map(({ day, label }) => (
                          <DaysInput
                            key={day}
                            day={day}
                            id={day}
                            label={label}
                            selected={daysSelection[day]}
                            onChange={handleDayChange}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Weekends />
                  <ExcludePublicHolidays />
                  <ExcludeWeekends />

                  <div className="row">
                    <h4 className="modificatin-notification">
                      Campaign modifications take 24 hours to take effect.
                    </h4>
                  </div>

                  <TextAreaLabel label="Fine Print" placeholder="" rows="5" />

                  <div className="input-box mt-2">
                    <div className="d-flex justify-content-between align-center maxRedemption_group">
                      <label htmlFor="">Maximum redemptions</label>
                      <span style={{ color: "#F1C62E" }}>
                        {" "}
                        <i className="fa-regular fa-gem" style={{ position: "inherit", color: "#F1C62E" }}></i>{" "}
                        Gold Feature
                      </span>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="example:500"
                      className="form-control"
                      required=""
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="row review_submit_btn_row">
                    <div className="next-btn-box review_submit_btn_box tab-pane active">
                      <button type="button" className="btn btn-primary btnNext review_submit_btn">
                        <Link to="/review_campaign">Review and Submit</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 3 && (
          <div className="">
            <ComparerOffer />
            <div className="tab-pane active" id="tabs-3" role="tabpanel">
              <div className="offer_form_section1">
                <form method="" action="" className=" offer_input_box offer_input_box1">
                  {/* Add content for Tab 3 here */}
                  <InputBoxComponent
                    label="What should they buy?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="Example: Sushi Platter"
                  />

                  <InputBoxComponent
                    label="What will they get?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="AED"
                  />

                  <InputBoxComponent
                    label="Estimated Savings?"
                    type="text"
                    id=""
                    name=""
                    value=""
                    required="required"
                    placeholder="AED"
                  />

                  <div className="row">
                    <div className="col-12">
                      <div className="input-box">
                        <label htmlFor=" " className="label_text">
                          Select Branch
                        </label>
                        <MyComponent />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="days-input-row">
                      <label>Day of the week</label>
                      <div className="checkbox-container">
                        {days.map(({ day, label }) => (
                          <DaysInput
                            key={day}
                            day={day}
                            id={day}
                            label={label}
                            selected={daysSelection[day]}
                            onChange={handleDayChange}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Weekends />
                  <ExcludePublicHolidays />
                  <ExcludeWeekends />

                  <div className="row">
                    <h4 className="modificatin-notification">
                      Campaign modifications take 24 hours to take effect.
                    </h4>
                  </div>

                  <TextAreaLabel label="Fine Print" placeholder="" rows="5" />

                  <div className="input-box mt-2">
                    <div className="d-flex justify-content-between align-center maxRedemption_group">
                      <label htmlFor="">Maximum redemptions</label>
                      <span style={{ color: "#F1C62E" }}>
                        {" "}
                        <i className="fa-regular fa-gem" style={{ position: "inherit", color: "#F1C62E" }}></i>{" "}
                        Gold Feature
                      </span>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="example:500"
                      className="form-control"
                      required=""
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="row review_submit_btn_row">
                    <div className="next-btn-box review_submit_btn_box tab-pane active">
                      <button type="button" className="btn btn-primary btnNext review_submit_btn">
                        <Link to="/review_campaign">Review and Submit</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
