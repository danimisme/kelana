"use client";
import { useEffect, useState } from "react";
import useAuth from "@/services/useAuth";
export default function UserPage() {
  const { userLog } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userLog("all-user", setUsers);
  }, []);

  return (
    <div className="mt-5 container-lg ">
      <div className="row py-3">
        <div className="col-lg-8 col-10 mx-auto">
          <h1>User Page</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={user.profilePictureUrl}
                      width={35}
                      height={35}
                      className="rounded-circle"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
