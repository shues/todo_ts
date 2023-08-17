import React from "react";

interface addFormProps {
    newTask:(s:string)=>void
}

function AddForm({newTask}:addFormProps) {
    const [taskName, setTaskName] = React.useState<string>('');

    function hendleSubmit(e:any) {
        e.preventDefault();
        newTask(taskName);
        setTaskName('');
    }

    return (<form onSubmit={hendleSubmit}>
        <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
        <input type="submit" value="add todo"/>
    </form>)
}

export default AddForm;