import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import { ArrowLeft, X } from "lucide-react";

const Details = () => {
  // will fetch data using this id
  //   const { id } = useParams();
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="container w-full h-auto p-3 mx-auto">
        {/* Details Header */}
        <div className="flex justify-between">
          <div className="flex gap-x-2 text-xs items-center text-gray-600 font-medium">
            <Link to="/" className="flex gap-x-1">
              <div className="">
                <ArrowLeft className="size-4" />
              </div>
              <div>Back</div>
            </Link>
          </div>
          <div className="p-2">
            <div className="border-[1px] border-gray-300 rounded-full p-1">
              <X className="size-4" />
            </div>
          </div>
        </div>
        {/* Refunds and Chargebacks  */}
        <div className="flex flex-col px-2 py-1 gap-y-2">
          <h1 className="text-md font-medium">Refunds and Chargebacks</h1>
          <div className="flex flex-col text-[10px] text-gray-600">
            <p>
              Understand how much revenue is lost due to refunds and disputes.
            </p>
            <p>Identify risky segments and reduce unnecessary churn</p>
          </div>
        </div>
        {/* Button Uptop  */}
        <div className="bg-gray-300 p-1 rounded-lg h-12 ">
          <div className="flex items-center justify-between text-[10px] gap-x-3 h-full">
            <div
              className={`${
                selected1 ? "bg-white" : ""
              } w-full flex justify-center rounded-md px-2 h-full items-center transition-all duration-300`}
              onClick={() => {
                setSelected1((prev) => !prev);
                setSelected2(false);
                setSelected3(false);
              }}
            >
              Data
            </div>
            <div
              className={`${
                selected2 ? "bg-white" : ""
              } w-full flex justify-center rounded-md px-2 h-full items-center transition-all duration-300`}
              onClick={() => {
                setSelected2((prev) => !prev);
                setSelected1(false);
                setSelected3(false);
              }}
            >
              Style
            </div>
            <div
              className={`${
                selected3 ? "bg-white" : ""
              } w-full flex justify-center rounded-md px-2 h-full items-center transition-all duration-300`}
              onClick={() => {
                setSelected3((prev) => !prev);
                setSelected1(false);
                setSelected2(false);
              }}
            >
              Settings
            </div>
          </div>
        </div>
        {/* Details Hero Component  */}
        <div className="mt-3 rounded-lg overflow-hidden">
          <div className="p-3 bg-yellow-200 flex flex-col gap-3">
            <h1 className="text-center text-[10px]">Preview</h1>
            <div className="bg-white rounded-md flex justify-between overflow-hidden">
              <div className="w-1/3">
                <div className="flex flex-col justify-center items-center h-full bg-green-20 p-2 gap-3">
                  <div className="bg-slate-100 h-1/2 w-full text-xs flex gap-1 p-1">
                    <div className="text-[5px]">Icon</div>
                    <div className="flex flex-col">
                      <h1 className="text-[7px]">Refunds</h1>
                      <h1>$3600</h1>
                      <div className="flex gap-1">
                        <div className="text-[4px]">Icon</div>
                        <div className="text-[5px]">High risk $500</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-400 h-1/2 w-full text-xs flex gap-1 p-1">
                    <div className="text-[5px]">Icon</div>
                    <div className="flex flex-col">
                      <h1 className="text-[7px]">Refunds</h1>
                      <h1 className="text-sm">$3600</h1>
                      <div className="flex gap-1">
                        <div className="text-[4px]">Icon</div>
                        <div className="text-[5px]">High risk $500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex-1">
                <img
                  src="https://www.mathworks.com/help/examples/graphics/win64/PiechartSimpleExample_01.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Details Section */}
        <div className="p-1">
          <div className="text-sm font-medium">Business unit / channel</div>
          <div className="flex gap-3 text-md justify-between pr-10 mt-2">
            {[0, 1, 2, 3].map((item) => (
              <>
                <div
                  className="bg-white px-3 py-2 rounded-full shadow-md shadow-gray-400"
                  key={item}
                >
                  Text
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Cards  */}
        <div>
          {[0, 1].map((item) => (
            <>
              <div
                className=" h-20 w-full mt-3 border-t-[1px] border-gray-400"
                key={item}
              >
                <h1 className="font-medium text-sm mt-2">
                  Highlight high-risk transactions
                </h1>
                <h1 className="text-xs text-gray-600 font-medium">
                  Mark transactions that are flagged as high risk in this widget
                </h1>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-end items-center gap-x-3">
          <Button
            bgColor={"bg-white"}
            textColor={"text-black"}
            text={"Cancel"}
          />
          <Button bgColor={"bg-black"} textColor={"text-white"} text={"Save"} />
        </div>
      </div>
    </div>
  );
};

export default Details;
