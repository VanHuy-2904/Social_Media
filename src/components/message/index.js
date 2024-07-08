import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Message({ user }) {
  console.log(user);
  return (
    <>
      {/* {user &&
        user.map((item, index) => ( */}
      <div
        className={`bg-white h-[320px] rounded-md w-[250px] shadow-gray-600 shadow-lg border-2 flex-col`}
      >
        <div className="flex border-b-[2px] shadow-gray-200 shadow-md justify-between">
          <div className="flex">
            <div className="rounded-full w-9 h-9 m-2  ">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                alt=""
              />
            </div>
            <div className="flex items-center text-sm w-[100px] font-medium">
              <p className="w-full">{user.name}</p>
            </div>
          </div>
          <button className="flex items-center mr-2 text-xl">x</button>
        </div>
        <div className="overflow-auto mb-2 h-[215px]">
          <div className="flex items-center ">
            <div className="rounded-full w-8 h-8 m-2 ">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                alt=""
              />
            </div>
            <p className="text-xs">fashjkdsa</p>
          </div>
          <div className="flex items-center justify-end ">
            <p className="text-xs">fashjkdsa</p>
            <div className="rounded-full w-8 h-8 m-2 ">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex">
            <input
              placeholder="Aa"
              className="bg-slate-200 border-0 outline-0 text-[13px] p-2 rounded-xl left-2 grow"
            />
            <div className="ml-2 mr-2 flex items-center justify-center">
              <FontAwesomeIcon
                className="text-sky-700 flex "
                icon={faPaperPlane}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  );
}
