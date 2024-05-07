/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import chalan from "../assets/images/chalan_pro.png";
import confetti from "../assets/images/confetti.png";
import ctxFeed from "../assets/images/ctx_feed.png";
import notepad from "../assets/images/notepad.png";
import share from "../assets/images/share.svg";
import sticker from "../assets/images/sticker.png";
import tshirt from "../assets/images/tshirt.png";
import { resetState } from "../features/participant/participantSlice";

const PrizePage = () => {
  const participant = useSelector((state) => state.participant);
  const dispatch = useDispatch();

  const [prize, setPrize] = useState("");
  const [link, setLink] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.gift) {
      navigate("/");
    }
    if (state?.gift) {
      if (state.gift === "tshirt") {
        setPrize(tshirt);
        setLink("tshirt");
      }
      if (state.gift === "notepad") {
        setPrize(notepad);
        setLink("notepad");
      }
      if (state.gift === "sticker") {
        setPrize(sticker);
        setLink("sticker");
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
        <div className="flex flex-col items-center mx-8 mt-10 bg-white p-6 rounded-2xl border border-blue-500">
          <img className="w-52 mb-6" src={prize} alt="Winning Gift" />
          <p className="text-center text-gray-800 text-lg font-medium">
            Congratulations! <br /> You have won a <span className="capitalize">{state?.gift}</span>
          </p>
        </div>
        <div className="mt-8">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.webappick.info/pages/${link}.html&hashtag=%23WebAppick`}
            className="flex justify-center gap-2  bg-blue-600 w-full rounded-xl text-white text-center p-3">
            <img src={share} alt="share" />
            <span>Share On Facebook</span>
          </a>
          <p className="text-center font-bold text-xl text-gray-800 mt-5">Thank You For Your Participation!</p>
        </div>

        <div className="mt-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-3">Explore Our Business and Products Today!</p>
          <div className="flex gap-4">
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
    </div>
  );
};

export default PrizePage;
