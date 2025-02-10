import AcceptButton from "./accept.component";
import RejectButton from "./reject.component";

export default function Buttons({counter,setCounter}:{counter:number,setCounter:(item:number)=>void}) {
    if (counter>0 && counter<6){
        return(
            <div className='basis-1/2 flex items-start justify-center gap-6'>
                <AcceptButton counter={counter} handleAccept = {setCounter}/>
                <RejectButton counter={counter} handleReject = {setCounter} />
            </div>
        )
    }else if(counter==6){
        return(
            <div className='basis-1/2 flex items-start justify-center gap-6'>
                <AcceptButton counter={counter} handleAccept = {setCounter}/>
            </div>
        )
    }else{
        return (
            <div>❤️❤️I know you will never reject me❤️❤️</div>
        )
    }
}