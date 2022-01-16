import react,{ useRef , useEffect} from 'react';
import './App.css';


function App(){
    const ref =useRef(null);
    const refLeft =useRef(null);
    const refTop =useRef(null);
    const refRight =useRef(null);
    const refBottom =useRef(null);
 useEffect(() => {
     const resizeablezele =ref.current;
     const styles = window.getComputedStyle(resizeablezele);
     let width = parseInt(styles.width,10);
     let height = parseInt(styles.height,10);
     let x=0;
     let y=0;
     resizeablezele.style.top = "50px";
     resizeablezele.style.left ="50px";
     //right resize
     const onMouseMoveRightResize = () =>{
         const dx = event.clientX -x;
         width= width +dx;
         resizeablezele.style.width ='$(width)px';
     };

     const onMouseUpRightResize = (event) =>{
         document.removeEventListener("mousemove",onMouseMoveRightResize)
     }
     const onMouseDownRightResize = (event) =>{
         x=event.clientX;
         resizeablezele.style.left = styles.left;
         resizeablezele.style.right = null;
         document.addEventListener("mousemove",onMouseMoveRightResize);
         document.addEventListener("mouseup",omMouseUpRightResize);
     }

     //add mouse down event listner
     const resizerRight = refRight.current;
     resizerRight.addEventListener("mousedown",onMouseDownRightResize);


     return() =>{
         resizerRight.addEventListener("ousedoen",onMouseDownRightResize);

     },[];
 } 


 return(
    <div className='container'>
        <div ref={ref}className='resizeable'>
            <div ref={refLeft}className='resizer resizer-l'></div>
            <div ref={refTop}className='resizer resizer-t'></div>
            <div ref={refRight}className='resizer resizer-r'></div> 
            <div ref={refBottom}className='resizer resizer-b'></div>
        </div>
    </div>
 );


export default App;