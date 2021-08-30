import { MouseEvent, useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './style.css';
import Selecto from "react-selecto";

function App() {
  const list = ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee', 'ffffff', 'gggggg', 'hhhhhh', 'iiiiii', 'jjjjjj', 'kkkkkk'];
  const [val, setVal] = useState(['']);

  const handleMouseOver = (e: MouseEvent) => {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add('Mui-focusVisible');
  }
  const handleMouseOut = (e: MouseEvent) => {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove('Mui-focusVisible');    
  }

  useEffect(() => {
    console.log(val);
  },[val])

  return (
    <>
      <div className='container'>
        {list.map(i => 
            <>
              <ListItem 
                key={i}
                className='list'
                onMouseOver={handleMouseOver}                                  
                onMouseOut={handleMouseOut}
              >
                <ListItemText primary={i}/>
                <div style={{display:'none'}}>{i}</div>
              </ListItem>
              <Divider />
            </>
        )}
      </div>

      <Selecto
          dragContainer={".container"}
          selectableTargets={[".list"]}
          hitRate={0}
          selectByClick={true}
          selectFromInside={true}
          ratio={0}
          onSelect={e => {
              e.added.forEach((el:any, index:number) => {
                  el.classList.add("selected");
                  setVal(prev => [...prev, el.innerText])
                  //setVal([el.getAttribute("key")]);
                  //console.log(el.innerText)
                  //console.log(el.attributes)
              });
              e.removed.forEach(el => {
                  el.classList.remove("selected");
                  setVal([])
              });
          }}
        />
    </>
  );
}

export default App;
