import React, { useState } from "react";
import { useSearchParticipantMutation } from "../../../features/api/participantApi";

const SearchParticipant = () => {
  const [email, setEmail] = useState("");
  const [searchEmail, { isLoading }] = useSearchParticipantMutation();
  const [searchResult, setSearchResult] = useState();

  const handleSearch = async () => {
    if (!email.trim()) return;
    const result = await searchEmail({ email }).unwrap();

    setSearchResult(result.result);
  };

  return (
    <div>
      <div className="flex gap-4">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="p-2 border flex-grow border-gray-600 rounded"
          type="text"
          placeholder="Participant Email"
        />
        <button
          disabled={isLoading}
          onClick={handleSearch}
          className="bg-blue-500 w-40 rounded px-6 text-white border border-blue-500">
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="mt-4">
        {searchResult ? (
          <div>
            <p>Name: {searchResult.name}</p>
            <p>Email: {searchResult.email}</p>
            <p>Phone: {searchResult.phone}</p>
            <p>Coupon: {searchResult.coupon}</p>
          </div>
        ) : (
          <div>
            <p>No Result Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchParticipant;
