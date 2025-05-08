export default function CardFilme(){
    return(
        <div className="w-[330px] h-[318px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img
                    className="w-full h-full rounded-t-lg object-cover"
                    src="https://th.bing.com/th/id/R.7fe2257cb7e9be762619df49653f4114?rik=dZtZkyyKNYZKwg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40700000%2fFamily-Guy-family-guy-40727720-1280-1024.jpg&ehk=9ZB7wk1Uyhbp84C5QoEgptfHEaOkr%2bhuppRNacyGhqQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[20px] font-bold">Family guy</p>
                <p  className="text-[17px] text-[#8a898c]">James Purdum</p>
                <div className="w-full flex justify-between">
                    <p className="text-[17px] text-[#8a898c]">1999</p>
                    <div className="px-2 py-0 bg-[#8f7bd8]/20 text-[#8f7bd8] rounded-lg">Comédia</div>
                </div>
            </div>
        </div>
        
    )
}