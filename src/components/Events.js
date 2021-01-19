import React, {useContext} from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = ({state, dispatch}) => {

  const value = useContext(AppContext) // AppContext.Consumer による記法より簡潔に書ける

  return (
    <>
    <div>{value}</div>
    {/* <AppContext.Consumer>
      {value => <div>{value}</div>}
    </AppContext.Consumer> */}


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
      </>
  )
}

export default Events