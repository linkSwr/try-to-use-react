let count = 0;

export const toggleTodo = () => {
    return {
        type: 'ADD',
        count: ++count
    }
}