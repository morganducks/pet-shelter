import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const PetsListAll = (props) => {

    // const navigate = useNavigate();

    const { allPets, setAllPets } = props;

    

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    // const deletePets = (idFromBelow) => {
    //     axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
    //         .then((res) => {
    //             console.log(res);
    //             console.log(res.data);
    //             setAllPets(allPets.filter(pets => pets._id !== idFromBelow))
    //         })
    //         .catch((err) => console.log(err));
    // }

    //    remember to add to model
    return (
        <div style={{ marginTop: "0px", marginBottom: "40px" }}>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>

            <div className="petListContainer mainContainer">
                {
                    allPets.map((pets, index) => {
                        return (
                            <div className="petsBackground" key={index}>

                                <div className="listContainer" key={pets._id}>
                                    <Link to={`/pets/${pets._id}`}><img className="petImage" src={pets.petImage} /></Link>
                                    <Link to={`/pets/${pets._id}`}>
                                        <h3 className="listName">{pets.petName}</h3></Link>
                                    <p className="listStyles"><span style={{fontWeight: "700"}}>Type:</span> {pets.petType}</p>
                                    <p className="listStyles"><span style={{fontWeight: "700"}}>Age:</span> {pets.petAge}</p>

                                    <p className="listStyles"><span style={{fontWeight: "700"}}>Gender:</span> {pets.petGender}</p>

                                    <Link to={`/pets/${pets._id}`}><div className="viewLinkBtn">Get to know more about {pets.petName}</div></Link>

                                </div>

                            </div>

                        )
                    })
                }
            </div>

        </div>

    )

}

export default PetsListAll