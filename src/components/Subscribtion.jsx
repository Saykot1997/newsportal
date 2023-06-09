import { useState } from "react"
import kowThisPhoto from "../assets/kowthis.jpg"
import { Host } from "../../data"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Subscribtion({ page }) {

    const [email, setEmail] = useState("")
    const [checked, setChecked] = useState(false)

    const Subscrive = async () => {
        if (!email) {
            return toast.error("Please Enter Your Email")
        }
        if (!checked) {
            return toast.error("Please Check the agreement field")
        }
        try {
            const res = await axios.post(`${Host}/api/subcription`, { email })
            setEmail("")
            setChecked(false)
            toast.success(res.data.Message)
        } catch (error) {
            toast.success(error.response.data.Message || "Something went wrong")
            console.log(error)
        }
    }

    return (
        <div className=' w-full'>
            <div className=' flex justify-between flex-wrap gap-5 items-center'>
                <div>
                    <p className=' font-bold text-xl'>NowThis in Your Inbox</p>
                    <p className=' text-gray-600 text-sm'>Quickly get up to speed on the essential news stories you need to know about today.</p>
                </div>
                {
                    !page &&
                    <div>
                        <img src={kowThisPhoto} alt="" className=' w-20' />
                    </div>
                }
            </div>
            <div className=" w-full relative group my-5">
                <input type="email" placeholder="Your Email Address" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-4 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className=" absolute top-1/2 -translate-y-1/2 right-3 px-4 py-[10px] cursor-pointer bg-yellow-300 hover:bg-yellow-400 transition-all duration-100 ease-linear flex items-center">
                    <span onClick={Subscrive} className=" text-[11px] font-bold">SUBSCRIB</span>
                </div>
            </div>
            <div className=' mt-5 border-t pt-2 flex justify-between flex-wrap'>
                <div className=" flex items-center">
                    <input type="checkbox" className=" text-gray-400 checked:text-gray-400" value={checked} checked={checked} onChange={(e) => setChecked(e.target.value)} />
                    <p className=" ml-2 text-gray-600 text-[12px]">I am 21+ years old</p>
                </div>
                <p className=" mt-1 text-[12px] text-gray-600">By signing up, I agree to the <span className=" underline">Terms</span> and <span className=" underline">Privete Policy</span></p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}
