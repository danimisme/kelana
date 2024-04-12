"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "@/components/Fragments/CardActivity/CardActivity";

export default function ActivityPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);
  return (
    <div className="mt-5 container-lg">
      <div className="py-5">
        <h1>Activity Page</h1>
        <div className="row">
          {activities.map((activity) => (
            <CardActivity activity={activity} key={activity.id} />
          ))}
        </div>
      </div>
    </div>
  );
}