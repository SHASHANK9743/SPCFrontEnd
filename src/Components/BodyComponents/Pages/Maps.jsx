import React from 'react'
import '../../../Assets/Styles/map.css'

const zoomLevel = 17
export default function Maps({ zoomLevel}) {
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
      
      return (
         <>
            <div class="map">
			 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5210410085806!2d81.8371669150147!3d25.45427158377733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4b0bee90c3%3A0x9f76ba0c09fe3476!2sSANJAI+PANDEY+CLASSES+PVT.+LTD.!5e0!3m2!1sen!2sin!4v1553846245370!5m2!1sen!2sin" style={{marginLeft:'5rem', width:'70rem', height:'25rem'}}allowfullscreen></iframe>
		    </div>
         </>
      )
}


