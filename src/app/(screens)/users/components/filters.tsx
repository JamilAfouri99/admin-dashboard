"use client";

import Input, { InputParams } from "admin/components/input";
import React, { useState } from "react";

function Filters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flexBetween">
      <FilterByName />
      <FilterByPhone />
      <FilterByRole />
    </div>
  );
}

const FilterByName = () => {
  const [filterByName, setFilterByName] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterByName(value);
  };

  const handleFilterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Filter submitted:", filterByName);
  };

  const icon = <i className="fa fa-user" aria-hidden="true"></i>;

  const inputProps: InputParams = {
    label: "Filter By Name",
    value: filterByName,
    onChange: handleFilterChange,
    onSubmit: handleFilterSubmit,
    icon: icon,
    placeholder: "Search by Name",
  };

  return <Input {...inputProps} />;
};
const FilterByPhone = () => {
  const [filterByPhone, setFilterByPhone] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterByPhone(value);
  };

  const handleFilterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Filter submitted:", filterByPhone);
  };

  const icon = <i className="fa fa-phone" aria-hidden="true"></i>;

  const inputProps: InputParams = {
    label: "Filter By Phone",
    value: filterByPhone,
    onChange: handleFilterChange,
    onSubmit: handleFilterSubmit,
    icon: icon,
    placeholder: "Search by Phone",
  };

  return <Input {...inputProps} />;
};

const FilterByRole = () => {
  const [filterByRole, setFilterByRole] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterByRole(value);
  };

  const handleFilterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Filter submitted:", filterByRole);
  };

  const icon = <i className="fa fa-adjust" aria-hidden="true"></i>;

  const inputProps: InputParams = {
    label: "Filter By Role",
    value: filterByRole,
    onChange: handleFilterChange,
    onSubmit: handleFilterSubmit,
    icon: icon,
    placeholder: "Search by Role",
  };

  return <Input {...inputProps} />;
};

export default Filters;
