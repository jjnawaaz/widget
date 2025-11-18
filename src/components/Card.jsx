import React from "react";
import Button from "./Button";
import { CircleEllipsis } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="flex ">
      <div className="p-3 flex justify-between gap-x-2 w-full overflow-hidden">
        {/* Left Image Section  */}
        <div className="w-1/3 min-w-24 bg-yellow-400">
          <img
            src="https://www.tableau.com/sites/default/files/2021-06/DataGlossary_Icons_Pie%20Chart.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Content Section  */}
        <div className="w-2/3 flex flex-col gap-y-3 text-[10px]">
          <h4>{data.type}</h4>
          <div className="flex flex-col gap-y-1">
            <h1 className="sm:text-sm">{data.title}</h1>
            <p>{data.content}</p>
          </div>
          <div className="flex justify-between">
            <button className="bg-white px-1 py-1 border-2 border-gray-300 rounded-md">
              <CircleEllipsis className="size-4 bg-transparent" />
            </button>
            <Link to={"/details/1"}>
              <Button
                bgColor={"bg-black"}
                textColor={"text-white"}
                text={"Add"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
