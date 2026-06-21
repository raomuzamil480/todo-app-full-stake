import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api';

function TodoList({ onLogout }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      if (editingId) {
        const todo = todos.find((t) => t.id === editingId);
        await updateTodo(editingId, { ...todo, title, description });
        setEditingId(null);
      } else {
        await createTodo({ title, description, completed: false });
      }
      setTitle('');
      setDescription('');
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleComplete = async (todo) => {
    await updateTodo(todo.id, { ...todo, completed: !todo.completed });
    fetchTodos();
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setTitle(todo.title);
    setDescription(todo.description || '');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Kya aap is todo ko delete karna chahte hain?')) {
      await deleteTodo(id);
      fetchTodos();
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>My Todo List</h1>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="form-buttons">
          <button type="submit">{editingId ? 'Update' : 'Add'} Todo</button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : todos.length === 0 ? (
        <p className="empty-msg">Koi todo nahi hai. Naya add karein!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div className="todo-content" onClick={() => handleToggleComplete(todo)}>
                <input type="checkbox" checked={todo.completed} readOnly />
                <div>
                  <strong>{todo.title}</strong>
                  {todo.description && <p>{todo.description}</p>}
                </div>
              </div>
              <div className="todo-actions">
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
