import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useCouponsStatusQuery,
  useResetCouponTableMutation,
  useSeedCouponsMutation,
} from "../../features/api/couponApi";
import ResetParticipant from "./Components/ResetParticipant";

const Coupon = () => {
  const { data, isLoading: statusLoading } = useCouponsStatusQuery();
  const [seedCoupon, { isLoading }] = useSeedCouponsMutation();
  const [couponsCount, setCouponCount] = useState({ count: "", password: "" });
  const [resetpass, setResetPass] = useState("");
  const [resetCouponTable, { isLoading: resetLoading }] = useResetCouponTableMutation();

  const handleChange = (e) => {
    setCouponCount((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!couponsCount.count.trim() || !couponsCount.password.trim()) {
      return;
    }
    try {
      const result = await seedCoupon(couponsCount).unwrap();
      if (result.status === "success") {
        toast.success("Coupons Added");
      } else {
        toast.error("Something Went Wrong");
      }
      setCouponCount({ count: "", password: "" });
    } catch (error) {
      toast.error("Something Went Wrong");
      setCouponCount({ count: "", password: "" });
    }
  };

  const handleResetPassChange = (e) => {
    setResetPass(e.target.value);
  };

  const handleResetCouponTable = async () => {
    if (!resetpass.trim()) {
      return;
    }
    try {
      const result = await resetCouponTable({ password: resetpass }).unwrap();
      if (result.status === "success") {
        toast.success("Coupons Deleted");
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
    <div className="grid grid-cols-3 divide-x divide-gray-400">
      <div className="mr-10">
        <div>
          <label htmlFor="count" className="block text-sm font-medium leading-6 text-gray-900">
            How Many Coupon You Want To Add?
          </label>
          <div className="mt-1">
            <input
              value={couponsCount.count}
              onChange={handleChange}
              type="number"
              name="count"
              id="count"
              className="block w-full rounded-md border-0 p-2 pr-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
              placeholder="1000"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-1">
            <input
              value={couponsCount.password}
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
              placeholder="Password"
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="block w-full mt-6 text-center py-2 rounded-md bg-blue-600 text-white">
          {isLoading ? "Adding..." : "Add Coupon"}
        </button>
      </div>
      <div className="pl-10">
        <h3 className="text-xl font-bold">Status</h3>
        {!statusLoading && (
          <div className="mt-4">
            <p>Total Coupon: {data?.result?.total || 0}</p>
            <p className="mt-1">Used Coupon: {data?.result?.participant || 0}</p>
          </div>
        )}
      </div>

      <div className="pl-10">
        <h3 className="text-xl font-bold text-red-500">Be Careful</h3>
        <div className="mt-4">
          <div>
            <label htmlFor="resetpass" className="block text-sm font-medium leading-6 text-gray-900">
              Want To Reset Coupon Table?
            </label>
            <div className="mt-1">
              <input
                value={resetpass}
                onChange={handleResetPassChange}
                type="password"
                name="resetpass"
                id="resetpass"
                className="block w-full rounded-md border-0 p-2 pr-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            disabled={resetLoading}
            onClick={handleResetCouponTable}
            className="block w-full mt-4 text-center py-2 rounded-md bg-red-600 text-white">
            {resetLoading ? "Deleting..." : "Delete All Coupon"}
          </button>
        </div>

        <ResetParticipant />
      </div>
    </div>
  );
};

export default Coupon;
