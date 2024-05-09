import React, { useState } from "react";
import { useSearchCouponMutation } from "../../features/api/couponApi";
import SearchParticipant from "./Components/SearchParticipant";

const Search = () => {
  const [coupon, setCoupon] = useState("");
  const [searchCoupon, { isLoading }] = useSearchCouponMutation();
  const [searchResult, setSearchResult] = useState();

  const handleSearch = async () => {
    if (!coupon.trim()) return;
    const result = await searchCoupon({ coupon }).unwrap();

    setSearchResult(result.result);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <input
            value={coupon}
            onChange={(e) => {
              setCoupon(e.target.value);
            }}
            className="p-2 border flex-grow border-gray-600 rounded"
            type="text"
            placeholder="Coupon Code"
          />
          <button
            disabled={isLoading}
            onClick={handleSearch}
            className=" bg-blue-500 lg:w-40 rounded px-6 py-2 text-white border border-blue-500">
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>

        <div className="mt-4">
          {searchResult?.participant ? (
            <div>
              <p>Name: {searchResult.participant.name}</p>
              <p>Email: {searchResult.participant.email}</p>
              <p>Phone: {searchResult.participant.phone}</p>
              <p>Coupon: {searchResult.participant.coupon}</p>
            </div>
          ) : (
            <div>
              <p>No Result Found</p>
            </div>
          )}
        </div>
      </div>
      <SearchParticipant />
    </div>
  );
};

export default Search;
