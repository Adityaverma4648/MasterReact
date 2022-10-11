import './Clock.css'

function Clock(){
    return (
        <div className='clockCont'>
           <h4>My Time</h4>
           <span className="myTime">
           It is 
               {new Date().toLocaleTimeString()}
           </span>       
        </div>
     )
    }
export default Clock;
