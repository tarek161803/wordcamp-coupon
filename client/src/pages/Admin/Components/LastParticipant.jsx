import React from "react";
import { useGetLastParticipantsQuery } from "../../../features/api/participantApi";

const LastParticipant = () => {
  const { data } = useGetLastParticipantsQuery();

  return (
    <div className="mt-12">
      <div className="border-b border-gray-300 py-2 mb-4">
        <p className="text-2xl font-bold">Last Participants</p>
      </div>

      {data?.result &&
        data?.result?.map((participant) => (
          <div key={participant._id} className="bg-blue-100 py-4 px-6 mb-4 rounded-md">
            <p>Name: {participant.name}</p>
            <p>Email: {participant.email}</p>
            <p>Phone: {participant.phone}</p>
            <p>Coupon: {participant.coupon}</p>
            <p className="capitalize">Gift: {participant.gift}</p>
          </div>
        ))}
    </div>
  );
};

export default LastParticipant;
