import React,{useEffect,useState} from "react";
import toast from "bootstrap/js/src/toast";
import {Link} from "react-router-dom";
import view from "./ViewUser";

export default function Home(props){
    const [usersArray, setUsersArray] = useState([]);
    const URL = 'http://localhost:8080/api/users/list';


    const getUserList = async () => {
        const res = await fetch(URL);
        const getData = await res.json();
        setUsersArray(getData);
        console.log(getData);
    }

    /*const setData = async (URL, data) => {
        const resp = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await resp.json();
        return json;
    };*/

    useEffect(() => {
        getUserList().then(r => {});
    }, []);

    const delUser = async (id) =>{
        fetch.delete(id, {method: "DELETE"})
            .then((rest)=>{
                toast.success("User Deleted", {position: toast.POSITION.BOTTOM_LEFT});
                getUserList();
            })
            .catch((err)=>{
                toast.error("Error when deleting", {position: toast.POSITION.BOTTOM_LEFT});
                console.log(err);
            });
    }



    const {iduser} = props;




    return(
        <div style={{position:'relative',left:'20%',width:'60%',alignItems:'center'}}>
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
                        {usersArray.map(getUser =>
                                <tr key = {getUser.id}>
                                    <td> { getUser.id} </td>
                                    <td> { getUser.fullname} </td>
                                    <td> {getUser.email}</td>
                                    <view idUs={iduser}/>
                                    {/*showing another Employee Buttons*/}
                                    <td>
                                        <button onClick="" className="btn btn-info">Update </button>
                                        <button onClick="   " className="btn btn-danger"
                                                style={{marginLeft: "10px"}} >Delete </button>
                                        <Link to="/ViewUser">
                                            <button className="btn btn-info"
                                                    style={{marginLeft: "10px"}} >View </button>
                                        </Link>

                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}





/*
    <div>
        { usersArray.map((getUser) =>
            <div >
                <span className='form-control' type='text' >{getUser.id}</span>
                <span className='form-control' type='text' >{getUser.fullname}</span>
                <span className='form-control' type='text' >{getUser.email}</span>
            </div>

        )}
    </div>
*/