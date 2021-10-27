import React from "react";

import EmptyState from "../assets/images/todo-empty-state.webp";

export default function ActivityEmptyState({ datacy }) {
  return (
    <main className="text-center" data-cy={datacy}>
      <img
        src={EmptyState}
        alt="illustration people standing"
        data-cy="todo-empty-state"
        width="600px"
      />
    </main>
  );
}
