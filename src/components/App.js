import React, {useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_EVENT', // 必須
      title,
      body
    })

    setTitle('')
    setBody('')
  }


  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-gourp">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-gourp">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>

      </form>

      <h4>イベント一覧</h4>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          {/* {

            state.map((event, index) => { // => (...) : => {return ...multi-line...} の省略記法

              const {id, title, body} = event
              const handleClickDeleteButton = () => {
                dispatch({type: 'DELETE_EVENT', id})
              }

              return <tr key={index}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
                <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
              </tr>
            })
          } */}
        </tbody>
      </table>
    </div>
  )
}

export default App
