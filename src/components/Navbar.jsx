const Navbar = () => {

    return(

        <div className="flex justify-between w-full py-6 h-auto bg-blue-100 sm:bg-blue-500 md:bg-red-500 lg:bg-yellow-500">
            <div className="md:w-[30%] lg:w-[40%]">
                JYOTISH108
            </div>

            <div className="md:w-[68%] lg:w-[58%]">
                <ul className="flex justify-evenly">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#salutations">Salutations</a>
                    </li>                    
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>              
                    <li>
                        <a href="#contact">Contact</a>
                    </li>      
                </ul>
            </div>
        </div>
    )
}

export default Navbar