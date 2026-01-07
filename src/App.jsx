import Categories from './components/Categories'
import Main from './components/Main'
import Header from './components/Header'
import { useState, useRef } from 'react';
import html2pdf from "html2pdf.js";


function App() {
  const divRef = useRef(null);

   const handleDownloadPdf = () => {
  if (!divRef.current) return;

  html2pdf()
    .set({
      margin: 10,
      filename: "cv.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    })
    .from(divRef.current)
    .save();
};

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    photo: null,
    position: "",
    summary: ""
  });

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <>
      <Header onDownload={handleDownloadPdf} />
      <Categories 
        person={person}
        setPerson={setPerson}
        educations={educations}
        setEducations={setEducations}
        experiences={experiences}
        setExperiences={setExperiences}
        skills={skills}
        setSkills={setSkills}/>
      <Main 
        divRef={divRef}
        person={person}
        educations={educations}
        experiences={experiences}
        skills={skills}/>

    </>
  )
}

export default App
