import img1SecondSection from "./img/img1-secondsection.jpg";
import img2SecondSection from "./img/img2-secondsection.jpg";

import Backgound from "./components/Backgound";

import FirstSection from "./subsections/FirstSection";
import SecondSection from "./subsections/SecondSection";

const MasterPage = () => {
   return (
      <>
         <Backgound></Backgound>
         <FirstSection></FirstSection>
         <SecondSection></SecondSection>
      </>
   );
};

export default MasterPage;
