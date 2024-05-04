import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({
        tittle: "",
        desc: ""
    });

    const [todos, setTodos] = useState([])

    function sendTodo(e) {
        e.preventDefault()
        setTodos([...todos, form])

    }
    console.log(todos);
    return (
        <div className='main'>
            <form onSubmit={sendTodo}>
                <fieldset><legend>Add Todo</legend>
                    <input
                        type="text"
                        onChange={(e) => setForm({
                            ...form,
                            tittle: e.target.value
                        })}
                        placeholder='Tittle' />
                    <input
                        type="text"
                        onChange={(e) => setForm({
                            ...form,
                            desc: e.target.value
                        })}
                        placeholder='Description' />
                    <input type="submit" value={"Create Todo"} />

                </fieldset>
            </form>
            <div className='todos'>
                {
                    todos.map(todo => {
                        return (
                            <div className='todo'>
                                <h4>{todo.tittle}</h4>
                                <p>{todo.desc}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Form;
