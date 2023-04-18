    import React,{useEffect,useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Home(){
    const [user, setUser] = useState([]);
    const nav = useNavigate();
    const URL = `http://localhost:8080/api/users/delete/`;
    
    //-------Creating two function for loading a users list------------
    const getUserList = async () => {
        const res = await fetch('http://localhost:8080/api/users/list');
        const getData = await res.json();
        setUser(getData);
        console.log(getData);
    }
    useEffect(() => {
        getUserList();
    }, []);
    //------------------------------------------------------------------

    //------Creating a delete user function------
    const delUser =async (id)=> {
        if (window.confirm('User Id: '+ id+'. - Confirm Deletion..... ')){
            fetch(URL+id, {
                method: "DELETE",
                header:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    toast.success('Register deleted!', {position: toast.POSITION.BOTTOM_CENTER});
                    getUserList()
                })
                .catch((err) => {
                    toast.error('error', {position: toast.POSITION.BOTTOM_CENTER});
                    console.log(err)
                });
        }
    }
    //------------------------------------------------------------------

    return(
        <div style={{position:'relative',left:'20%',width:'60%',alignItems:'center'}}>
            <ToastContainer autoClose={1500}></ToastContainer>
            <div>
                <h2 className="text-center">USERS LIST</h2>
                {/*showing the Add Employee Button*/}
                <div className = "row">
                    <Link to="/AddUser">
                        <button className="btn btn-primary" > Add User</button>
                    </Link>
                </div>
                <br></br>
                {/*Charging the employee table*/}
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> USER ID</th>
                                <th> USER NAME</th>
                                <th> USER EMAIL</th>
                                <th> ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                        { user.map((getUser) =>
                            <tr key = { getUser.id }>
                                <td> { getUser.id } </td>
                                <td> { getUser.fullname } </td>
                                <td> { getUser.email }</td>
                                {/*showing another Employee Buttons*/}
                                <td>
                                    <button className="btn btn-info"
                                            onClick={()=> nav(`/adduser/${getUser.id}`)}> Update </button>
                                    <button className="btn btn-danger"
                                            style={{marginLeft: "10px"}} onClick={()=> delUser(getUser.id)}> Delete </button>
                                    <button className="btn btn-info" style={{marginLeft: "10px"}}
                                            onClick={()=> nav(`/viewuser/${getUser.id}`)}> View </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


