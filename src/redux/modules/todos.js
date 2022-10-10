// Action value
const ADD_TODO = "ADD_TODO";
const DELETE = "DELETE";

// Action Creator
export const addTodo = (payload) => {  
  return { type: ADD_TODO,payload };
};

export const deleteToDo=(id)=>{
  return{
      type :DELETE,
      id:id
  };
};


// 1. useSelector로 받아오는 todos 콘솔찍어서 create할때 id값 증가하는지 확인.

// 2. id값이 증가한다면 삭제하기 버튼에서 onClick={() => console.log(todo.id)} 이런식으로 콘솔찍어서 내가 선택한 카드의 id값이 맞는지 확인

// 3. dispatch로 id값 실어 보내기

// 4. reducer에서 action, state 값 콘솔찍어서 확인! => 이때 콘솔은 return위에서 찍으면 됩니다 ex) case DELETE_TODO:
// console.log(action, state);
// return {....~ };

//시작할때 부분을  length로 줘도되고 항상 action과 state를 console.log()찍고 useSelector를 통해서 onclick할때 숫자가 올라가는걸보고 
//다시 onclick에 dispatch를 통해서 filter에 넣고 돌린다. 
//늘action과 state값을 콘솔로 찍기 그리고 좀더 세세하게 객체인지 배열인지 데이터를 어떻게 보낼지 생각하기.


// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react공부하기",
      text:'리액트 기초를 공부합시다.',
      isdone:false
    },
    {
      id: 2,
      title: "react공부하기",
      text:'리액트 기초를 공부합시다.',
      isdone:false
    },
  ],
};

// Reducer


const todos = (state = initialState, action) => {

  //첫번째는 각액션에대한 업데이트 함수, 두번째는 action => 파라미터의 초기상태 
  switch (action.type) {
    
    case ADD_TODO:
    return {
        ...state,
        todos: [...state.todos, action.payload],
        
        //action.payload 변형을 주어서 넣기   
      };
      case DELETE:
        console.log('구분',action)
        return {
          ...state,
          todos: [ ...state.todos.filter(todo => todo.id !== state.id)]  
        };
      
    default: 
      return state
  }
  };


export default todos;