import Image from "next/image"

export default function Background(){
    return (
        <Image src="https://wallpaperaccess.com/full/2101913.jpg"
        fill
        alt="background"
        className="-z-10 opacity-70 object-cover"
        />
    )
}
