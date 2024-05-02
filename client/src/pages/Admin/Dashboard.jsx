import React from "react";
import { useParticipantStatusQuery } from "../../features/api/participantApi";
import LastParticipant from "./Components/LastParticipant";

const Dashboard = () => {
  const { data, isLoading } = useParticipantStatusQuery();
  return (
    <div>
      {!isLoading && (
        <div className="w-72 bg-blue-600 text-white rounded-2xl p-8">
          <p className="text-lg">Total Participant</p>
          <p className="text-4xl font-bold mt-5">{data.count}</p>
        </div>
      )}

      <LastParticipant />
    </div>
  );
};

export default Dashboard;
