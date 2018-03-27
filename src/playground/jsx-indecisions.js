console.log('Hi')

//JSX 
var userName='MAhran';
var userAge=37;
var userLocation='Berlin'
var user={
    name:'Mark',
    age:33,
    location:'Berlin',
    options:[]
    
}
function getLocation(location){
    if(location){
        return location
    }
    return 'Unkown'
}
const addOption=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    console.log(option)
    if(option){
        user.options.push(option);
        e.target.elements.option.value='';
        console.log(user.options)
        renderApp()
    }
    
   
}
const removeAll=()=>{
    user.options=[];
    renderApp()

}
const shouldToDO=()=>{
    var rand=Math.floor(Math.random()*user.options.length)
    alert(user.options[rand])
}
const renderApp=()=>{
    var tamplete=
<div>
   <h1>Indecisions App</h1>
    <p>Put your life in the hands of a computer</p>
    <p>{user.options.length>0 ? 'Here are your options': 'no options'}</p>
    <p>total number of options is {user.options.length}</p>
    <button disabled={user.options.length===0} onClick={shouldToDO}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
       {user.options.map((option,key)=><li key>{option}</li>)}
    </ol>
    <form onSubmit={addOption}>
        <input type='text' name='option' />
        <button type='submit'>Add Option</button>
    </form>
</div>

ReactDOM.render(tamplete,document.getElementById('app'))
}

renderApp()