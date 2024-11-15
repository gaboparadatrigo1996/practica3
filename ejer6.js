import React, { useState } from 'react';
import { X, Plus, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Completar la práctica-1', completed: true },
    { id: 2, text: 'Termina la práctica', completed: false },
    { id: 3, text: 'Repasar', completed: false }
  ]);
  
  const [newTask, setNewTask] = useState('');
  
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false
      }]);
      setNewTask('');
    }
  };
  
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/api/placeholder/48/48"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">gabriel parada</h3>
            <p className="text-sm text-gray-500">@gabrielparada</p>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Globe size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Task Management Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Tareas</h2>
        <div className="text-xl font-semibold">Progreso</div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-auto text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="#3b82f6"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-blue-500">
              {progress}%
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea..."
          className="flex-1 p-2 border rounded"
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button
          onClick={addTask}
          className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus size={16} />
          Añadir nueva tarea
        </button>
      </div>
      
      <div className="mt-2 text-sm text-gray-500">
        {completedTasks} finalizadas, {tasks.length - completedTasks} en progreso
      </div>
    </div>
  );
};

export default TodoList;