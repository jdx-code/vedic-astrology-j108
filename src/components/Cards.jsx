import devarshi from '/devarshi.jpeg'
import salutations from '../salutations.js'

const Cards = () => {    

    const cards = salutations.map(item => {
        return (
            <div class="card group w-[70%] bg-white border-2 border-blue-200 sm:w-[40%] md:w-[35%] lg:w-[25%] h-auto rounded-lg shadow-2xl my-4 mx-2 sm:mx-4 transition delay-150 duration-300 ease-in-out hover:shadow-3xl hover:scale-105 group-hover:shadow-3xl group-hover:scale-105">
                <a href={item.url}>
                    <figure><img class="rounded-t-lg w-full h-auto" src={item.img} alt="Mars photo" /></figure>
                    <div class="card-body p-4 hover:border-blue-300">
                        <h2 class="card-title flex justify-between">
                            <span class="font-bold"> {item.name} </span>
                            <div class="badge badge-secondary font-bold"></div>
                        </h2>                                              
                    </div>
                </a>                
            </div>
        )
    })

    return (
        <div class="flex flex-wrap justify-center text-sm mt-4 mb-20">                                          
                
            {cards}                
                
        </div>
    )
}

export default Cards