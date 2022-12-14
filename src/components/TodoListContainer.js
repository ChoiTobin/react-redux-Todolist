import React, {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteToDo, tobinTodo } from "../redux/modules/todos";
import { updateTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { Link } from "react-router-dom";


const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();


  

const working_list = todos.filter((todo) => todo.isdone == false).map((todo,id) =>
<StTodo key={todo.id}>
    <Link to= {`/Homepage/${todo.id}`} onClick={()=>{
      //jsx에서 템플릿 리터럴 쓰는법 중괄호안 +템플릿 리터럴 
      dispatch(
        tobinTodo({
          id:todo.id,
          title:todo.title,
          text:todo.text
        })
      )}}>상세보기
      </Link>
      <h1>{todo.title}</h1>
      {/* router연습 */}
      <div>{todo.text}</div>
      <button  onClick={()=>{
      dispatch(
        deleteToDo(
          todo.id
          //객체로 todo의 id를 주지않은 이유는 id만 필요해서이다 
          //dispatch를 통해서 todos.js에 Action creator에 
          //함수 매개변수인자로 들어가서 id로 들어간다.
        )
      )
                            }}>취소하기</button>
      <button onClick={()=>{
          dispatch(
            updateTodo({
              id:todo.id,
              isdone:todo.isdone = !todo.isdone
            }
            )
          )
        }}>{todo.isdone ? '취소':'완료'}
      </button>
  </StTodo> 
)

const working_list2 = todos.filter((todo) => todo.isdone == true).map((todo,id) =>
  <StTodo key={todo.id}>
    <Link to= {`/Homepage/${todo.id}`}  onClick={()=>{}}>상세보기</Link>
        <h1>{todo.title}</h1>
        <div>{todo.text}</div>
        <button  onClick={()=>{
        // console.log('***',todo.id)
        dispatch(
          deleteToDo(
            todo.id
            //객체로 todo의 id를 주지않은 이유는 id만 필요해서이다 
            //dispatch를 통해서 todos.js에 Action creator에 
            //함수 매개변수인자로 들어가서 id로 들어간다.
          )
        )
                              }}>취소하기</button>
        <button onClick={()=>{
            dispatch(
              updateTodo({
                id:todo.id,
                isdone:todo.isdone = !todo.isdone
              }
              )
            )
          }}>{todo.isdone ? '취소':'완료'}
        </button>
    </StTodo> 
)
  

  return (
    <div>
        <div>working</div>
      


        <StTodos>
          {working_list}
        </StTodos>
        <div>done</div>
        <StTodos>
          {working_list2}
        </StTodos>
    </div>
  )
};
//최대한 상세하게 설계 해보자..막히면 찾아보기
//=>로직 완료 버튼 클릭 하면 action을 만든다 onclick으로 각각의 요소를 만들어놓은 map안에서 dispatch를 보내주어 
//isdone: flase를 보내준다 => action creator로 그리고 action과 state를 계속 찍으면서 값이 들어왔나보고 
//**dispatch때 받아오는 action creator에 매개변수 잘넣어주기.그리고 isdone false만 넣어주면되나? 생각해보자
//id값 도 같이 넣어줘야한다 객체형식으로 매개변수에 줘야할듯.
//=>isdone이 true이면 밑으로 아니면 위로 =>효진님 방식으로 toggle
//우선 내부적으로 isdone이 false true를 각각의 요소에 적응 시키는것부터 목표. console.log에 찍는것
// 그다음 ui적으로 isdone이 true이면 여기서 보여주고 isdone이 false이면 이렇게 보여주고 하면될듯.
//=>done 그 item요소의 카드가 아래로내려간다.


export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 25%;
  height: 150px;
  
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
  `;
