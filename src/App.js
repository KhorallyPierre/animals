function App(){
    // this is an eventhandler for when user clicks on something. 
    //it's a callback function (the purpose of this function is to be called 
    //automatically by some other piece of code 
    const handleClick = () => {
      console.log('the mouse mocws')  
    };
    return  <div> 
        {/* onClick is the event */}
        <button onClick={handleClick}> Add animal</button>
    </div>
    
}

export default App