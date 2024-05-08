import React from "react";
import { useNavigate } from "react-router-dom";
import gifts from "../assets/images/gifts.png";
import PageHeader from "../components/PageHeader";

const GetStarted = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/info");
  };
  return (
    <div className="flex z-10 relative flex-col mt-3 mb-24">
      <div className="px-6">
        <PageHeader title="Get In Touch With Us to Win Amazing Swag & Featured Gifts!" />
        <div className="mt-4">
          <img className="w-full" src={gifts} alt="gifts" />
        </div>
        <div>
          <p className="font-semibold mt-5 text-sm text-center text-gray-900 leading-5">
            Follow These 4 Steps to Unlock Exclusive Rewards:
          </p>
          <div className="mt-3 space-y-3">
            <p className="bg-blue-100 border text-sm border-blue-200 rounded-lg px-4 py-2">
              1. Enter Your Information to Participate.
            </p>
            <p className="bg-blue-100 border text-sm border-blue-200 rounded-lg px-4 py-2">
              2. Follow Our Social Media Channels.
            </p>
            <p className="bg-blue-100 border text-sm border-blue-200 rounded-lg px-4 py-2">
              3. Spin for your swag by sharing it on your Facebook, don't forget to mention Webappick.
            </p>
            <p className="bg-blue-100 border text-sm border-blue-200 rounded-lg px-4 py-2">
              4. Show the Post at Our Stall & Receive Your Swag.
            </p>
          </div>
        </div>
        <button onClick={handleNext} className="bg-blue-700 mt-7 block w-full rounded-xl text-white text-center p-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
