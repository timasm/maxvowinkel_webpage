import "./subsection.scss";

import icon from "../img/icon.png";

const FirstSection = ({ scrollRef }) => {
   const executeScroll = () => scrollRef.current.scrollIntoView();
   return (
      <>
         <div className="subsection">
            <div className="first-subsection">
               <div className="section1-1">
                  <label>
                     <img src={icon} alt={"icon"} />
                     Max Vowinkel
                  </label>
               </div>
               <div className="section1-2">
                  <label>
                     <i>
                        BE YOUR <b>BEST</b>
                     </i>
                  </label>
                  <button onClick={() => executeScroll()}>
                     STARTE NOCH HEUTE
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default FirstSection;
