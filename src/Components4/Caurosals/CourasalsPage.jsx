import Carousel from 'react-multi-carousel';
import CourasalCard from './CourasalCard';
import "react-multi-carousel/lib/styles.css";

export default function CaurosalsPage() {
   const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    return (
        <div style={{width:"90%",margin:"auto"}} >
            <Carousel  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}    responsive={responsive} containerClass="carousel-container"  showDots={true}   autoPlaySpeed={2000} draggable={false} transitionDuration={500} autoPlay={true}  infinite={true} >
              <CourasalCard imgsrc="https://q-xx.bstatic.com/xdata/images/hotel/max500/125011658.jpg?k=06790aee6167eb59636d03f1c6d6b00daab6ec980b6a4ea6c3e06c020566888a&o=" />
                  
                <CourasalCard imgsrc="https://q-xx.bstatic.com/xdata/images/hotel/max500/125011658.jpg?k=06790aee6167eb59636d03f1c6d6b00daab6ec980b6a4ea6c3e06c020566888a&o=" />

                {/* <CourasalCard imgsrc="TajSantacruz.png" />  */}
                <CourasalCard imgsrc="https://www.google.com/maps/d/thumbnail?mid=1Y1mkLicxfgJhXsyIifpbXxPTzzI" />
                
            
                <CourasalCard imgsrc="https://q-xx.bstatic.com/xdata/images/hotel/max500/125011716.jpg?k=17c24ee460f85a052f11574a24aed32590fe932c3c24018247c853002512d7db&o=" />
                
           
        <CourasalCard imgsrc="https://q-xx.bstatic.com/xdata/images/hotel/max500/259560400.jpg?k=2f43123696b4d1242bbc3c606363a7709453176c0cb296584081b6b409e2ce01&o=" />

            </Carousel>

            
        </div>
    )
}