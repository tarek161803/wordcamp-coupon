import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLazyGeneratePDFQuery } from "../../features/api/couponApi";
import { useGetGiftStatusQuery, useUpdateGiftMutation } from "../../features/api/giftApi";
import InputGroup from "./Components/InputGroup";

const Gift = () => {
  const { data, isLoading: statusLoading } = useGetGiftStatusQuery();
  const [updateGift, { isLoading }] = useUpdateGiftMutation();
  const [giftStatus, setGiftStatus] = useState({ tshirt: "", notepad: "", sticker: "", password: "" });
  const [generatePDFApi, { isLoading: pdfGenerating }] = useLazyGeneratePDFQuery();

  const handleChange = (e) => {
    setGiftStatus((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!giftStatus.tshirt || !giftStatus.notepad || !giftStatus.sticker || !giftStatus.password.trim()) {
      return;
    }
    try {
      const result = await updateGift(giftStatus).unwrap();
      if (result.status === "success") {
        toast.success("Coupons Added");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const generatePdf = async () => {
    try {
      const result = await generatePDFApi().unwrap();
      if (result.status === "success") {
        toast.success("PDF Generated");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    if (data?.result) {
      setGiftStatus({
        tshirt: data?.result?.tshirt,
        notepad: data?.result?.notepad,
        sticker: data?.result?.sticker,
        password: "",
      });
    }
  }, [data]);

  return (
    <div className="grid grid-cols-3 divide-x divide-gray-400">
      <div className="mr-10">
        <InputGroup
          label="T-Shirt"
          onChange={handleChange}
          value={giftStatus?.tshirt}
          id="tshirt"
          name="tshirt"
          type="number"
        />
        <InputGroup
          className="mt-4"
          label="Notepad"
          onChange={handleChange}
          value={giftStatus?.notepad}
          id="notepad"
          name="notepad"
          type="number"
        />
        <InputGroup
          className="mt-4"
          label="Sticker"
          onChange={handleChange}
          value={giftStatus?.sticker}
          id="sticker"
          name="sticker"
          type="number"
        />

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-1">
            <input
              value={giftStatus?.password}
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
          {isLoading ? "Updating..." : "Update Gift"}
        </button>
      </div>
      <div className="pl-10">
        <h3 className="text-xl font-bold">Status</h3>
        {!statusLoading && (
          <div className="mt-4">
            <p>T-Shirt Remaining: {data?.result?.tshirt || 0}</p>
            <p className="mt-1">Notepad Remaining: {data?.result?.notepad || 0}</p>
            <p className="mt-1">Sticker Remaining: {data?.result?.sticker || 0}</p>
          </div>
        )}
      </div>

      <div className="pl-10">
        <h3 className="text-xl font-bold">PDF Download</h3>
        <button onClick={generatePdf} className="block w-full mt-6 text-center py-2 rounded-md bg-blue-600 text-white">
          Generate PDF
        </button>
        <a
          href={process.env.REACT_APP_API_URL + "/output.pdf"}
          target="_blank"
          rel="noreferrer"
          className="block w-full mt-6 text-center py-2 rounded-md bg-blue-600 text-white">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Gift;
