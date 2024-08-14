import React, { useState } from 'react'

const Form1 = () => {
  const[name,setname]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[male,setMale]=useState("");
  const[female,setFemale]=useState("");
  const[address,setAddress]=useState("");


  const handelNameChanger=(e)=>{
    let nameValue=e.target.value
    setname(e.target.value)
    // setname(nameValue)
    console.log(nameValue)
  }
  const handelEmailChanger=(e)=>{
    let emailValue=e.target.value
    console.log(emailValue)
    setEmail(e.target.value)
    //setEmail(emailValue)
  }
  const handelPasswordChanger=(e)=>{
    let passwordValue=e.target.value
    console.log(passwordValue)
    setPassword(passwordValue)
  }
  const handelMaleChanger=(e)=>{
    let maleValue=e.target.checked
    console.log(maleValue)
    setMale(maleValue)
  }
  const handelFemaleChanger=(e)=>{
    let femaleValue=e.terget.checked
    console.log(femaleValue)
    setFemale(femaleValue)
  }
  const handelAddressChanger=(e)=>{
    let addressValue=e.target.value
    console.log(addressValue)
    setAddress(addressValue)

  }
  const handelSubmit=(e)=>{
    e.preventDefault()

    let obj={
      name:name,
      email:email,
      password:password,
      address:address,
      gender:male===true? "male":"female"
    }
    console.log(obj)
  }



  return (
    <div>
        <h1>This is form 1 </h1>
            <form action="">
                <label htmlFor="">Name</label> <br />
                <input onChange={handelNameChanger} type="text" /> <br />
                <label htmlFor="">Email</label><br />
                <input  onChange={handelEmailChanger} type="email" /> <br />
                <label htmlFor="">Password</label><br />
                <input onChange={handelPasswordChanger} type="password" /> <br /> <br />

                <div>
                    <label htmlFor="" >Gender : </label>
                    <label htmlFor="m" >Male</label>
                    <input onChange={handelMaleChanger} name='gender' id='m' type="radio" />
                    <label  htmlFor="f">Female</label>
                    <input onChange={handelFemaleChanger} name='gender' id='f' type="radio" />
                </div> <br/>
                

                <label htmlFor="">address</label><br />
                <textarea  onChange={handelAddressChanger} name="" id=""></textarea> <br /> <br />


                <button onClick={handelSubmit}> Submit</button>

            </form>

      
    </div>
  )
}

export default Form1
