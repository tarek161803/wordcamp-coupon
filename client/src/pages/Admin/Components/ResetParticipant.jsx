import React, { useState } from "react";
import { toast } from "react-toastify";
import { useResetParticipantTableMutation } from "../../../features/api/participantApi";

const ResetParticipant = () => {
  const [resetpass, setResetPass] = useState("");
  const [resetParticipantTable, { isLoading }] = useResetParticipantTableMutation();

  const handleResetPassChange = (e) => {
    setResetPass(e.target.value);
  };

  const handleReset = async () => {
    if (!resetpass.trim()) {
      return;
    }
    try {
      const result = await resetParticipantTable({ password: resetpass }).unwrap();
      if (result.status === "success") {
        toast.success("Participants Deleted");
      } else {
        toast.error("Something Went Wrong");
      }
      setResetPass("");
    } catch (error) {
      toast.error("Something Went Wrong");
      setResetPass("");
    }
  };
  return (
    <div className="mt-8">
      <div>
        <label htmlFor="resetParticipantPass" className="block text-sm font-medium leading-6 text-gray-900">
          Want To Reset Participant Table?
        </label>
        <div className="mt-1">
          <input
            value={resetpass}
            onChange={handleResetPassChange}
            type="password"
            name="resetParticipantPass"
            id="resetParticipantPass"
            className="block w-full rounded-md border-0 p-2 pr-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            placeholder="Password"
          />
        </div>
      </div>
      <button
        disabled={isLoading}
        onClick={handleReset}
        className="block w-full mt-4 text-center py-2 rounded-md bg-red-600 text-white">
        {isLoading ? "Deleting..." : "Delete All Participant"}
      </button>
    </div>
  );
};

export default ResetParticipant;
