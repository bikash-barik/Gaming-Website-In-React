import React, { useState } from 'react'
import "../Style/Contactus.css"


const ContactUs = () => {
    
  return (

    // 

    <div>


      <div  class="container w-25  text-center mt-5">
        <h2 className="text-white">Any Query</h2>
        <div class="card p-3">
          <div class="row">
            <div class="col-md-12 text-white">
              <div class="row">
                <div class="col-md-6">
                  {" "}
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control text-white"
                  />{" "}
                </div>
                <div class="col-md-6">
                  {" "}
                  <input
                    type="text"
                    placeholder="Email"
                    class="form-control text-white"
                  />{" "}
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  {" "}
                  <textarea
                    class="form-control textarea text-white"
                    placeholder="Message"
                    rows="4"
                  >
                    {" "}
                  </textarea>{" "}
                </div>
              </div>
              <div class="send-button mt-4">
                {" "}
                <button class="button">Send Message</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs