import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";



const PetsListOne = (props) => {
    const [onePet, setOnePet] = useState({});
    const [petLike, setPetLike] = useState(0)
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                console.log(res);
                setOnePet(res.data);
                setPetLike(res.data);
            })
            .catch((err) => console.log(err));
    }, [id])

    const likeHandler = () => {
        axios.put("http://localhost:8000/api/pets/" + id), {
            petLike,
        }
        .then((res) => {
            console.log(res);
            setOnePet(res.data);
            setPetLike(res.data);
        })
        .catch((err) => console.log(err));
}
    

    const deletePets = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => console.log(err));
    }

    //    remember to add to model
    return (
        <div style={{ marginTop: "0px", marginBottom: "40px" }}>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>

            <div className="mainContainer">
                <div className="">
                    <div className="onePetsBackground" key={onePet._id}>
                        <div className="onePetImageContainer">
                            <img className="onePetImage" alt={onePet.petName} src={onePet.petImage} />
                        </div>
                        <div className="onePetInfo">
                            <h2>{onePet.petName}</h2>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Pet Type:</span> {onePet.petName} is a {onePet.petType}</p>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Age:</span> {onePet.petAge}</p>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Gender:</span> {onePet.petGender}</p>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Description:</span> {onePet.petDesc}</p>
                            <h3>Skills</h3>
                            <ul>
                                <li className="petDetails">{onePet.petSkillOne}</li>
                                <li className="petDetails">{onePet.petSkillTwo}</li>
                                <li className="petDetails">{onePet.petSkillThree}</li>
                            </ul>
                            <div>
                                <button className="mainButton" onClick={() => deletePets(onePet._id)}>Adopt {onePet.petName}</button>
                            </div>

                            <div className="editLink"><Link to={`/edit/${onePet._id}`}>Edit {onePet.petName}'s info</Link>
                            </div>
                            <div className="editLink"><Link to={`/`}>Back Home</Link>
                            </div>
                            <div>
                            <div className="likesBox">
                                <h3 style={{ fontSize: "20px" }}>{onePet.petName} has {petLike} likes</h3>
                                <button className="mainButton" style={{ marginTop: "0px" }} onClick={() => likeHandler( petLike + 1 )}>Give {onePet.petName} some love</button>
                            </div>

                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default PetsListOne
