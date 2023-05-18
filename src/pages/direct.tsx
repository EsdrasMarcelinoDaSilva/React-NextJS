// PASSANDO PROPS DE UMA COMPONENTE PARA O OUTRO

import Grandfather from "@/components/communication/direct/Grandfather";

export default function DirectPage(){
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 className="text-5xl font-black mb-10">Direct Communication</h1>
            <Grandfather name="Paulino" surname="Silva"/>
            <Grandfather name="Deusdete" surname="Marcelino"/>
        </div>
    )
}