import React, {useState} from "react";
import {Link} from "react-router-dom";
//import toast from "bootstrap/js/src/toast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddUser(){
    const [fullName,setFullName] = useState('');
    const [emailId,setEmailId] = useState('');
    const Url_Add = 'http://localhost:8080/api/users/add';

    const setData = async (Url, data) => {
        const resp = await fetch(Url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await resp.json();
        console.log(json);
        return json;
    };

    const saveUser = (e) => {
        //e.preventDefault();
        const UserRegis = {'fullname': fullName, 'email': emailId};
        if(UserRegis.fullname==""||UserRegis.email==''){
            toast.warn('There are empty fields',{position: toast.POSITION.BOTTOM_CENTER});
        }
        else{
            setData(Url_Add, UserRegis).then(r => {});
        }
    }

    const changeFNameHandler= (e) => {
        setFullName(e.target.value);
    }

    const changeEmailHandler= (e) => {
        setEmailId(e.target.value);
    }

    return (
        <div>
            <br></br>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       <h3>ADD USER FORM</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                           value={fullName} onChange={changeFNameHandler} required/>
                                </div>
                                <div className = "form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                           value={emailId} onChange={changeEmailHandler} required/>
                                </div>
                                <button className="btn btn-success" onClick={saveUser}>Save</button>
                                <Link to="/">
                                    <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>
                                </Link>
                                <ToastContainer></ToastContainer>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






/*
    <div className = "form-group">
        <label> First Name: </label>
        <input placeholder="First Name" name="firstName" className="form-control"
               value={state.firstName} onChange={this.changeFirstNameHandler}/>
    </div>
    <div className = "form-group">
        <label> Last Name: </label>
        <input placeholder="Last Name" name="lastName" className="form-control"
               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
    </div>
    <div className = "form-group">
        <label> Email Id: </label>
        <input placeholder="Email Address" name="emailId" className="form-control"
               value={this.state.emailId} onChange={this.changeEmailHandler}/>
    </div>
    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
*/

