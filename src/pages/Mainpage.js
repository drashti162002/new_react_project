
import Allinputgroup from "./Allinputgroup";
import Cardsection from "./Cardsection";
import Mapbackground from './Mapbackgroun';


function Mainpage(){
    return(
        <>    
        {/* <div style={{position:"relative" , zIndex:500}}> */}
        {/* <div>
        <Mapbackground/>
        </div> */}
     <div style={{position:"relative" , height:"calc(100vh - 50px"}}>

     <Mapbackground>
     </Mapbackground>
     </div>

          <div style={{position:"absolute" , top:"50px" , zIndex:99}}>
                <Allinputgroup/>
                <Cardsection/>
         </div>

      

        </>

    )
}
export default Mainpage;