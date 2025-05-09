export default function CardFilme({ filme }){
    return(
        <div className="w-[330px] h-[318px] flex flex-col rounded-lg bg-[#222222] cursor-pointer border border-transparent hover:border-[#8f7bd8] transition-all duration-400 ease-in-out">
            <div className="w-full h-[70%] rounded-t-lg relative">
                <img
                    className="w-full h-full rounded-t-lg object-cover"
                    src={filme.banner}
                    alt={filme.titulo}
                />
                <div className="absolute top-1 left-2 flex text-[#9ca3af] ">
                    <p className="text-[17px] text-green-400 font-semibold">{filme.nota}</p>
                    <p>/10</p>
                </div>
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[20px] font-bold">{filme.titulo}</p>
                <p  className="text-[17px] text-[#8a898c]">{filme.diretor}</p>
                <div className="w-full flex justify-between">
                    <p className="text-[17px] text-[#8a898c]">{filme.ano}</p>
                    <div className="px-2 py-0 bg-[#8f7bd8]/20 text-[#8f7bd8] rounded-lg">{filme.genero}</div>
                </div>
            </div>
        </div>
        
    )
}