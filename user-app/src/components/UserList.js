
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Pagination from './Pagination';
// import UserDitails from './UserDitails';
function UserList(user) {
    const [searchData, setSearchData] = useState("");
    const [showData, setShowData] = useState(25);
    const [pagination, setPagination] = useState({
        start:0,
        end:showData
    });

    const onPagination = (start,end) =>{
        setPagination({start:start,end:end});
    }
    // console.log(user);
    return (
        <div>
            <div className="container">
                <div><h1>User List</h1></div>
                <div className="container">
                    <input type="text" placeholder="Search by First name or Last name"
                        onChange={event => { setSearchData(event.target.value) }}
                        class="form-control form-control-lg border-primary"></input>
                </div>
                <div>
                    {
                        <table striped bordered hover class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.user.filter((val) => {
                                        if (searchData === "") {
                                            return val
                                        } else if (val.first_name.toLowerCase().includes(searchData.toLocaleLowerCase())) {
                                            return val
                                        } else if (val.last_name.toLowerCase().includes(searchData.toLowerCase())) {
                                            return val
                                        }
                                        return null
                                    }).slice(pagination.start,pagination.end).map((item, i) =>
                                        <tr>
                                            <td>
                                                <Link style={{ textDecoration: 'none' }} to={"/ditails/" + item.id}>{item.first_name}</Link>
                                            </td>
                                            <td>{item.last_name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.email}</td>
                                            <td><a href={item.web} target="blank" rel="noopener" style={{ textDecoration: 'none' }}>{item.web}</a></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    }
                </div>

            </div>
            <div fixed="bottom">
            <Pagination  showData={showData} onPagination ={onPagination}/>
            </div>
            
        </div>
    )
}

export default UserList
