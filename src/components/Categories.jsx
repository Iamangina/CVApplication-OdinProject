import { useState } from "react";

export default function Categories({ 
    person,
    setPerson,
    educations,
    setEducations,
    experiences, 
    setExperiences,
    skills, 
    setSkills
    }){

    const [eduForm, setEduForm] = useState({
        school: "",
        city: "",
        start: "",
        end: ""
    });

    const [workForm, setWorkForm] = useState({
        companyName: "",
        positionName: "",
        start: "",
        end: "",
        description: ""
    })

    const [skillForm, setSkillForm] = useState("");

    return(
        <section className="categorySect">
            
                <div className="personalDetails">
                   <h2>Personal Details</h2>
                   <div className="personData">
                        <div className="person">
                            <div>
                                <label htmlFor="photo" className="inputFile">Photo</label>
                                <input type="file" id="photo" 
                                    onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                    setPerson({ ...person, photo: reader.result });
                                    };
                                    reader.readAsDataURL(file);
                                }}></input>
                            </div>
                            <div>
                                <label htmlFor="name">First Name</label>
                                <input 
                                    id="name"
                                    type="text"
                                    placeholder="First name"
                                    value={person.firstName}
                                    onChange={(e) =>
                                    setPerson({ ...person, firstName: e.target.value })
                                    }></input>
                            </div>
                            <div>
                                <label htmlFor="lastname">Last Name</label>
                                <input 
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    value={person.lastName}
                                    onChange={(e) =>
                                    setPerson({ ...person, lastName: e.target.value })
                                    }></input>
                            </div>
                        </div>
                        <div className="contact">
                            <div>
                                <label htmlFor="email">Email address</label>
                                <input 
                                    id="email"
                                    type="email"
                                    placeholder="Email@email.com"
                                    value={person.email}
                                    onChange={(e) =>
                                    setPerson({ ...person, email: e.target.value })
                                    }></input>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    id="phone"
                                    type="number"
                                    placeholder="123-456-789"
                                    value={person.phone}
                                    onChange={(e) =>
                                    setPerson({ ...person, phone: e.target.value })
                                    }></input>
                            </div>
                        </div>
                        <div className="rest">
                            <div> 
                                <label htmlFor="summary">Summary</label>
                                <textarea id="summary"
                                    value={person.summary}
                                    onChange={(e) =>
                                    setPerson({ ...person, summary: e.target.value })
                                    }></textarea>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="position">Desired job position</label>
                                    <input 
                                        id="position"
                                        type="text"
                                        placeholder="Front-end developer"
                                        value={person.position}
                                        onChange={(e) =>
                                        setPerson({ ...person, position: e.target.value })
                                        }></input>
                                </div>
                                <div>
                                    <label htmlFor="birthday">Date of birth</label>
                                    <input 
                                        id="birthday"
                                        type="date"
                                        placeholder="01.01.98"
                                        value={person.birthDate}
                                        onChange={(e) =>
                                        setPerson({ ...person, birthDate: e.target.value })
                                        }></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education">
                    <h2>Education</h2>
                    <div className="educationData">
                        <div className="schoolData">
                            <div>
                                <label htmlFor="school">School</label>
                                <input 
                                    type="text"
                                    id="school"
                                    value={eduForm.school}
                                    onChange={(e) =>
                                        setEduForm({ ...eduForm, school: e.target.value })
                                    }>
                                    </input>
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input 
                                    type="text"
                                    id="city"
                                    value={eduForm.city}
                                    onChange={(e) =>
                                        setEduForm({ ...eduForm, city: e.target.value })
                                    }>
                                    </input>
                            </div>
                        </div>
                        <div className="date">
                            <div>
                                <label htmlFor="month">Start date</label>
                                <div>
                                    <input 
                                        type="month"
                                        id="month"
                                        value={eduForm.start}
                                        onChange={(e) =>
                                            setEduForm({ ...eduForm, start: e.target.value })
                                        }>
                                    </input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="monthEnd">End date</label>
                                <div>
                                    <input 
                                        type="month"
                                        id="monthEnd"
                                        value={eduForm.end}
                                        onChange={(e) =>
                                            setEduForm({ ...eduForm, end: e.target.value })
                                        }>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="addEducation"
                        onClick={() => {
                            setEducations([...educations, eduForm]);
                            setEduForm({ school: "", city: "", start: "", end: "" });
                        }}
                        >ADD</button>
                </div>

                <div className="experience">
                    <h2>Experience</h2>
                    <div className="experienceData">
                        <div className="companyData">
                            <div>
                                <label htmlFor="employer">Employer</label>
                                <input 
                                    type="text"
                                    id="employer"
                                    value={workForm.companyName}
                                    onChange={(e) =>
                                        setWorkForm({ ...workForm, companyName: e.target.value })
                                    }>
                                </input>
                            </div>
                            <div>
                                <label htmlFor="position">Position</label>
                                <input 
                                    type="text"
                                    id="position"
                                    value={workForm.positionName}
                                    onChange={(e) =>
                                        setWorkForm({ ...workForm, positionName: e.target.value })
                                    }>
                                </input>
                            </div>
                        </div>
                        <div className="dateJob">
                            <div>
                                <label htmlFor="monthJob">Start date</label>
                                <div>
                                    <input 
                                        type="month"
                                        id="monthJob"
                                        value={workForm.start}
                                        onChange={(e) =>
                                            setWorkForm({ ...workForm, start: e.target.value })
                                        }>
                                    </input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="monthEndJob">End date</label>
                                <div>
                                    <input 
                                        type="month"
                                        id="monthEndJob"
                                        value={workForm.end}
                                        onChange={(e) =>
                                            setWorkForm({ ...workForm, end: e.target.value })
                                        }>
                                    </input>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="description">Description</label>
                        <textarea 
                            id="description"
                            value={workForm.description}
                            onChange={(e) =>
                                    setWorkForm({ ...workForm, description: e.target.value })
                            }>
                        </textarea>
                    </div>
                    <button className="addExperience" 
                        onClick={() => {
                            setExperiences([...experiences, workForm]);
                            setWorkForm({ companyName: "", positionName: "", start: "", end: "", description: "" });
                        }}
                    >ADD</button>
                </div>

                <div className="skills">
                    <h2>Skills</h2>
                    <div className="skill">
                        <div>
                            <label htmlFor="skill">Skill</label>
                            <input
                                id="skill"
                                type="text"
                                value={skillForm}
                                onChange={(e) => setSkillForm(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <button className="addSkill"
                        onClick={() => {
                            setSkills([...skills, skillForm]);
                            setSkillForm("");
                        }}
                        >
                        ADD
                        </button>
                </div>
                
        </section>
    )
}