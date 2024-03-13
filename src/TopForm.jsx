import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TopForm = () => {

    const [task, setTask] = useState("");

    const {taskItems, setTaskItems} = useContext(TaskContext);

    const handleSetTask = (e) => {
        setTask(e.target.value);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskItems([...taskItems, {id: Math.random(), title: task, done: false}]);
        setTask("");
    }

    return (
        <>
            <h4 className="text-center text-info text_shadow">به کدیاد خوش آمدید</h4>
            <form>
                <div className="form-group d-flex">
                    <input type="text" id="inputTask" className="form-control" value={task} onChange={handleSetTask}></input>
                    <button type="submit" className="btn btn-success me-1" onClick={handleAddTask}>ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;