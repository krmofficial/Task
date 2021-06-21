import React,{useState} from 'react';

let ToDoList = () => {

    let [notes , setNotes] = useState({
       note : [],
        hId : []
    });

    let [list, setList] = useState([]);

    let handleInput = (e) => {
      setNotes({
          [e.target.name] : e.target.value
      })
    };


    let displayList = () => {
      let list =  JSON.parse(localStorage.getItem('task'));
        if(list == null){
            setList([]);
        }
        else{
            setList(list);
        }
    };

    let insertItem = () =>{
        list.unshift(notes.note);
        localStorage.setItem('task', JSON.stringify(list));
    };

    // submitNote
    let submitNote = (e) => {
        e.preventDefault();
        insertItem();
        displayList();
        setNotes({note : ''});
    };


    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">Note App</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitNote}>
                                    <div className="form-group">
                                        <input
                                            name='note'
                                            value={notes.note}
                                            onChange={handleInput}
                                            type="text" placeholder='Add Note Here' className='form-control'/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className='btn btn-primary' value="Add Note"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {
                            list.length > 0 ?
                               list.map((element, index)=>{
                                   return(
                                       <div className="mt-2" key={index}>
                                           <ol className="list-group">
                                               <li className="list-group-item list-group-item-primary" >
                                                   {element}
                                                   <button className="close" >
                                                       <i className="fa fa-times-circle"></i>
                                                   </button>
                                               </li>
                                           </ol>
                                       </div>
                                   )
                               })
                                : null
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ToDoList;