import React from 'react'

export default function BusinessMap() {
  return (
    <>
      <div className="col-md-12 Business_Information_map_section">
      <div className="Business_Information_map">
        <div className="form-group">
          <i className="fas fa-search search__icon" id="search-icon"></i>
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type your business name"
          />
        </div>
      </div>

      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.82142629925042!2d55.16932393261314!3d25.09702630206584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bf4e058c015%3A0xc376b766e159d8ae!2sKaffe%20Bloom!5e0!3m2!1sen!2sin!4v1676970918910!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="connect-g-bussi text-center">
        <div className=" btn btn-primary conn-g-bussi-btn" >
          Connect Google Business Account
        </div>
      </div>
    </div>

    </>
  )
}
