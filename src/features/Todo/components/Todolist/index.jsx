import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

Todolist.propTypes = {
    todolist:PropTypes.array,
    
};
Todolist.defaultProps = {
    todolist:[],
};
function Todolist({todolist}) {
    /*  */
    return (
        <div>
            <ul className='todo-list'>
                {todolist.map(todo => (
                    /* moi khi render 1 mang phai co KEY*/
                    // trong classname truyen vao 1 obj chua cai key(ten class muon them vao) muon truyen vao
                     <li key={todo.id}className={classnames({
                        'todo-item': true,
                        old: todo.status === 'old'
                    })}>{todo.name}-{todo.born}</li>

                ))}
            </ul>
        </div>
    );
}

export default Todolist;