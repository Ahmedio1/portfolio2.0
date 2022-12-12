
export default function NavBar(){
    return(
        <div>
            <nav className=" bg-neutral-900 sm:p-6  sm:flex justify-between ">
                <h1 className="text-amber-600 sm:text-xl"> Portfolio de Daoud Ahmed </h1>
                <ul className="sm:flex items-center">
                    <li className=" sm:text-md bg-gradient-to-r from-amber-400 to-amber-500 sm:px-4 sm:py-2 sm:rounded-sm sm:ml-10 "><a href="#"> Resumé </a></li>
                    <li className=" sm:text-md bg-gradient-to-r from-amber-400 to-amber-500 sm:px-4 sm:py-2 sm:rounded-sm sm:ml-10 "><a href="#"> Parcours </a></li>
                    <li className=" sm:text-md bg-gradient-to-r from-amber-400 to-amber-500 sm:px-4 sm:py-2 sm:rounded-sm sm:ml-10 "><a href="#"> Projets </a></li>
                    <li className=" sm:text-md bg-gradient-to-r from-amber-400 to-amber-500 sm:px-4 sm:py-2 sm:rounded-sm sm:ml-10 "><a href="#"> Hobbys </a></li>
                </ul>
            </nav>
        </div>
    )
}
