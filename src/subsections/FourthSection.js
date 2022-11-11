import "./subsection.scss";

const FourthSection = ({ selectRef, selected }) => {
   const getChanges = () => {
      const name = document.getElementById("input-name").value;
      const email = document.getElementById("input-email").value;
      const status = document.getElementById("status");
      const statusValue = status.options[status.selectedIndex].text;
      //const found = document.getElementById("found").value;
      //const foundValue = found.options[found.selectedIndex].text;

      document.getElementById("name").innerText = name;
      var choose = "";
      switch (selected) {
         case "first":
            choose = "Trainigsplan";
            break;
         case "second":
            choose = "Ernährungsplan";
            break;
         default:
            choose = "Trainigsplan + Ernährungsplan + Online-Choaching";
      }
      document.getElementById("send-name").value = name;
      const message = `
         Email: ${email}, Status: ${statusValue}, Ausgewaehlt: ${choose}
      `;
      document.getElementById("send-message").innerText = message;
   };
   return (
      <>
         <div className={selected === null ? "d-none" : "subsection"}>
            <form
               action="https://max-vowinkel.tim-assmann.com/send_mail.php"
               method="POST"
            >
               <div className="d-none">
                  <input name="name" id="send-name" />
                  <textarea name="message" id="send-message"></textarea>
               </div>
               <div ref={selectRef} className="fourth-subsection">
                  <div className="section4-1">
                     <label>Hi Max,</label>
                     <div>
                        <label>
                           ich heiße
                           <textarea
                              rows={1}
                              id="input-name"
                              onChange={() => getChanges()}
                           ></textarea>
                           und bin momentan
                           <select id="status" onChange={() => getChanges()}>
                              <option value="1">Schüler</option>
                              <option value="2">Student</option>
                              <option value="3">Berufstätig</option>
                              <option value="4">Rentner</option>
                           </select>
                           . Meine Email Adresse:
                           <textarea
                              rows={1}
                              id="input-email"
                              onChange={() => getChanges()}
                           ></textarea>
                        </label>
                     </div>
                     <div>
                        <label>
                           Durch
                           <select id="found">
                              <option value="1">einen Kollegen / Freund</option>
                              <option value="2">einen Zeitungsartikel</option>
                              <option value="3">QR-Code</option>
                              <option value="4">Zufall</option>
                           </select>
                           bin ich auf dich aufmerksam geworden und möchte nun
                           von deiner Erfahrung und deinem Können profitieren!
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
                              Mein Training habe ich im Griff nur mit der
                              Erährung läuft es noch nicht so reibungslos.
                              Deshalb würde ich mich freuen, wenn du deine
                              Erfahrung rund um Erährung mit mir teilen würdest.
                           </label>
                        ) : (
                           <></>
                        )}
                        {selected === "third" ? (
                           <label>
                              Ich würde gerne von dir 8 Wochen lang im Thema
                              Ernährung und Training begleitet werden und eine
                              Fortschritte und Schwierigkeiten regelmäßig mir
                              dir besprechen.
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
                  <div className="section4-2">
                     <button type="submit">Absenden</button>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default FourthSection;
