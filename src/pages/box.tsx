import Box from "@/components/basics/Box";

export default function BoxPage(){
    return (
        <div className="flex gap-7 p-7">
            <Box>#Box </Box>
            <Box>#Box</Box>
            <Box>
                <ul className="list-disc">
                    <li>Box 1 </li>
                    <li>Box 2 </li>
                    <li>Box 3 </li>
                </ul>
            </Box>
        </div>
    )
}