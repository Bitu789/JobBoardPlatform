import { useState } from "react";
import api from "../services/api";

function Apply() {

const [data,setData]=useState({

applicant_name:"",
applicant_email:"",
resume:"",
job:1

});

const change=(e)=>{

setData({

...data,

[e.target.name]:e.target.value

});

}

const submit=async()=>{

try{

await api.post("applications/",data);

alert("Application Submitted Successfully!");
window.location.href="/dashboard";
}catch(err){

console.log(err);

alert("Submission Failed");

}

}

return(

<div className="container">

<h1>Apply Job</h1>

<input
name="applicant_name"
placeholder="Name"
onChange={change}
/>

<input
name="applicant_email"
placeholder="Email"
onChange={change}
/>

<textarea
rows="8"
name="resume"
placeholder="Paste Resume"
onChange={change}
/>

<button onClick={submit}>

Submit

</button>

</div>

)

}

export default Apply;