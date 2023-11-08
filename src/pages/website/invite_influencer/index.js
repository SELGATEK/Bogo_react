import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import Header and Footer
import Header1 from '../../../partials/header/Header1';
import Footer from '../../../partials/footer/Footer';


// Import components
import InviteCardAppliedComponent from './elements/Invite_cardApplied_component';
import InviteCardInviteComponent from './elements/Invite_cardInvite_component';
import InviteInfluencerHeader from './elements/Invite_influencer_header';
import { INFLUENCER_LIST, INVITE_INFLUENCER } from '../../../redux/slices/influencerSlice';
import { useDispatch, useSelector } from 'react-redux';





// tabs
function Invite_influencer() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [searchTxt, setsearchTxt] = useState('');
   const dispatch = useDispatch()
  const influencerList = useSelector((state) => state.influencer.influencer);
 
useEffect(() => {
  dispatch(INFLUENCER_LIST(""));     
}, []);

  const buttonOption = (id) => {
    setSelectedTab(id);
  }


  const invitationInfluncer =(id)=>{
    const obj ={campaignId:localStorage.getItem('activeCampaing') , userId:id}
    dispatch(INVITE_INFLUENCER(obj))
  }

  const searchInfluencer=(name)=>{
    setsearchTxt(name)
    dispatch(INFLUENCER_LIST(name)); 
  }

  return (
    <>
      <Header1 />
      <InviteInfluencerHeader />

      <div className="campaing-body-section influencers_body_section">
        <div className="container">
          {/* <!-- tab section --> */}
          <div className="influencers_section">
            <div className="tabs-row">
              <ul id="tabs-nav">
                <li
                  className={
                    selectedTab === 1
                      ? "offer-box influencer_tab  active"
                      : "offer-box influencer_tab "
                  }
                  
                  onClick={() => buttonOption(1)}
                >
                  <Link to="">
                    <h3>Applied</h3>
                  </Link>
                </li>
                <li
                  className={
                    selectedTab === 2
                      ? "offer-box influencer_tab aos-init aos-animate active"
                      : "offer-box influencer_tab aos-init aos-animate"
                  }
                  
                  onClick={() => buttonOption(2)}
                >
                  <Link to="">
                    <h3>Invite Influencers</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="filter_influencer">
            <div className="row">
              <ul>
                <li className="serarch_inflencer">  
                <form action="" className="searchBox">
                  <div className="input-group">
                      <div className="input-group-append">
                        <button className="btn " type="button">
                          <img src="/images/search.png" alt="" className="img-fluid" />
                        </button>
                      </div>
                      <input type="text" className="form-control search_input" value={searchTxt} placeholder="Search" onChange={(e)=>searchInfluencer(e.target.value)}/>
                    </div> 
                    </form>
                </li>
              </ul>
            </div>
          </div>

         
          {/* {selectedTab === 1 ? (
            <div className="offer_form_section1 tab-content" id="tab1" >
              <div className="row">
                <div className="col-md-6">
                  <InviteCardAppliedComponent influencerList={influencerList} />
                </div>
                <div className="col-md-6">
                  <InviteCardAppliedComponent />
                </div>
              </div>
            </div>
          ) : null}

          
          {selectedTab === 2 ? (
            <div className="offer_form_section1 tab-content" id="tab2" >
              <div className="row"> 
                  <InviteCardInviteComponent influencerList={influencerList} invitationInfluncer={invitationInfluncer} />
                
              </div>
            </div>
          ) : null} */}


          {selectedTab === 1 ? (
            


            <div className="offer_form_section1 tab-content" id="tab2" >
              <div className="row"> 
                  <InviteCardInviteComponent influencerList={influencerList} invitationInfluncer={invitationInfluncer} />
                
              </div>
            </div>
          ) : null}

          
          {selectedTab === 2 ? (
            <div className="offer_form_section1 tab-content" id="tab1" >
              <div className="row">
                <div className="col-md-6">
                  <InviteCardAppliedComponent influencerList={influencerList} />
                </div>
                <div className="col-md-6">
                  <InviteCardAppliedComponent />
                </div>
              </div>
            </div>
          ) : null}

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Invite_influencer;
