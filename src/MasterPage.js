import { useRef, useState } from "react";

import Backgound from "./components/Backgound";

import FirstSection from "./subsections/FirstSection";
import SecondSection from "./subsections/SecondSection";
import ThirdSection from "./subsections/ThirdSection";
import FourthSection from "./subsections/FourthSection";

import Footer from "./components/Footer";

const MasterPage = () => {
   const scrollRef = useRef(null);
   const selectRef = useRef(null);
   const [selected, setSelected] = useState(null);

   return (
      <>
         <Backgound></Backgound>
         <FirstSection scrollRef={scrollRef}></FirstSection>
         <SecondSection></SecondSection>
         <ThirdSection
            scrollRef={scrollRef}
            selectRef={selectRef}
            setSelected={setSelected}
         ></ThirdSection>
         <FourthSection
            selectRef={selectRef}
            selected={selected}
         ></FourthSection>
         <Footer></Footer>
      </>
   );
};

export default MasterPage;
