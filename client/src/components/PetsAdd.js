import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const PetsAdd = (props) => {

    const { allPets, setAllPets } = props;
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petImage, setPetImage] = useState("");
    const [petGender, setPetGender] = useState("");
    const [petAge, setPetAge] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkillOne, setSkillOne] = useState("");
    const [petSkillTwo, setSkillTwo] = useState("");
    const [petSkillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();



    const submitHandler = (e) => {

        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", {
            petName,
            petType,
            petGender,
            petAge,
            petImage,
            petDesc,
            petSkillOne,
            petSkillTwo,
            petSkillThree,
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetName("");
                setPetType("");
                setPetImage("");
                setPetGender("");
                setPetAge("")
                setPetImage("")
                setPetDesc("")
                setSkillOne("")
                setSkillTwo("")
                setSkillThree("")
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    //w6d2 code
    return (
        <div>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>

            <div className="mainContainer">
                <form className="formContainer" onSubmit={submitHandler}>
                    <div
                        style={{ marginTop: "40px", marginBottom: "40px", width: "100%" }}>
                        <h1>Add a Pet for adoption</h1>
                        <p>* required</p>
                        <div className="petsRow">
                            <label htmlFor="Name">Pet&rsquo;s Name*</label>
                            <input type="text" name="Name" onChange={(e) => setPetName(e.target.value)}
                                value={petName}
                            />
                            <div>
                                {
                                    errors.petName ?
                                        <span className="errorMessage">{errors.petName.message}</span>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="petsRow">
                            <label>Pet Type*</label>
                            <select value={petType} name="petType" onChange={(e) => setPetType(e.target.value)} >
                                <option defaultValue hidden>Select a pet type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </select>
                            <div>
                                {
                                    errors.petType ?
                                        <span className="errorMessage">{errors.petType.message}</span>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="petsRow">
                            <label>Pet Image</label>
                            <input value={petImage} onChange={(e) => setPetImage(e.target.value)} type="text" />
                        </div>
                        <div className="petsRow">
                            <label htmlFor="Gender">Pet&rsquo;s Gender</label>
                            <input type="text" name="Gender" onChange={(e) => setPetGender(e.target.value)}
                                value={petGender}
                            />
                        </div>
                        <div className="petsRow">
                            <label htmlFor="Age">Pet&rsquo;s Age</label>
                            <input type="text" name="Age" onChange={(e) => setPetAge(e.target.value)}
                                value={petAge}
                            />

                        </div>

                        <div className="petsRow">
                            <label htmlFor="Desc">Describe your pet*</label>
                            <input type="text" name="Desc" onChange={(e) => setPetDesc(e.target.value)}
                                value={petDesc}
                            />
                            <div>
                                {
                                    errors.petDesc ?
                                        <span className="errorMessage">{errors.petDesc.message}</span>
                                        : null
                                }
                            </div>
                        </div>
                        <h3>Pet Skills</h3>                            
                        <div className="petsRow">
                            <input type="text" name="skillOne" onChange={(e) => setSkillOne(e.target.value)}
                                value={petSkillOne}
                            />

                        </div>
                        <div className="petsRow">
                            <input type="text" name="skillTwo" onChange={(e) => setSkillTwo(e.target.value)}
                                value={petSkillTwo}
                            />

                        </div>
                        <div className="petsRow">
                            <input type="text" name="skillThree" onChange={(e) => setSkillThree(e.target.value)}
                                value={petSkillThree}
                            />

                        </div>
                        <button className="mainButton">Add pet</button>
                    </div>

                    <button className="mainButton"><Link to="/">Cancel</Link></button>
                </form>



            </div>
        </div>
    )

}

export default PetsAdd