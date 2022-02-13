import React from 'react'

const form = ({handleSubmit,todo, settodo, editId}) => {
    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text"  value={todo} onChange={(e) => settodo(e.target.value)} />
            <button type="submit">{editId? "Edit" : "GO"}</button>
        </form>
    )
}

export default form