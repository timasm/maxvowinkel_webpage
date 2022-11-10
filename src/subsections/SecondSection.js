import "./subsection.scss";

import img1 from "../img/img1-secondsection.jpg";
import img2 from "../img/img2-secondsection.jpg";

const SecondSection = () => {
   return (
      <>
         <div className="subsection">
            <div className="second-subsection">
               <div className="section2-1">
                  <label className="label-topic">DAS ERWARTET DICH</label>
                  <label className="label-content">
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore
                     magna aliquyam erat, sed diam voluptua. At vero eos et
                     accusam et justo duo dolores et ea rebum. Stet clita kasd
                     gubergren, no sea takimata sanctus est Lorem ipsum dolor
                     sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                     elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                     dolore magna aliquyam erat.
                  </label>
               </div>
               <div className="section2-2">
                  <img src={img1} alt={"img1"} />
               </div>
               <div className="section2-3">
                  <img src={img2} alt={"img2"} />
               </div>
            </div>
         </div>
      </>
   );
};

export default SecondSection;
