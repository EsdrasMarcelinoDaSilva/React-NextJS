import ListSerieA from "@/components/lists/ListBasic"
import { IconBallFootball } from "@tabler/icons-react"

export default function ListPage(){

    const teams = [
        'Botafogo',
        'Palmeiras',
        'Fluminense',
        'Cruzeiro',	
        'Athletico-PR',	
        'Atlético-MG',	
        'Santos',	
        'Fortaleza',	
        'Flamengo',	
        'São Paulo'
    ]

    return (
        <div className={`flex flex-col justify-center items-center h-screen`}>
            <h1 className="flex items-center text-5xl gap-2">
                <IconBallFootball size={50} stroke={1} 
                className="text-green-700"/>
                Brazilian serie a table
            </h1>
            
            <ListSerieA teams={teams}/>
        </div>
    )
}