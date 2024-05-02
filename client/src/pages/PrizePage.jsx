import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import chalan from "../assets/images/chalan_pro.png";
import confetti from "../assets/images/confetti.png";
import ctxFeed from "../assets/images/ctx_feed.png";
import notepad from "../assets/images/notepad.png";
import sticker from "../assets/images/sticker.png";
import tshirt from "../assets/images/tshirt.png";
import { resetState } from "../features/participant/participantSlice";

const PrizePage = () => {
  const participant = useSelector((state) => state.participant);
  const dispatch = useDispatch();

  const [prize, setPrize] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.gift) {
      navigate("/");
    }
    if (state?.gift) {
      if (state.gift === "tshirt") {
        setPrize(tshirt);
      }
      if (state.gift === "notepad") {
        setPrize(notepad);
      }
      if (state.gift === "sticker") {
        setPrize(sticker);
      }
    }
  }, [state]);

  useEffect(() => {
    if (!participant.name.trim() || !participant.email.trim() || !participant.phone.trim()) {
      navigate("/");
    }
  }, [participant]);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      dispatch(resetState());
    });
  });

  return (
    <div>
      <div className="fixed flex justify-center items-center top-0 left-0 right-0 bg-white">
        <img src={confetti} alt="confetti" />
      </div>

      <div className="relative z-20 px-6 mb-20">
        <div className="flex flex-col items-center mx-8 mt-14 bg-white p-10 rounded-2xl border border-blue-500">
          <img className="w-52 mb-10" src={prize} alt="" />
          <p className="text-center text-gray-800 text-lg font-medium mb-4">
            Congratulations! <br /> You have won a <span className="capitalize">{state?.gift}</span>
          </p>
        </div>
        <div className="mt-8">
          <p className="text-center font-bold text-xl text-gray-800 mb-6">
            Thank You For <br /> Your Participation!
          </p>
          <p className="text-center text-lg text-gray-500">
            Your Journey Begins Here: <br /> Explore Our Business and Products Today!
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="https://webappick.com/plugin/woocommerce-product-feed-pro/"
            className="border border-blue-500 rounded-lg px-5 py-2.5">
            <img src={ctxFeed} alt="ctx feed" />
          </a>
          <a
            href="https://webappick.com/plugin/woocommerce-pdf-invoice-packing-slips/"
            className="border border-blue-500 rounded-lg px-5 py-2.5">
            <img src={chalan} alt="ctx feed" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrizePage;
