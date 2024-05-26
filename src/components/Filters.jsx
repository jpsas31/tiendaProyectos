import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import FormCheckbox from "./FormCheckbox";
import FormDatePicker from "./FormDatePicker";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "Online Education",
    "IT Services",
    "Art",
    "Virtual Healthcare Consultation",
    "Remote Financial Advisory",
    "Digital Marketing Services",
    "Cloud Computing Services",
    "Online Counseling",
    "Web Development Services",
    "E-commerce Solutions",
    "Online Fitness Training",
    "Virtual Event Planning",
    "Multimedia"
]);
 
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
  
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["asc", "desc", "price high", "price low"]}
        size="select-sm"
        defaultValue="a-z"
      />
     
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={2000}
      />
     

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        search
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
