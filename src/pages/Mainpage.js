
import Allinputgroup from "./Allinputgroup";
import Cardsection from "./Cardsection";
import Mapbackground from './Mapbackgroun'


function Mainpage(){
    return(
        <>    
        {/* <div style={{position:"relative" , zIndex:500}}> */}
        {/* <div>
        <Mapbackground/>
        </div> */}
    
         <div style={{position:"absolute"}}>

            <Allinputgroup/>
            <Cardsection/>
         </div>

      

        </>

    )
}
export default Mainpage;