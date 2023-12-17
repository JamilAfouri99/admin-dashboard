"user client";

import React from "react";
import Filters from "./components/filters";
import Actions from "./components/actions";
import UserTable from "./components/table";
import { UsersApi } from "admin/services/api/users";
import { HttpService } from "admin/services/http/http_service";
import { asyncTryCatch } from "admin/utils/result";

async function handleUserFetch() {
  const userApi = new UsersApi();
  const findingUsers = await asyncTryCatch(() => userApi.get());
  if (findingUsers.isErr()) throw findingUsers.reason;
  console.log(findingUsers.value);
}

function Users() {
  return (
    <div className="bg-blue-50 min-h-screen p-8 w-full">
      <button onClick={() => handleUserFetch()}>Fetch Users</button>
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
