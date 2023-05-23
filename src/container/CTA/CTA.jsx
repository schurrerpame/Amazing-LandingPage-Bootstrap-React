import React from 'react';
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Let’s make things happen</h3>

<p className="pt-2 pb-4">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
<buton className="btn-positivus">Get your free proposal</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA