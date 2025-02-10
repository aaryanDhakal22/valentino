import Image from "next/image"

export default function GIFComponent({counter}:{counter:number}) {
    const replies : string[] = [
        "iloveyou too mero budu❤️😊",
        "Will you be my valentine ? ",
        "Laj lagdaina talai huh?",
        "Nabol ma sanga ja!",
        "Hya thapakka accept garnu ni hau",
        "Pakh talai pitai napugeko",
        "Ja Reject nai hataidiye"
    ]
    // let replies = {
    //     0:"iloveyou too mero budu❤️😊",
    //     1:"Laj lagdaina talai huh?",
    //     2: "Nabol ma sanga ja!",
    //     3: "Hya thapalla accept garnu ni hau",
    //     4: "Pakh talai pitai napugeko",
    //   }
    return(
        <div className="basis-1/2 flex flex-col justify-center items-center h-screen">
            <div className="text-3xl text-center mb-3">{replies[counter]}</div>
            <Image className=""src={`./step${counter}.gif`} alt="starting" />
        </div>
    )
}