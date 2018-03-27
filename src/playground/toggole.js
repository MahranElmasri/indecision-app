
let show=true
const toggole=()=>{
    show=!show
    render();
    // console.log(show)
}

const render=()=>{
    const app=(
        <div>
            <h1>Toggle Visibality</h1>
            <button onClick={toggole}>{show ?'Show details':'Hiden details'}</button>
            <p>{show ?'this text show here':''}</p>
           
        </div>
    )
    
    ReactDOM.render(app,document.getElementById('app'))
}
render();