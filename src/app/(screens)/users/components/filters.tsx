import React from "react";

function Filters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flexBetween">
      <FilterByName />
      <FilterByRole />
      <FilterByPhone />
    </div>
  );
}
const FilterByName = () => {
  return (
    <form className="flex-1">
      <label
        htmlFor="Filter"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Filter By Name
      </label>
      <div className="relative">
        <FilterIcon />
        <input
          type="FilterByName"
          id="FilterByName"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Filter By Name"
          required
        />
      </div>
    </form>
  );
};
const FilterByRole = () => {
  return (
    <form className="flex-1">
      <label
        htmlFor="Filter"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Filter By Role
      </label>
      <div className="relative">
        <FilterIcon />
        <input
          type="FilterByRole"
          id="FilterByRole"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Filter By Role"
          required
        />
      </div>
    </form>
  );
};
const FilterByPhone = () => {
  return (
    <form className="flex-1">
      <label
        htmlFor="Filter"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Filter By Phone
      </label>
      <div className="relative">
        <FilterIcon />
        <input
          type="FilterByPhone"
          id="FilterByPhone"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Filter By Phone"
          required
        />
      </div>
    </form>
  );
};

const FilterIcon = () => {
  return (
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
  );
};
export default Filters;
