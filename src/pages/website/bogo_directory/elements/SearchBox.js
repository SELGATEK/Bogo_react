import React from 'react'

export default function SearchBox() {
  return (
    <>
      {/* <!-- Search box --> */}
      <div className="row">
            <div className="col-12">
              <div className="searchBox_row">
                <form action="" className="searchBox">
                  <div className="input-group">
                    <div className="input-group-append">
                      <button className="btn " type="button">
                        <img src="/images/search.png" alt="" className="img-fluid" />
                      </button>
                    </div>
                    <input type="text" className="form-control search_input" placeholder="Search Venue" />

                  </div>
                </form>
              </div>
            </div>
          </div>  
    </>
  )
}
