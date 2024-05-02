import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import spin from "../assets/images/spin.png";
import CheckIcon from "../components/CheckIcon";
import FacebookLike from "../components/FacebookLike";
import LinkedInFollow from "../components/LinkedInFollow";
import PageHeader from "../components/PageHeader";
import { useCreateParticipantMutation } from "../features/api/participantApi";

const KeepInTouch = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [warning, setWarning] = useState(false);
  const [createParticipant, { isLoading }] = useCreateParticipantMutation();

  const participant = useSelector((state) => state.participant);

  const handleBack = () => {
    navigate("/");
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);

    if (e.target.checked) {
      setWarning(false);
    }
  };

  const handleGetSwag = async () => {
    if (!agree) {
      setWarning(true);
      return;
    }
    try {
      const result = await createParticipant(participant).unwrap();
      if (result.status === "success") {
        navigate("/prize", {
          replace: true,
          state: {
            gift: result.data.gift,
          },
        });
      } else {
        toast.error("Something Went Wrong!");
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  useEffect(() => {
    if (!participant.name.trim() || !participant.email.trim() || !participant.phone.trim()) {
      navigate("/");
    }
  }, [participant]);

  return (
    <>
      <div className="flex z-10 relative flex-col mt-3 mb-24">
        <div className="px-6">
          <PageHeader
            title="Keep In Touch"
            subTitle="Get Rewarded for Staying Connected: <br/> Follow Us for Exclusive Gifts!"
            social
          />

          <FacebookLike />
          <LinkedInFollow />

          <div>
            <div className="flex gap-2 mb-1 mt-6 items-center">
              <input className="hidden" type="checkbox" name="agree" id="agree" onChange={handleAgreeChange} />
              <label htmlFor="agree" className={` flex items-center gap-2`}>
                <span
                  className={`h-[18px] w-[18px] rounded border ${
                    !warning ? "border-gray-800" : "border-red-600"
                  } flex justify-center items-center ${agree && "bg-blue-500 !border-blue-500"}`}>
                  <CheckIcon />
                </span>
                <span className={`${!warning ? "text-gray-800" : "text-red-600"}`}>
                  I've interact with the above platforms.
                </span>
              </label>
            </div>

            <div className="flex justify-between gap-4 mt-4">
              <button onClick={handleBack} className="flex-grow border border-blue-600 rounded-xl py-3.5">
                Back
              </button>
              <button onClick={handleGetSwag} className="flex-grow bg-blue-600 rounded-xl py-3.5 text-white">
                Get Your Swag
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900/80 z-50">
          <div className="w-80 h-80 animate-spin">
            <img className="" src={spin} alt="spin" />
          </div>
        </div>
      )}
    </>
  );
};

export default KeepInTouch;
