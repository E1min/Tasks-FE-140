import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({
        id:1,
        tittle: "",
        desc: ""
    });

    const [todos, setTodos] = useState([])

    function sendTodo(e) {
        e.preventDefault()
        document.getElementById("tittleInput").value = "";
        document.getElementById("descInput").value = "";
        setTodos([...todos, form]);
        setForm({
            id:1,
            tittle:"",
            desc:""
        })
    }
    
    return (
        <div className='main'>
            <form onSubmit={sendTodo}>
                <fieldset><legend>Add Todo</legend>
                    <input
                        id='tittleInput'
                        type="text"
                        onChange={(e) => setForm({
                            ...form,
                            tittle: e.target.value
                        })}
                        placeholder='Tittle' />
                    <input
                        id='descInput'
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
                            <div className='todo' key={todo.id+=1} >
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
