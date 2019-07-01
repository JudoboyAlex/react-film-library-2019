import React, {useState} from "react";

const Fave = ({ onFaveToggle }) => {

    const [isFave, setIsFave] = useState(false)

  const handleClick = (event) => {

    console.log("handling Fave click!");
    event.stopPropagation();

    
    if (isFave === false){
        setIsFave(true);
        event.target.classList.add('remove_from_queue')
        event.target.classList.remove('add_from_queue')
        event.target.innerText = 'remove_from_queue'
    } else if (isFave === true){
        setIsFave(false)
        event.target.classList.add('add_from_queue')
        event.target.classList.remove('remove_from_queue')
        event.target.innerText = 'add_to_queue'
    }
        console.log(event.target);
        
        // onFaveToggle()
  };

  return (
    <div onClick={handleClick} className="film-row-fave">
      <i className="material-icons">add_to_queue</i>
    </div>
  );
};

export default Fave;




