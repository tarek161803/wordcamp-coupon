import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import warningImage from "../assets/images/warning.png";
import Checkbox from "../components/Checkbox";
import InputGroup from "../components/InputGroup";
import PageHeader from "../components/PageHeader";
import { useValidateInformationMutation } from "../features/api/participantApi";
import { updateParticipantInterest, updateParticipantValue } from "../features/participant/participantSlice";

export default function ParticipantInfo() {
  const navigate = useNavigate();
  const participant = useSelector((state) => state.participant);
  const dispatch = useDispatch();

  const [validateInformation] = useValidateInformationMutation();

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    dispatch(
      updateParticipantValue({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleInterestChange = (e) => {
    dispatch(updateParticipantInterest(e.target.name));
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (
      !participant.name.trim() ||
      !participant.email.trim() ||
      !participant.phone.trim() ||
      !validateEmail(participant.email)
    ) {
      setError(true);
      return;
    }

    const result = await validateInformation({ email: participant.email, phone: participant.phone }).unwrap();

    if (result.result.length > 0) {
      toast.error("Email Or Phone Already In Use");
    } else {
      navigate("/social");
    }
  };

  return (
    <div className="flex z-10 relative flex-col mt-3 mb-24">
      <div className="px-6">
        <PageHeader title="Growth Partner for WooCommerce Businesses Across the Globe" />
        <form className="php-email-form space-y-4">
          <InputGroup
            label="Name"
            value={participant.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            required
          />

          <InputGroup
            label="Email Address"
            value={participant.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            required
          />

          <InputGroup
            label="Phone Number"
            value={participant.phone}
            onChange={handleChange}
            type="text"
            id="phone"
            name="phone"
            required
          />

          <div className="">
            <p className="mb-2 text-gray-900">Area Of Interest</p>

            <Checkbox
              handleInterestChange={handleInterestChange}
              name="design"
              participant={participant}
              label="Design"
            />
            <Checkbox
              handleInterestChange={handleInterestChange}
              name="development"
              participant={participant}
              label="Development"
            />
            <Checkbox
              handleInterestChange={handleInterestChange}
              name="marketing"
              participant={participant}
              label="Marketing"
            />
          </div>
          {error && (
            <div className="flex items-center gap-2">
              <img className="h-4" src={warningImage} alt="warning" />
              <p className="text-sm">Please fill all fields with valid information.</p>
            </div>
          )}
          <button onClick={handleNext} className="bg-blue-700 block w-full rounded-xl text-white text-center p-4">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
