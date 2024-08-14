import React, { useRef, useState } from 'react'
import { ImCross } from "react-icons/im";


const ExpensePractice = () => {


    let updatedPlaceRef=useRef()
    let updatedPriceRef=useRef()


    const [x, setx] = useState(false)


    const [arr, setarr] = useState([
        {
            sno: 1,
            place: "up",
            price: 2000
        },
        {
            sno: 2,
            place: "goa",
            price: 1000
        },
        {
            sno: 3,
            place: "bihar",
            price: 2000
        },
        {
            sno: 4,
            place: "uk",
            price: 2000
        }
    ])
    // let snoRef=useRef()
    let placeRef = useRef()
    let priceRef = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        console.log("hello")

        let obj = {
            // sno:snoRef.current.value,
            place: placeRef.current.value,
            price: priceRef.current.value
        }
        console.log(obj)
        if (obj.place && obj.price) {

            setarr([...arr, obj])
            placeRef.current.value = ""
            priceRef.current.value = ""
        }

    }

    const handleDelete = (ans, i) => {
        console.log(ans, i)
        // console.log("delete")
        let copyArr = [...arr]
        // console.log(copyArr)
        copyArr.splice(i, 1)
        setarr(copyArr)
    }

    const handleUpdate = (ans, i) => {
        console.log(ans, i)
        setx(true)

    }
    const submitUpd = (e) => {
        e.preventDefault()
        console.log("update")
        let updatedObj={
            place:updatedPlaceRef.current.value,
            price:updatedPriceRef.current.value,
        }
        console.log(updatedObj)




    }



    return (
        <div>
            <h3 className='text-center mt-4'>This is expense tracker</h3>
            <form className='mt-4 ps-5 d-flex gap-2' action="">

                {/* <input  ref={snoRef} placeholder='Sno' type="number" /> */}
                <input ref={placeRef} placeholder='place' type="text" />
                <input ref={priceRef} placeholder='price' type="number" />
                <button className='btn btn-success p-1' onClick={submitForm} >Submit</button>

            </form> <br />



            <div>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Sno</th>
                            <th scope="col">Place</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((ele, index) => {
                            return <tr>
                                {/* <td>{ele.sno}</td> */}
                                <td>{index + 1}</td>
                                <td>{ele.place}</td>
                                <td>{ele.price}</td>

                                <button onClick={() => handleDelete(ele, index)} className='btn btn-danger'>Delete</button>
                                <span><button onClick={() => handleUpdate(ele, index)} className='btn btn-info'>Update</button></span>

                            </tr>
                        })}




                    </tbody>
                </table>
                {x && <div className="updationDiv text-white bg-secondary col-3 p-3 ">
                    <ImCross onClick={() => setx(false)} className='closeIcon' />

                    <p >Updation Form</p>
                    <form className="updationForm" >
                        <div className="mb-3  ">

                            <input ref={updatedPlaceRef} placeholder='Place' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <input ref={updatedPriceRef} placeholder='Price' type="numbr" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={submitUpd}>Submit</button>
                    </form>
                </div>}




            </div>



        </div>
    )
}

export default ExpensePractice
