import React from "react";

    // utils/getTaskDetails.js
export function getTaskDetails(task) {
  if (!task) return null;

  const now = new Date();
  const dueDate = new Date(task.dueDate);

  let status = "";
  if (task.completed) {
    status = "Done";
  } else if (dueDate < now) {
    status = "Overdue";
  } else {
    status = "Pending";
  }

  return {
    name: task.name || "Untitled Task",
    details: task.details || "No details provided.",
    status,
    dueDate: dueDate.toLocaleDateString(),
  };
}
