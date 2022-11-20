import React,{useState,useRef,useEffect} from 'react';
import "./App.css";
import { FaSearch,FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const App = () => {
  const countTextBox=useRef(null);
  const menuRef=useRef(null);
  const countRef=useRef(null);
  const saveRef=useRef(null);
  const [defaultData,setDefaultData]=useState({
    "data": [
      {
        "id": "1",
        "name": "Bronze",
        "code": "#CD7F32",
        "data": [
          {
            "quality": "SYMBOLIZES",
            "traits": [
              "STRENGTH",
              "LOYALTY",
              "SUPPORT",
              "STABILITY"
            ]
          },
          {
            "quality": "EFFECTS",
            "traits": [
              "SOOTHES",
              "INSPIRES",
              "UPLIFTS",
              "MOTIVATES"
            ]
          },
          {
            "quality": "POSITIVE",
            "traits": [
              "COMFORTING",
              "RELIABLE",
              "ELEGANT",
              "TRUTHFUL"
            ]
          },
          {
            "quality": "NEGATIVE",
            "traits": [
              "BOASTFUL",
              "CHEAP",
              "UPTIGHT",
              "TIGHT-FISTED"
            ]
          }
        ]
      },
      {
        "id": "2",
        "name": "Lilac",
        "code": "#C8A2C8",
        "data": [
          {
            "quality": "SYMBOLIZES",
            "traits": [
              "HELPFULNESS",
              "KINDNESS",
              "SERENITY",
              "COMPASSION"
            ]
          },
          {
            "quality": "EFFECTS",
            "traits": [
              "RELAXES",
              "INSPIRES",
              "UPLIFTS",
              "SOOTHES"
            ]
          },
          {
            "quality": "POSITIVE",
            "traits": [
              "EMPATHETIC",
              "FEARLESS",
              "HELPFUL",
              "OPTIMISTIC"
            ]
          },
          {
            "quality": "NEGATIVE",
            "traits": [
              "INEXPERIENCED",
              "FRAGILE",
              "INFANTILE",
              "UNPREDICTABLE"
            ]
          }
        ]
      },
      {
        "id": "3",
        "name": "Yellow",
        "code": "#F8ED62",
        "data": [
          {
            "quality": "SYMBOLIZES",
            "traits": [
              "HAPPINESS",
              "OPTIMISM",
              "POSITIVITY",
              "INTELLECT"
            ]
          },
          {
            "quality": "EFFECTS",
            "traits": [
              "CLARIFIES",
              "INSPIRES",
              "AMUSES",
              "ENERGIZES"
            ]
          },
          {
            "quality": "POSITIVE",
            "traits": [
              "CREATIVITY",
              "PERCEPTION",
              "MENTALITY",
              "WARMTH"
            ]
          },
          {
            "quality": "NEGATIVE",
            "traits": [
              "COWARDICE",
              "DECEPTION",
              "EGOTISM",
              "CAUTION"
            ]
          }
        ]
      },
      {
        "id": "4",
        "name": "Red",
        "code": "#FF0000",
        "data": [
          {
            "quality": "SYMBOLIZES",
            "traits": [
              "ACTION",
              "STRENGTH",
              "ENERGY",
              "PASSION"
            ]
          },
          {
            "quality": "EFFECTS",
            "traits": [
              "ATTENTION",
              "MOTIVATES",
              "STIMULATES",
              "CAUTIONS"
            ]
          },
          {
            "quality": "POSITIVE",
            "traits": [
              "SEXUALITY",
              "COURAGE",
              "DESIRE",
              "CONFIDENCE"
            ]
          },
          {
            "quality": "NEGATIVE",
            "traits": [
              "ANGER",
              "DANGER",
              "REVENGE",
              "AGGRESSION"
            ]
          }
        ]
      },
      {
        "id": "5",
        "name": "Blue",
        "code": "#0033FF",
        "data": [
          {
            "quality": "SYMBOLIZES",
            "traits": [
              "SECURITY",
              "TRUST",
              "LOYALTY",
              "RESPONSIBLE"
            ]
          },
          {
            "quality": "EFFECTS",
            "traits": [
              "PROTECTS",
              "CALMS",
              "RELAXES",
              "SUPPORTS"
            ]
          },
          {
            "quality": "POSITIVE",
            "traits": [
              "CONFIDENCE",
              "PEACE",
              "HONESTY",
              "RELIABILITY"
            ]
          },
          {
            "quality": "NEGATIVE",
            "traits": [
              "CONSERVATIVE",
              "PASSIVE",
              "DEPRESSED",
              "PREDICTABLE"
            ]
          }
        ]
      }
    ]
  });
  const [current,setCurrent]=useState({
    color:"#CD7F32",
    title:"The Blue Carbuncle",
    description:"The color of Passion and Energy."
  });
  const [allCard,setAllCard]=useState([]);
  useEffect(()=>{
    menuRef.current.style.display="none";
    countRef.current.innerHTML=countTextBox.current.value.length + "/300";
    saveRef.current.style.color=current.color;
  },[]);
  const closeMenu=()=>{
    menuRef.current.style.opacity="0";
    setTimeout(()=>menuRef.current.style.display="none",500);
    
  }
  const showMenu=()=>{
    menuRef.current.style.display="block";
    menuRef.current.style.opacity="100%";
  }
  const selectColor=(e)=>{
    setCurrent(old=>{
      return { ...old, color:e.target.value};
    });
    saveRef.current.style.color=e.target.value;
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
    });
    closeMenu();
  }
  const showMore=(e)=>{
    console.dir(e.target)
    if(e.target.previousElementSibling.style.display==="block")
      e.target.previousElementSibling.style.display="none";
    else if(e.target.previousElementSibling.style.display==="none")
      e.target.previousElementSibling.style.display="block";
    else{
      console.log("Here!");
      e.target.previousElementSibling.style.display="block";
    }

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
          <textarea onChange={(e)=>{currentDescription(e)}} value={current.description} ref={countTextBox}></textarea>
          <span className='wordCount' ref={countRef}>0/300</span>
        </div>
        <div className='saveAndCancleBtns'>
          <button onClick={()=>{saveCurrent();}} className="saveBtn" ref={saveRef}>
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
              <div className='cardUpperPart'>
                <div style={{backgroundColor:item.color}} className="cardColorBox"></div>
                <div className='cardDesc'> {item.description}</div>
              </div>
              <div className='hiddenDesc'>
                <table>
                  <tbody>
                    <tr>
                      {defaultData.data.map((data)=>{
                        if(data.code===item.color){
                          return data.data.map((datas,index)=>{
                            return <td className='th' key={index}>{datas.quality}</td>
                          });
                        }
                      })}
                    </tr>
                     {  
                      defaultData.data.filter(s=>s.code===item.color).map((m,n)=>{
                        return m.data.map((x,i)=>{
                          return <tr key={i}>
                              {m.data.map((y,j)=>{
                                return <td key={j} className="dataTable">{m.data[j].traits[i]}</td>
                              })
                        }
                          </tr>
                        });
                      })   
                    }
                  </tbody>
                </table>
                <div className='titleBox' style={{backgroundColor:item.color}}>Title</div>
              </div>
              <button className='showMoreBtn' onClick={(e)=>{showMore(e);}}>Show More</button>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}
export default App;