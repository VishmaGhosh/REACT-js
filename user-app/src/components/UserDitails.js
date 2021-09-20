import React from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function UserDitails({ user }) {
    let { id } = useParams();

    console.log(user);


    return (
        <div style={{ textAlign: "center" }}>
            {
                user.filter((i) => i.id == id).map((x) =>
                    <div style={{ textAlign:"center" }}>
                        <div class="bg-info"><h2><Link to={"/"}><FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "40px", paddingRight: "20px" }} /></Link> Ditails:{x.first_name}</h2></div>
                        <table class="border border-warning" style={{color:"Highlight",marginLeft:"30%", textAlign:"justify"}}>
                            <tr className="border-bottom border-primary"><td className="p-2">First Name:</td><td class="fs-4">{x.first_name}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">Last Name:</td><td class="fs-4">{x.last_name}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">Company Name:</td><td class="fs-4">{x.company_name}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">City:</td><td class="fs-4">{x.city}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">State:</td><td class="fs-4">{x.state}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">Zip:</td><td class="fs-4">{x.zip}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">Email:</td><td class="fs-4">{x.email}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">Website:</td><td class="fs-4">{x.web}</td></tr>
                            <tr className="border-bottom border-primary"><td className="p-2">Age:</td><td class="fs-4">{x.age}</td></tr>
                        </table>
                    </div>
                )
            }

        </div>
    )
}

export default UserDitails
