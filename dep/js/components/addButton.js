import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ShowCount from './showCount'

// const getVisibleTodos = (count, filter) => {
//   return count++;
// }

const mapStateToProps = (state) => {
  return {
    count: state.dealNumber.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (count) => {
        dispatch(toggleTodo(count))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCount)

export default VisibleTodoList