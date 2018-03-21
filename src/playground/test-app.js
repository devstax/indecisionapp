const app = {
    title: 'Indecision App',
    subtitle: 'React',
    options: []
};

const onFromSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your option' : 'No options'}</p>
            <button disabled={app.options.length === 0 || app.options.length === 1} onClick={onMakeDecision}> What should I do?</button>
            <button onClick={onRemoveAll}> Remove All </button>
            <ol>
               {
                   app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol>
            <form onSubmit={onFromSubmit}>
                <input type="text" name="option"/>
                <button> Add Option </button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
};

render();
// Babel: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// Indecision-app/Public - Run a live-server


/*


renderCounterApp();
const user = {
    name: 'Stax',
    age: 20,
    location: 'London'
};

function getLocation(location){
if (location) {
    return location;
}else{
    return 'Unknown';
    }
}
const templateZwei = (
    <div>
        <h2> <a href="https://www.StaxCodes.com">StaxCodes</a> </h2>
        <p> Visit My Website </p>
        <p> { user.name ? user.name : 'Anonymous' } </p>
        {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}    
        <p> Location: {getLocation(user.location)}, United Kingdom </p>
    </div>
);
*/
