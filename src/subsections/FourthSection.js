import "./subsection.scss";

const FourthSection = ({ selectRef, selected }) => {
   const getName = () => {
      const name = document.getElementById("input-name").value;
      console.log(name);
      document.getElementById("name").innerText = name;
   };
   return (
      <>
         <div className={selected === null ? "d-none" : "subsection"}>
            <div ref={selectRef} className="fourth-subsection">
               <div className="section4-1">
                  <label>Hi Max,</label>
                  <div>
                     <label>
                        ich heiße
                        <textarea
                           rows={1}
                           id="input-name"
                           onChange={() => getName()}
                        ></textarea>
                        und bin momentan
                        <select id="status">
                           <option value="1">Schüler</option>
                           <option value="2">Student</option>
                           <option value="3">Berufstätig</option>
                           <option value="3">Rentner</option>
                        </select>
                     </label>
                  </div>
                  <div>
                     <label>
                        Durch
                        <select id="werb">
                           <option value="1">einen Kollegen / Freund</option>
                           <option value="2">einen Zeitungsartikel</option>
                           <option value="3">QR-Code</option>
                           <option value="3">Zufall</option>
                        </select>
                        bin ich auf dich aufmerksam geworden und möchte nun von
                        deiner Erfahrung und deinem Können profitieren!
                     </label>
                  </div>
                  <div>
                     {selected === "first" ? (
                        <label>
                           Für den Einstieg habe ich mich für einen
                           Trainingsplan entschieden und freue mich auf eine
                           Zusammenarbeit mit dir.
                        </label>
                     ) : (
                        <></>
                     )}
                     {selected === "second" ? (
                        <label>
                           Mein Training habe ich im Griff nur mit der Erährung
                           läuft es noch nicht so reibungslos. Deshalb würde ich
                           mich freuen, wenn du deine Erfahrung rund um Erährung
                           mit mir teilen würdest.
                        </label>
                     ) : (
                        <></>
                     )}
                     {selected === "third" ? (
                        <label>
                           Ich würde gerne von dir 8 Wochen lang im Thema
                           Ernährung und Training begleitet werden und eine
                           Fortschritte und Schwierigkeiten regelmäßig mir dir
                           besprechen.
                        </label>
                     ) : (
                        <></>
                     )}
                  </div>
                  <div>
                     <label>Viele Grüße</label>
                  </div>
                  <div>
                     <label id="name"></label>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default FourthSection;
