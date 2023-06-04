import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { Host } from '../../data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineClose } from 'react-icons/ai'
import FileUploader from '../components/FileUploader'
import FormGroup from "../components/FormGroup"

export default function UploadVideo() {
    const [firstName, setFirstName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [videoYourself, setVideoYourSelf] = useState("")
    const [anyWhere, setAnyWhere] = useState("")
    const [license, setLicense] = useState("")
    const [about, setAbout] = useState("")
    const [signature, setSignature] = useState("")
    const [status, setStatus] = useState("")
    const [file, setFile] = useState(null)
    const [moveAbleLableId, setMoveAbleLableId] = useState("")


    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            if (!firstName || !familyName || !email || !phone || !age || !videoYourself || !anyWhere || !license || !about || !signature || !status || !file) {
                return toast.error("Please Enter All Data")
            }

            const formData = new FormData()
            formData.append("first_name", firstName)
            formData.append("family_name", familyName)
            formData.append("email", email)
            formData.append("phone", phone)
            formData.append("age", age)
            formData.append("video_yourself", videoYourself)
            formData.append("anywhere", anyWhere)
            formData.append("license", license)
            formData.append("about", about)
            formData.append("signature", signature)
            formData.append("status", status)
            formData.append("file", file)

            const res = await axios.post(`${Host}/api/submit_a_video`, formData)
            console.log(res)
            setFirstName("")
            setFamilyName("")
            setEmail("")
            setPhone("")
            setAge("")
            setVideoYourSelf()
            setAnyWhere("")
            setLicense("")
            setAbout("")
            setSignature("")
            setStatus("")
            setFile(null)
            toast.success("Video Uploaded Success")
        } catch (error) {
            toast.error(error.response.data.message || "Something Went Wrong.")
            console.log(error)
        }
    }

    const removeFile = () => {
        setFile(null)
    }

    return (
        <div className=" w-full">
            <Header />
            <div className=" w-full pt-36">
                <div className=" w-full flex justify-center ">
                    <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
                        <p className=" text-2xl font-semibold text-center">Upload Video</p>
                        <div className=' w-full flex justify-center'>
                            <form onSubmit={handleRegister} className=' w-full lg:w-[600px] mt-5'>
                                <FormGroup label="First Name" id="firstName" inputValue={firstName} setInputValue={setFirstName} />
                                <FormGroup label="Family Name" id="familyName" inputValue={familyName} setInputValue={setFamilyName} />
                                <FormGroup label="Email" id="email" inputValue={email} setInputValue={setEmail} />
                                <FormGroup label="Age" id="age" inputValue={age} setInputValue={setAge} />
                                <FormGroup label="Phone" id="phone" inputValue={phone} setInputValue={setPhone} />
                                <FormGroup label="Video Yourself" id="videoYourself" inputValue={videoYourself} setInputValue={setVideoYourSelf} />
                                <FormGroup label="Any Where" id="anyWhere" inputValue={anyWhere} setInputValue={setAnyWhere} />
                                <FormGroup label="License" id="license" inputValue={license} setInputValue={setLicense} />
                                <FormGroup label="About" id="about" inputValue={about} setInputValue={setAbout} />
                                <FormGroup label="Status" id="status" inputValue={status} setInputValue={setStatus} />
                                <FormGroup label="Signature" id="signature" inputValue={signature} setInputValue={setSignature} />

                                <div className=' mt-3 w-full'>
                                    <p className='font-medium text-gray-700 text-[12px] sm:text-sm mb-1'>Attach File</p>
                                    {
                                        file ?
                                            <div className=' bg-gray-200 py-2 px-2 rounded flex justify-between items-center'>
                                                <div className=' flex items-center gap-3'>
                                                    <p className=' text-sm text-gray-800'>{file.name}</p>
                                                    <p className=' text-sm text-gray-800'>{file.size}kb</p>
                                                </div>
                                                <div className=' rounded-full p-2 flex items-center justify-center bg-gray-300 hover:bg-gray-400 cursor-pointer' onClick={removeFile}>
                                                    <AiOutlineClose />
                                                </div>
                                            </div>
                                            :
                                            <FileUploader file={file} setFile={setFile} />
                                    }
                                    <p className=' text-gray-500 text-sm mt-2'>Accepted File Type: .mp4, .mkv </p>
                                </div>

                                <button type='submit' className=" uppercase bg-yellow-300 py-2 w-full mt-5 hover:bg-yellow-400 transition-all duration-200 ease-in-out" >Upload</button>
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
