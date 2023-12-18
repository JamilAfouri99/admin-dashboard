"use client";

import React from "react";
import Filters from "./components/filters";
import Actions from "./components/actions";
import UserTable from "./components/table";
import { UsersApi } from "admin/services/api/users";
import { asyncTryCatch } from "admin/utils/result";

async function handleUserFetch() {
  const userApi = new UsersApi();
  const findingUsers = await asyncTryCatch(() => userApi.get());
  console.log("findingUsers");
  console.log(findingUsers);
  if (findingUsers.isErr()) throw findingUsers.reason;
  console.log(findingUsers.value);
}

function Users() {
  return (
    <div className={`bg-secondary min-h-screen p-8 w-full`}>
      <Filters />
      <Actions />
      <UserTable />
      {/* Pagination Section */}
    </div>
  );
}

const Section = () => {
  return <div>This is only for testing</div>;
};

export default Users;
