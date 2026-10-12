import React from 'react'
import iso from '.././assets/About/iso.png'
import '.././css/aboutiso.css'

function Aboutiso() {
  return (
<>

<div className='aboutiso-container'>
    <div className='aboutiso'>
        <div className='aboutiso-left-image'>
            <div className='iso-image'>
                <img 
                src={iso}
                alt='iso-certificate' />
            </div>
        </div>
        <div className='aboutiso-right-text'>
            <h2>
            ISO 9001:2015 Certified Quality Management
            </h2>
            <p>
            We are proud to announce that Skytech International Facilities Management LLC - SPC has been officially awarded the ISO 9001:2015 certification for our Quality Management System. This globally recognized certification highlights our commitment to delivering exceptional services that meet international quality standards. 
            </p>
            <h3>
            Why ISO Certification Matters
            </h3>
            <p>
            Being ISO 9001:2015 certified assures our clients and partners that:
            </p>
            <ul>
                <li>
                Our processes adhere to rigorous quality standards.
                </li>
                <li>
                We are committed to maintaining customer satisfaction.
                </li>
                <li>
                We strive for operational efficiency and service excellence.
                </li>
            </ul>
        </div>
    </div>
</div>

</>
  )
}

export default Aboutiso