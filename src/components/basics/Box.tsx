export default function Box(props: any){
    return (
        <div className={`
            flex justify-center items-center
            bg-purple-500 rounded-md p-2
            w-64 h-[256px] text-3xl font-thin
        `}>
            {props.children}
            {/* {Math.random()} */}
        </div>
    )
}