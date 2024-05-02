import React, { useState } from "react";
import { useSearchCouponMutation } from "../../features/api/couponApi";

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
    <div>
      <div className="flex gap-4">
        <input
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
          className="p-2 border border-gray-600 rounded"
          type="text"
          placeholder="Coupon Code"
        />
        <button
          disabled={isLoading}
          onClick={handleSearch}
          className="bg-blue-500 w-40 rounded px-6 text-white border border-blue-500">
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="mt-4">
        {searchResult?.participant ? (
          <div>
            <p>Name: {searchResult.participant.name}</p>
            <p>Email: {searchResult.participant.email}</p>
            <p>Phone: {searchResult.participant.phone}</p>
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

export default Search;
