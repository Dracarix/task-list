const taskkInput = document.querySelector('#taskInput');
const adTask = document.querySelector('.input-container');
const ttaskList = document.querySelector('#taskList');

adTask.addEventListener('submit', addZadacha);
taskkInput.focus();
let ok = false;

function addZadacha(event) {
    event.preventDefault();
    const tasktext = taskkInput.value.trim();
    
    //добавить лист в список
    if(tasktext !== ''){
        const li = document.createElement('li');
        li.classList.add('task-text')
        li.innerText = tasktext;
        li.setAttribute('data-done', 'false');
        taskkInput.value = ``;
        taskkInput.focus();
        taskkInput.setAttribute('placeholder', 'Добавить задачу')

        //добавляем кнопку удаления листа

        const dltBtn = document.createElement('button');
        dltBtn.classList.add('delete-button');
        dltBtn.setAttribute('role', 'button');
        dltBtn.innerText = ' 🗑️';
        dltBtn.addEventListener('click', deleteLi);

        li.append(dltBtn); 
    
        //добавить кнопку выполнения задач

        const completeZadacha = document.createElement('button');
        completeZadacha.classList.add('done-button');
        completeZadacha.setAttribute('role', 'button');
        completeZadacha.innerText = '✔️'
        completeZadacha.addEventListener('click', completed)
        li.append(completeZadacha);
        
        ttaskList.append(li);
    }else{
        taskkInput.focus();
        taskkInput.setAttribute('placeholder', 'Сначала надо написать хоть что то то)')
        
    }
};
//функция удаления листа
function deleteLi(){
    this.closest('li').remove();
};
//выполнение задач
function completed(){
    const listItem = this.closest('li');
    const isDone = listItem.getAttribute('data-done') === 'true';
    if(!isDone){
        listItem.classList.add('done');
        listItem.setAttribute('data-done', 'true');
    }else{
        listItem.classList.remove('done');
        listItem.setAttribute('data-done', 'false');
    }
}

