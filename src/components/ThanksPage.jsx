import React from 'react'
import ThankYou from "../img/clip-thank-you.png";
export default function ThanksPage(){
  return (
    <>
    <div align="center" className="h-screen">
        <div className="">
            <div className="image_bg">
            <img src={ThankYou}  alt="" />
            </div>
        </div>
        <div className="0">
            <div className="mt-10 text-red-500 font-extrabold text-6xl">
                For Helping Me Grow
            </div>
        </div>
    </div>
    </>
  )
}
