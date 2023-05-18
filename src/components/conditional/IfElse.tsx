interface IfElseProps{
    test: boolean
    children: any
}
export default function IfElse(props: IfElseProps) {
    if(props.test){
        return props.children[0]
    }else{
        return props.children[1]
    }
}