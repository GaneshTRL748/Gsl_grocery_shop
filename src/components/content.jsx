import React,{useState} from "react";
import '../styles/content.css'
import Cards from './cards'
let Content=({additem,list,cartbtnoperation})=>
{
    const [prev,Setprev]=useState('all');
    const [data,Setdata]=useState(list);
   const filterItem=(value)=>
   {
       console.log(prev);
           const result=list.filter((curdata)=>
           {
              return curdata.cat===value;
           }
           );
           document.getElementById(prev).style.backgroundColor="#C5C5C5";
           document.getElementById(value).style.backgroundColor="#ee9ca7";
            Setprev(value);
           Setdata(result);  
   }
   
    return (
        <div className="content">
            <div className="category">
                <div><button id='all' onClick={()=>
                    {
                        document.getElementById(prev).style.backgroundColor="#C5C5C5";
                        document.getElementById('all').style.backgroundColor="#ee9ca7";
                    Setprev('all');
                    Setdata(list)
                    }
                    } >All</button></div>
               <div><button  className="btn" id='vegetables' onClick={()=>filterItem('vegetables')}>Vegetables</button></div> 
               <div><button  className="btn" id='fruits' onClick={()=>filterItem('fruits')}>Fruits</button></div> 
               <div><button  id='snacks' onClick={()=>filterItem('snacks')}>Snacks</button></div> 
            </div>
            <div className="content_cards">
                   {
                        data.map((item)=>(
                            <Cards data={item} additem={additem} key={item.id} cartbtnoperation={cartbtnoperation}/>
                        ))
                    }   
             </div>
        </div>

    )
}
export default Content