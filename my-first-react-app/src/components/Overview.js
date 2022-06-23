import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{tasks.indexOf(task) + 1} - {task.text}<button type="button" onClick={() => deleteTask(task.id)}>Delete</button></li>;
      })}
    </ul>
  );
};

export default Overview;