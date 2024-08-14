import React, { useRef, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";


const Expense = () => {

    const [x, setx] = useState(false);
    const [uptObj, setuptObj] = useState("");
    console.log(uptObj)


    let updateSnoRef = useRef()
    let updatePlaceRef = useRef()
    let updatePriceRef = useRef()


    const [arr, setarr] = useState([
        {
            sno: 1,
            place: "up",
            price: 200
        },
        {
            sno: 2,
            place: "Bihar",
            price: 2000
        },
        {
            sno: 3,
            place: "UK",
            price: 500
        },
        {
            sno: 4,
            place: "Goa",
            price: 600
        }
    ])

    let snoRef = useRef()
    let placeRef = useRef()
    let priceRef = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        console.log("hello")

        let obj = {
            sno: snoRef.current.value,
            price: priceRef.current.value,
            place: placeRef.current.value
        }
        console.log(obj)

        if (obj.sno && obj.price && obj.place)
            setarr([...arr, obj])
        snoRef.current.value = ""
        priceRef.current.value = ""
        placeRef.current.value = ""

    }


    const handleDelete = (ans, i) => {
        console.log(ans, i)
        // method1 using splice method//
        let copyArr = [...arr]
        copyArr.splice(i, 1)
        console.log(copyArr)
        setarr(copyArr)

        //method2 using filter method//

        // let ansArr = arr.filter((x) => x.sno != ans.sno)
        // console.log(ansArr)
        // setarr(ansArr)
    }
    const handleUpdate = (ans, index) => {
        console.log(ans, index)
        setuptObj(ans)
        setx(true)
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()

        console.log("helloooo")

        let obj = {
            place: updatePlaceRef.current.value,
            price: updatePriceRef.current.value,

        }
        console.log(obj)

        // let place = updatePlaceRef.current.value
        // let price = updatePriceRef.current.value

        console.log(uptObj)

        let index = arr.findIndex((ele) => ele.sno === uptObj.sno)
        console.log(index)

        let copyArr = [...arr]

        let updatedObj = {}
        if (obj.place) {
            updatedObj.place = uptObj.place
        }
        if (obj.price) {
            updatedObj.price = uptObj.price
        }

        copyArr[index] = updatedObj


        setarr(copyArr)
        setx(false)


    }




    return (
        <div className='form1Div'>
            <h2>This is Expense tracker</h2>
            <form className='form1' action="">
                <input placeholder='sno.' type="number" ref={snoRef} /> <br />
                <input placeholder='place' type="text" ref={placeRef} /> <br />
                <input placeholder='price' type="number" ref={priceRef} /> <br />

                <button onClick={submitForm}>Submit</button>

            </form>





            {!arr.length && <h3 className='text-center'> Please  add item </h3>}


            {arr.length >= 1 && <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sno</th>
                        <th scope="col">Place</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((ele, index) => {
                            return <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{ele.place}</td>
                                <td>{ele.price}</td>
                                <td><button onClick={() => handleDelete(ele, index)} className='btn btn-danger'>delete</button>
                                    <button onClick={() => handleUpdate(ele, index)} className='btn btn-info'>Update</button></td>

                            </tr>
                        })

                    }




                </tbody>
            </table>}


            {x && <div className="updateForm">
                <IoCloseSharp onClick={() => setx(false)} className=' closeIcon' size={"30px"} />
                <form action="">

                    <input ref={updateSnoRef} placeholder='sno' type="number" />
                    <input ref={updatePlaceRef} placeholder='place' type="text" />
                    <input ref={updatePriceRef} placeholder='price' type="number" />
                    <button onClick={handleUpdateSubmit} className='btn btn-success'>SubmitUpdates</button>

                </form>
            </div>}










        </div>
    )


}


export default Expense
