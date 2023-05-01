import PropTypes from 'prop-types';

const TodosList = (props) => {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
// TodosList.propTypes = {
//   todosProps: PropTypes.array.isRequired,
// };

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TodosList;
