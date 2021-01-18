import React from 'react'

const Event = ({ event, dispatch }) => {
  const {id, title, body } = event
  const handleClickDeleteButton = () => {
    dispatch({type: 'DELETE_EVENT', id})
  }

  return <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{body}</td>
    <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
  </tr>

}

export default Event
