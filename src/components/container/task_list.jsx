import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                <h2>Your Tasks:</h2>
            </div>
            {/* iterated the task list */}
            <TaskComponent task = { defaultTask }/>
        </div>
    );
};


export default TaskListComponent;
