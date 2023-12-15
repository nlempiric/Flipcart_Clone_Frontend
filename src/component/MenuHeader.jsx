import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";


const MenuHeader = () => {
  const [show, setShow] = useState(false);
  const [catName, setcatName] = useState("");
  const { categoryData } = useSelector((state) => state.root.categorydata);
  console.log("set", categoryData);

  const handleEvent = (categoryName) => {
    setcatName(categoryName);
  };
  console.log("categfs", catName);
  return (
    <>
      <div className="h-11 border-b border-gray-300 shadow-lg w-full flex items-center justify-between">
        <div className="relative flex justify-between w-full mx-48">
          {categoryData &&
            categoryData?.map((el, i) => (
              <>
                <div
                  
                  key={i}
                  onMouseEnter={() => handleEvent(el.name)}
                  onMouseLeave={() => setcatName("")}
                >
                  <li className="flex group  items-center gap-1 list-none group-hover:text-blue-600 py-2">{el.name}<RxCaretDown className="text-gray-500 transition-transform transform group-hover:rotate-180"/>
                  </li>
                  {el.children.length > 0 &&
                   catName == el.name ? (
                    <div className="absolute left-0 right-0 bg-white px-4 p-2 text-sm shadow-md border border-gray-200 leading-8">
                     
                        {el.children.map((el) => (
                          <>
                            <div className="float-left pr-10">
                              <p className="font-medium ">{el.name}</p>
                              <div>
                                {el.children.length > 0 &&
                                  el.children.map((el) => <div>{el.name}</div>)}
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  ) : null}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default MenuHeader;
