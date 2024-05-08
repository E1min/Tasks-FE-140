import React, { useEffect, useState } from 'react'

function Form() {
    const [form, setForm] = useState({
        tittle: "",
        desc: ""
    });

    
    const [todos, setTodos] = useState([])
    
    const [isVisible, setIsvisible] = useState(false)


function clicked() {
         setIsvisible(!isVisible)
        }
    

    function sendTodo(e) {
        e.preventDefault()
        document.getElementById("tittleInput").value = "";
        document.getElementById("descInput").value = "";
        setTodos([...todos, form]);
        setForm({
            tittle: "",
            desc: ""
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
                    todos.map((todo, index) => {
                        return (
                            <div className='todo' key={index} onClick={clicked}>
                                <h4 >{todo.tittle}</h4>
                                {isVisible ? <p >{todo.desc}</p> : null}
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Form;
