import React, {useState} from 'react'
import { useParams } from "react-router-dom";


export default function ViewUser(props) {
    const {id} = useParams()
    const URL_VIEW = 'http://localhost:8080/api/users/view/2'
    const [viewUser, setUserView] = useState([]);


   /*const onSubmitPD = async ({id}) => {
        const data = { 'id': id, };
        const responseJson = await getData1(URL_VIEW, data);
        if (responseJson.connected) {
            setUserView(responseJson);
        }
        else {
            alert("Bla bla bla");
        }
    };

    const getData1 = async (url, data2) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await resp.json();
        return json;
    };*/


    return (
        <div>
            <h1>{"que props: "+props}</h1>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Employee Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Full Name User: </label>
                        <div> { viewUser.fullname }</div>
                    </div>
                    <div className = "row">
                        <label> Email User: </label>
                        <div> {viewUser.email }</div>
                    </div>
                </div>

            </div>

        </div>
    )

}










/*
    <div className = "row">
        <label> Employee First Name: </label>
        <div> { this.state.employee.firstName }</div>
    </div>
    <div className = "row">
        <label> Employee Last Name: </label>
        <div> { this.state.employee.lastName }</div>
    </div>
    <div className = "row">
        <label> Employee Email ID: </label>
        <div> { this.state.employee.emailId }</div>
    </div>
*/