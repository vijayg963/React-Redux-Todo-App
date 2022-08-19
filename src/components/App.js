import { connect } from 'react-redux';

function App(props) {
  function handleTodo(event) {
    if (event.keyCode === 13 && event.target.value) {
      props.dispatch({ type: 'add', todo: event.target.value });
      event.target.value = '';
    }
  }
  function handleRemove({ target }) {
    let { id } = target.dataset;
    props.dispatch({ type: 'remove', id: id });
  }
  function handleCompleted({ target }) {
    let { id, completed } = target.dataset;
    props.dispatch({
      type: 'toggle',
      isCompleted: completed === 'false' ? true : false,
      id: id,
    });
  }

  return (
    <>
      <div className='container'>
        <h1>My To Do List</h1>
        <input
          type='text'
          id='text'
          placeholder='Enter your todo'
          onKeyUp={handleTodo}
        />
        <ul className='todos'>
          {props.state.map((elm, i) => {
            console.log(elm);
            return (
              <li key={i} className='flex space-between'>
                <div>
                  <input
                    type='checkbox'
                    onClick={handleCompleted}
                    data-id={i}
                    data-completed={elm.isCompleted}
                    checked={elm.isCompleted ? true : false}
                  />
                  <span>{elm.todo}</span>
                </div>
                <p className='delete-todo' onClick={handleRemove} data-id={i}>
                  ❌
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    state: [...state],
  };
}

export default connect(mapStateToProps)(App);
