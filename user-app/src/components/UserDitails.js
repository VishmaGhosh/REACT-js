import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function UserDitails({ user }) {
    let { id } = useParams();
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [company, setCompany] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [web, setWeb] = useState("");
    console.log(user);

    useEffect(() => {
        setCity((user[id] != null) ? user[id - 1].city : "");
        setAge((user[id] != null) ? user[id - 1].age : "");
        setFirst_name((user[id] != null) ? user[id - 1].first_name : "");
        setLast_name((user[id] != null) ? user[id - 1].last_name : "");
        setCompany((user[id] != null) ? user[id - 1].company_name : "");
        setState((user[id] != null) ? user[id - 1].state : "");
        setZip((user[id] != null) ? user[id - 1].zip : "");
        setEmail((user[id] != null) ? user[id - 1].email : "");
        setWeb((user[id] != null) ? user[id - 1].web : "");
        // console.log(city);
    }, [user])


    return (
        <div style={{textAlign:"center"}}>
            <div class="bg-info"><h2><Link to={"/"}><FontAwesomeIcon icon={faArrowLeft} style={{fontSize:"40px", paddingRight: "20px" }} /></Link> Ditails: {first_name} {last_name}</h2></div>
            <div  style={{paddingLeft:"35%"}}>
                <table class="border border-warning">
                    <tr class="border-bottom border-primary"><td>First Name:</td><td class="fs-4">{first_name}</td></tr>
                    <tr class="border-bottom border-primary"><td>Last Name:</td><td class="fs-4">{last_name}</td></tr>
                    <tr class="border-bottom border-primary"><td>Company Name:</td><td class="fs-4">{company}</td></tr>
                    <tr class="border-bottom border-primary"><td>City:</td><td class="fs-4">{city}</td></tr>
                    <tr class="border-bottom border-primary"><td>State:</td><td class="fs-4">{state}</td></tr>
                    <tr class="border-bottom border-primary"><td>Zip:</td><td class="fs-4">{zip}</td></tr>
                    <tr class="border-bottom border-primary"><td>Email:</td><td class="fs-4">{email}</td></tr>
                    <tr class="border-bottom border-primary"><td>Website:</td><td class="fs-4">{web}</td></tr>
                    <tr class="border-bottom border-primary"><td>Age:</td><td class="fs-4">{age}</td></tr>
                </table>
            </div>
        </div>
    )
}

export default UserDitails
