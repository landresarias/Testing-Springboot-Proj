import React, {useEffect, useState,useRef} from "react";
import {Link,useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddUser(){
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const refUserName = useRef(null);
    const refUserEmail = useRef(null);
    const url_Add = 'http://localhost:8080/api/users/add';
    const url_up = `http://localhost:8080/api/users/view/${id}`;
    const url_update = `http://localhost:8080/api/users/update/${id}`;

  //------Creating a function for adding a register into user table.------
   const setData = async (Url, data) => {
        const resp = await fetch(Url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await resp.json();
        console.log(json);
        return json;
    };
   //-------------------------------------------------------------------

    //------Creating two functions to handle a user update action------
    useEffect(()=>{
        const getUserUp = async () => {
            const res = await fetch(url_up);
            const getData = await res.json();
            setUser(getData);
            console.log(getData);
        }
        getUserUp();
    }, []);

    const setData2 = async (Url, data) => {
        const resp = await fetch(Url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await resp.json();
        console.log(json);
        return json;
    };
    //-------------------------------------------------------------------

    //------Function that executes the selected option(Add/Update)----
    const saveUser=()=>{
        //function for updating user table....
        const User = {'fullname': refUserName.current.value, 'email': refUserEmail.current.value};
        if(id===undefined){
            if(User.fullname===""||User.email===''){
                toast.warn('There are empty fields',{position: toast.POSITION.BOTTOM_CENTER});
            }
            else{ setData(url_Add, User).then(r => {}); }
        }
        else{ setData2(url_update, User).then(r => {}); }
    }
    //-------------------------------------------------------------------

    return (
        <div>
            <br></br>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       <h3>{id===undefined?'ADD':'UPDATE'} FORM</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> First Name: </label>
                                    <input placeholder="Full Name" name="fullName" className="form-control" ref={refUserName}
                                           value={user.fullname} onChange={(e)=> setUser(e.target.value)} required/>
                                </div>
                                <div className = "form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control" ref={refUserEmail}
                                           value={user.email} onChange={(e)=> setUser(e.target.value)} required/>
                                </div>
                                <button className="btn btn-success" onClick={saveUser}>Save</button>
                                <Link to="/">
                                    <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>
                                </Link>
                                <ToastContainer autoClose={1500}></ToastContainer>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

