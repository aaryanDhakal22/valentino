interface RejectProp{
    counter:number, 
    handleReject: (item:number)=> void
}
export default function RejectButton({counter, handleReject}:RejectProp ) {
    const onReject = ()=>{
        handleReject(counter+1)
    }
    return(
        <button className="p-3 text-2xl bg-red-500 text-white rounded-lg" onClick={onReject}>Reject</button>
    )
}
