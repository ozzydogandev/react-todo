import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './InputField.module.css';

function AddTodoForm({ onAddTodo }) {
  const[todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle });
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <div className={styles.formContainer}>
        <input
          type="text"
          value={todoTitle}
          onChange={handleTitleChange}
          placeholder=" "
          className={styles.inputField}
        />
        <label className={styles.inputLabel}>Title</label>
        <span className={styles.inputHighlight}></span>
      </div>
      <button type="submit" className={styles.addButton}>Add</button>
    </form>
  );
}


export default AddTodoForm;

