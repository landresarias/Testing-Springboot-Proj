import React, {useEffect,useState} from 'react'
import { Link,useParams } from "react-router-dom";

export default function ViewUser() {
    const {id} = useParams()
    const [userDet, setUserDet] = useState([]);
    const url = `http://localhost:8080/api/users/view/${id}`;

    useEffect(()=>{
        const getUserView = async () => {
            const res = await fetch(url);
            const getData = await res.json();
            setUserDet(getData);
            console.log(getData);
        }
        getUserView();
    }, []);

    return (
        <div>
            <br></br>
            <div className = "card col-md-5 offset-md-4">
                <h3 className = "text-center"> View Employee Details</h3>
                <div className = "card-body">
                    <div >
                        <div className = "row" key={userDet.id} >
                            <label style={{width:'25%',marginLeft:'2%',fontWeight:'700'}}> User ID: </label>
                            <span className='form-control' type='text' style={{width:'70%'}}> { userDet.id }</span>
                            <label style={{width:'25%',marginLeft:'2%',fontWeight:'700'}}> User Full Name: </label>
                            <span className='form-control' type='text' style={{width:'70%'}}> { userDet.fullname }</span>
                            <label style={{width:'25%',marginLeft:'2%',fontWeight:'700'}}>  User Email: </label>
                            <span className='form-control' type='text' style={{width:'70%'}}>{ userDet.email }</span>
                        </div>
                        <Link to="/" style={{float:'right'}}>Back to home</Link>
                    </div>
                </div>

            </div>
        </div>
    )

}

