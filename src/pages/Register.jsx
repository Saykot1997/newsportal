import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { Host } from '../../data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            if (!name || !email || !password || !confirmPassword) {
                return toast.error("Please Enter All Data")
            }
            if (password !== confirmPassword) {
                return toast.error("Password dose not patch")
            }
            const res = await axios.post(`${Host}/api/guest_register_store?name=${name}&email=${email}&password=${password}`)
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            console.log(res.data)
            toast.success("Registation Success")
        } catch (error) {
            toast.error(error.response.data.message || "Something Went Wrong.")
            console.log(error)
        }
    }

    return (
        <div className=" w-full">
            <Header />
            <div className=" w-full pt-36">
                <div className=" w-full flex justify-center ">
                    <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
                        <p className=" text-2xl font-semibold text-center">Register</p>
                        <div className=' w-full flex justify-center'>
                            <form onSubmit={handleRegister} className=' w-full lg:w-[600px] mt-5'>
                                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Type your name here" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out mt-3" />
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email address here" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out mt-3" />
                                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password address here" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out mt-3" />
                                <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Type your password address here" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out mt-3" />
                                <button type='submit' className=" uppercase bg-yellow-300 py-2 w-full mt-5 hover:bg-yellow-400 transition-all duration-200 ease-in-out" >Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
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
