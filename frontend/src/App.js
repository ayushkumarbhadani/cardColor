import {useState,useRef} from 'react';
import "./App.css";
import { FaSearch,FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const App = () => {
  const colorRef=useRef(null);
  const menuRef=useRef(null);
  const countRef=useRef(null);
  const [current,setCurrent]=useState({
    color:"#CD7F32",
    title:"The Blue Carbuncle",
    description:"The color of Passion and Energy."
  });
  const [allCard,setAllCard]=useState([]);
  const closeMenu=()=>{
    menuRef.current.style.display="none";
  }
  const showMenu=()=>{
    menuRef.current.style.display="block";
  }
  const selectColor=(e)=>{
    setCurrent(old=>{
      return { ...old, color:e.target.value};
    });
  }
  const currentTitle=(e)=>{
    setCurrent(old=>{
      return { ...old, title:e.target.value};
    });
  }
  const currentDescription=(e)=>{
    if(e.target.value.length>300){
      return;
    }
    countRef.current.innerHTML=e.target.value.length + "/300";
    setCurrent(old=>{
      return { ...old, description:e.target.value};
    });
  }
  const saveCurrent=()=>{
    setAllCard(old=>{
      return [...old,current];
    })
  }
  return (
    <section>
      <div className="searchBox">
        <label>
          <FaSearch />
        </label>
        <input type="search" placeholder="Search"/>
      </div>

     <button className="createCard" onClick={showMenu}><FaPlus/> Create a colour card</button>
     <div className="menu" ref={menuRef}>
        <div className="menuHeading">
          <button className="crossBtn" onClick={()=>{closeMenu();}}><ImCross/></button>
          Create a color card
        </div>
        <div className="selectColor">
          Select the Color<br/>
          <div style={{display:"none"}}>
            <input type="radio" name="color" value="#CD7F32" id="color1" onClick={(e)=>selectColor(e)}/>
            <input type="radio" name="color" value="#C8A2C8" id="color2" onClick={(e)=>selectColor(e)}/>
            <input type="radio" name="color" value="#F8ED62" id="color3" onClick={(e)=>selectColor(e)}/>
            <input type="radio" name="color" value="#FF0000" id="color4" onClick={(e)=>selectColor(e)}/>
            <input type="radio" name="color" value="#0033FF" id="color5" onClick={(e)=>selectColor(e)}/>
          </div>
          <div className="selectColorBox">
            <label style={{backgroundColor:"#CD7F32"}} className="choseColor" htmlFor="color1"></label>
            <label style={{backgroundColor:"#C8A2C8"}} className="choseColor" htmlFor="color2"></label>
            <label style={{backgroundColor:"#F8ED62"}} className="choseColor" htmlFor="color3"></label>
            <label style={{backgroundColor:"#FF0000"}} className="choseColor" htmlFor="color4"></label>
            <label style={{backgroundColor:"#0033FF"}} className="choseColor" htmlFor="color5"></label>
          </div>
        </div>
        <div className='title'>
          <div>Give a Title</div>
          <input type="text" onChange={(e)=>{currentTitle(e)}} value={current.title}/>
        </div>
        <div className='description'>
          <div>Discription</div>
          <textarea onChange={(e)=>{currentDescription(e)}} value={current.description}></textarea>
          <span className='wordCount' ref={countRef}>0/300</span>
        </div>
        <div className='saveAndCancleBtns'>
          <button onClick={()=>{saveCurrent();}} className="saveBtn">
            Save
          </button>
          <button className="cancleBtn" onClick={closeMenu}>
            Cancel
          </button>
        </div>
     </div>
     <div className='cardContainer'>
      {
        allCard.map((item,index)=>{
          return(
            <div className='card' key={index}>
              <div style={{backgroundColor:item.color, height:"100px",width:"100px", borderRadius:"1rem"}}></div>
              <div className='cardDesc'> {item.description}</div>
            </div>
          )
        })
      }
      </div>
    </section>
  )

}

export default App;