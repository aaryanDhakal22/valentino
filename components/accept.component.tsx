interface AcceptProp{
    counter:number, 
    handleAccept: (item:number)=> void
}
export default function AcceptButton({counter,handleAccept}:AcceptProp) {

    const onAccept = ()=>{
        handleAccept(0)
    }
    console.log(counter)
    const fontsize : string[]= [
        "",
        '1.4rem',
        '2rem',
        '3rem',
        '4rem',
        '6rem'

    ]
    return(
        <button style={{ fontSize: `${fontsize[counter]}` }} className={`p-3 bg-green-500 text-white rounded-lg`} onClick={onAccept}>Accept</button>
    )
}
