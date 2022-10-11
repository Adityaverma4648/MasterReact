// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
         <h4 className="heading">
             Art Blog - 001
         </h4>
         <h5 className="author">
            Author : {name}
         </h5> 
         <span>
             his Full Name is {NameHandler(user)}
         </span>
      </header>
    </div>
  );
}
function NameHandler(user){
  return user.firstName + " " + user.lastName;
}

const name = 'Aditya';
const user = {
  firstName : 'Aditya',
  lastName : 'verma' 
};



export default App;
