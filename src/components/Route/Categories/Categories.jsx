import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

       <div
      className={`${styles.section}  p-6 rounded-lg mb-12`}
      id="categories"
    >
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-6 xl:gap-[30px] mb-12 border-0">
        {categoriesData &&
          categoriesData.map((category) => {
            const handleSubmit = () => {
              navigate(`/products?category=${category.title}`);
            };

            return (
              <div
                key={category.id}
                onClick={handleSubmit}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className=" rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={category.image_Url}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h5 className="mt-3 text-sm text-center">{category.title}</h5>
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};

export default Categories;
