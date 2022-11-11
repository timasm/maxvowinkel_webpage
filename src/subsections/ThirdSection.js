import "./subsection.scss";

const ThirdSection = ({ scrollRef, selectRef, setSelected }) => {
   const scrollToMail = () => selectRef.current.scrollIntoView();
   return (
      <>
         <div className="subsection">
            <div ref={scrollRef} className="third-subsection">
               <div className="section3-1">
                  <label>Angebot</label>
               </div>
               <div className="section3-2">
                  <div
                     className="first-img"
                     onClick={() => {
                        setSelected("first");
                        scrollToMail();
                     }}
                  >
                     <label>
                        <i>TRAININGSPLAN</i>
                     </label>
                     <p>50€</p>
                  </div>
                  <div
                     className="second-img"
                     onClick={() => {
                        setSelected("second");
                        scrollToMail();
                     }}
                  >
                     <label>
                        <i>ERNÄHRUNGSPLAN</i>
                     </label>
                     <p>80€</p>
                  </div>
                  <div
                     className="third-img"
                     onClick={() => {
                        setSelected("third");
                        scrollToMail();
                     }}
                  >
                     <label>
                        <i>TRAININGSPLAN</i>
                     </label>
                     <label>+</label>
                     <label>
                        <i>ERNÄHRUNGSPLAN</i>
                     </label>
                     <label>+</label>
                     <label>
                        <i>ONLINE-COACHING</i>
                     </label>
                     <p>200€</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ThirdSection;
