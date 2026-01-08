
export default function Main({ person, educations, experiences, skills, divRef, handleDeleteExperience, handleDeleteEducation, handleDeleteSkill, style}){
       
    return(
        <main className="mainSect" id="cv" ref={divRef} style={{fontFamily: style.fontFamily}}>
            <section className="personDetailsMain" style={{backgroundColor: style.color}}>
                {person.photo && (
                    <img src={person.photo} className="personPhoto" />
                    )}
                <div className="fullName">
                    <h2 className="firstNameMain">{person.firstName}</h2>
                    <h2 className="lastNameMain">{person.lastName}</h2>
                </div>
                <h5>{person.position}</h5>
                <h3>Personal Details</h3>
                <div className="lineMain"></div>
                <div className="personDataMain">
                    <h4 className="emailMain">{person.email}</h4>
                    <h4 className="phoneMain">{person.phone}</h4>
                    <h4 className="linkMain">{person.link}</h4>
                </div>
                <h3>Skills</h3>
                <div className="lineMain"></div>
                    <ul>
                        {skills.map((skill, index) => (
                            
                            <li key={index}>{skill} <button className="deleteSkill" onClick={() => handleDeleteSkill(index)}>x</button></li>
                        ))}
                    </ul>
            </section>
            <section className="personInfo" style={{color: style.color}}>
                <div className="allSections">
                    <h2 className="profile">Profile</h2>
                    <div className="line"></div>
                    <p className="profileInfo">{person.summary}</p>
                    <h2>Experience</h2>
                    <div className="line"></div>
                    <div className="allExperience">
                        {experiences.map((work, index) => (
                            <div className="workBox" key={index}>
                            <p className="positionName">{work.positionName}</p>
                            <button className="delete" onClick={() => handleDeleteExperience(index)}>x</button>
                            <div className="smallerDetails">
                                <p className="companyName">{work.companyName}</p>
                                <p className="workDate"> {work.start}-{work.end || "now"}</p>
                            </div>
                                <p className="workDescription">{work.description}</p>
                        </div>
                        ))}
                    </div>
                    <h2>Education</h2>
                    <div className="line"></div>
                    <div className="allEducation">
                        {educations.map((edu, index) => (
                            <div className="EducationBox" key={index}>
                            <p className="SchoolName">{edu.school}</p>
                            <button className="delete" onClick={() => handleDeleteEducation(index)}>x</button>
                            <div className="smallerDetailsEducation">
                                <p className="schoolCity">{edu.city}</p>
                                <p className="workDate">
                                {edu.start} – {edu.end}
                                </p>
                            </div>
                            </div>
                        ))}
                        </div>
                </div>
            </section>


        </main>
        
    )
}