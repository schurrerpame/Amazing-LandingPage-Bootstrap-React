import React from 'react'
import { Headings } from '../../components';
import './Contact.css';
const Contact = () => {
  return (
    <div classNameName="section-padding">
      <Headings title="Contact Us" text="Connect with Us: Let's  Discuss Your Digital Marketing Needs" />

      <div className="contact" id="quote">

        <div className="row">
          <div className="col-md-6 col-12">
            <form>
              <div class="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Say Hi</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Get a Quote</label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input className="form-control" type="email" placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">    Message*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn-positivus w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact