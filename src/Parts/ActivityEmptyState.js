import React from "react";

import EmptyState from "../assets/images/activity-empty-state.webp";

export default function ActivityEmptyState() {
  return (
    <main className="text-center">
      <img src={EmptyState} alt="illustration people standing" width="600px" />
    </main>
  );
}
