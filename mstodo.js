const circleBtn = document.querySelector('.fa-circle');
const chkBtn = document.querySelector('.fa-check-circle');
const addTodoBtn = document.querySelector('.fa-plus-square');
const inputText = document.querySelector('.todo__input');
var draggables = document.querySelectorAll('.todo');



// drag and drop
draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', ()=>{
		draggable.classList.add('dragging')
	})
})



// 할 일 추가하기
addTodoBtn.addEventListener('click', addTodo);

function checkButton(){
    if(circleBtn.style.display === 'none'){
        chkBtn.style.display = 'inline-block';
    }
    
};


function addTodo(event){

    if(inputText.value === ""){
        return;
    }

    let randomNum = Math.floor(Math.random() * 100);

    // li 태그 만들기
    const todoLi = document.createElement('li');
    todoLi.classList.add("todo");
    todoLi.draggable = true;

    // 체크박스 만들기
    const checkboxInput = document.createElement('INPUT');
    checkboxInput.type = "checkbox";
    checkboxInput.id = "chk" + randomNum;
    todoLi.appendChild(checkboxInput);

    // 라벨 만들기
    const label = document.createElement('label');
    label.htmlFor="chk" + randomNum;
    todoLi.appendChild(label);

    // div todo아이템콘텐트박스만들기
    const todoContentBox = document.createElement('div');
    todoContentBox.classList.add('item', 'todo__contentbox');

    // div 할일 컨텐트 태그 만들기
    const todoContent = document.createElement('div');
    todoContent.classList.add('todotext');
    todoContent.innerText = inputText.value;
    todoContentBox.appendChild(todoContent);

    // div 할 일 태그 만들기
    const divtodo = document.createElement('div');
    divtodo.innerText = '할 일';
    todoContentBox.appendChild(divtodo);
    todoLi.appendChild(todoContentBox);
    

    // 중요도 체크 태그만들기 
    const star = document.createElement('i');
    star.classList.add('item', 'far', 'fa-star');
    todoLi.appendChild(star);


    // todos 에 todo추가하기 
    document.querySelector('.todos').appendChild(todoLi);


    // clear Todo Input value
		inputText.value = "";
		

		draggables = document.querySelectorAll('.todo');
}

