import { CircleEllipsis, X } from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";
import { data } from "./utils/data";
import XMark from "./components/XMark";

function Home() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="px-1 py-2 flex justify-between items-center">
          <div className="font-semibold">Add widget</div>
          <XMark />
        </div>
        {/* Filter */}
        <div className=" w-full overflow-hidden">
          <div className="flex items-center container justify-between p-2 sm:mx-auto">
            {data.map((item) => (
              <div
                className="text-[7px] sm:text-xs  bg-gray-100 rounded-sm px-3 py-2 sm:px-2 sm:py-2"
                key={item}
              >
                {item.type}
              </div>
            ))}
            <div className="text-[7px] sm:text-xs bg-gray-100 rounded-lg p-2">
              +3
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-3">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
