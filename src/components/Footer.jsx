const Footer = () => {
    return (
        <footer className="footer-section w-full flex flex-col p-8 sm:flex-row sm:justify-evenly sm:p-8 text-xs font-sans sm:text-sm">
            <div className="flex justify-between md:w-[40%] md:justify-evenly">
                <div className="sm:mr-8">                    
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#blogs">Blogs</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>                        
                        <li>
                            <a href="#salutations">Salutations</a>
                        </li>
                    </ul>
                </div>
                                    
                <div>                    
                    <ul>
                        <li>
                            <a href="#services">Basic </a>
                        </li>
                        <li>
                            <a href="#services">Standard</a>
                        </li>
                        <li>
                            <a href="#services">Kundali Milan</a>
                        </li>
                        <li>
                            <a href="#services">Question service</a>
                        </li>
                        <li>
                            <a href="#services">Numerology service</a>
                        </li>                        
                    </ul>
                </div>
            </div>

            <div className="flex justify-between mt-8 sm:mt-0 md:w-[60%] md:justify-evenly">
                <div>
                    <p>Jyotish108</p>
                    <p>F.C. Road, Latasil</p>
                    <p>Near Labanya Press</p>
                    <p>Guwahati - 01, Assam, India</p>

                    <p>Phone: 9101489058 (Call/Whatsapp)</p>
                    <p>Email: devadutta786@gmail.com</p>
                </div>                
                <div className="flex flex-col items-center">
                    <p>Connect with us: </p>
                    <ul>
                        <li className="p-2">
                            <a href="https://www.facebook.com/devarshi.dutta" class="facebook"><i class="fa-brands fa-facebook fa-xl"></i></a>
                        </li>
                        <li className="p-2">
                            <a href="https://twitter.com/DevarshiDutta" class="twitter"><i class="fa-brands fa-twitter fa-xl"></i></a>
                        </li>
                        <li className="p-2">
                            <a href="https://www.instagram.com/jyotish_108_/" class="instagram"><i class="fa-brands fa-instagram fa-xl"></i></a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
