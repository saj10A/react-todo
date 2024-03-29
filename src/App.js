import { useState } from "react";
import { TaskContext } from "./TaskContext";
import TaskItems from "./TaskItems";
import TopForm from "./TopForm";

const App = () => {

  const [taskItems, setTaskItems] = useState([
  {
    id: 1,
    title: "کار شماره ۱",
    done: false
  },
  {
    id: 2,
    title: "کار شماره ۲",
    done: true
  },
  {
    id: 3,
    title: "کار شماره ۳",
    done: false
  }
  ])
  return (
    <div className="container w-100 h-100 p-3">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
          <TaskContext.Provider value={{
            taskItems,
            setTaskItems
          }}>
            <TopForm />
            <TaskItems />
          </TaskContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
