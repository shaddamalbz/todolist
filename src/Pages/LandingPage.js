import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";

// Parts
const Dashboard = lazy(() => import("../Parts/Dashboard"));

export default function LandingPage() {
  const [activity, setActivity] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchActvity = async () => {
      const result = await axios(
        "https://todo.api.devcode.gethired.id/activity-groups?email=shaddamalghafiqih11@gmail.com"
      );
      setActivity(result.data);
      setHasLoaded(true);
    };
    if (!hasLoaded) {
      fetchActvity();
    }
  }, [hasLoaded]);

  const onAddActivity = async () => {
    try {
      await axios.post("https://todo.api.devcode.gethired.id/activity-groups", {
        title: "New Activity",
        email: "shaddamalghafiqih11@gmail.com",
      });
      setHasLoaded(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteActivity = async (id) => {
    try {
      await axios.delete(
        `https://todo.api.devcode.gethired.id/activity-groups/${id}`
      );
      setHasLoaded(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard
          activity={activity}
          onAddActivity={onAddActivity}
          onDeleteActivity={onDeleteActivity}
        />
      </Suspense>
    </>
  );
}
