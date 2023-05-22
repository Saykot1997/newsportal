import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <div className=" w-full bg-black py-16 px-5 flex justify-center items-center mt-10">
      <div className=" w-full">
        <div className=" flex justify-center gap-5 text-white text-xl">
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
          <a href="http://instragram.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
          <a href="https://story.snapchat.com" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost />
          </a>
          <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <SiTiktok />
          </a>
        </div>
        <div className=" mt-10 w-full flex justify-center">
          <div className="flex justify-center flex-wrap gap-5 w-full lg:w-[60%]">
            <p className=" text-[12px] text-white cursor-pointer">Cookie Settings</p>
            <p className=" text-[12px] text-white cursor-pointer">NewsLetter</p>
            <p className=" text-[12px] text-white cursor-pointer">Accessability</p>
            <p className=" text-[12px] text-white cursor-pointer">Advartise With Us</p>
            <p className=" text-[12px] text-white cursor-pointer">Career</p>
            <p className=" text-[12px] text-white cursor-pointer">Contact Us</p>
            <p className=" text-[12px] text-white cursor-pointer">Cookie Policy</p>
            <p className=" text-[12px] text-white cursor-pointer">Do not Sell or Share My Personal Information</p>
            <p className=" text-[12px] text-white cursor-pointer">Press</p>
            <p className=" text-[12px] text-white cursor-pointer">Policy</p>
            <p className=" text-[12px] text-white cursor-pointer">Tarms + Conditions</p>
          </div>
        </div>
        <div className=" mt-10 flex justify-center items-center flex-wrap gap-4">
          <p className=" font-bold text-3xl text-white">VOXMEDIA</p>
          <div className=" text-white text-[10px]">
            <p>This publication is a Vox Media network.</p>
            <p>@2023 Vox Media, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
