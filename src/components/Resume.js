export default function Resume(){
    return(

            <div className="text-center px-10 pt-52">
                <h2 className="text-5xl py-2 text-amber-500">Daoud Ahmed</h2>
                <h3 className="text-3xl pb-5 text-amber-400">Etudiant en 3eme année d'Informatique et Cybersécurité</h3>
                <p className=" pb-2 leading-8 text-neutral-600">
                    Je suis étudiant de troisième année d'Informatique et Cybersécurité à l'INSA Hauts de France.<br/>
                    Ce portfolio a pour but de me présenter ainsi que de vous montrer les différents projets scolaires et personnels.
                </p>
                    <img className="relative mx-auto w-64 pb-3" src={require('../asset/gyro.jpg')} alt="Ma tête"/>
                <button className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    Mon CV
                </button>
            </div>
    )
}