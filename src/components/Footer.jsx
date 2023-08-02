const Footer = () => {
    return (
        <footer className="footerClass w-full flex flex-col p-8 sm:flex-row sm:justify-evenly sm:p-8">
            <div className="flex justify-between md:w-[40%] md:justify-evenly">
                <div className="sm:mr-8">
                    <p>Useful Links</p>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Blogs</a>
                        </li>
                        <li>
                            <a href="">Videos</a>
                        </li>
                    </ul>
                </div>
                                    
                <div>
                    <p>Consultation</p>
                    <ul>
                        <li>
                            <a href="">Basic </a>
                        </li>
                        <li>
                            <a href="">Standard</a>
                        </li>
                        <li>
                            <a href="">Kundali Milan</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between mt-8 sm:mt-0 md:w-[40%] md:justify-evenly">
                <div>
                    <p>Jyotish108</p>
                    <p>F.C. Road, Latasil</p>
                    <p>Near Labanya Press</p>
                    <p>Guwahati - 01, Assam, India</p>

                    <p>Phone: 9101489058 (Call/Whatsapp)</p>
                    <p>Email: devadutta786@gmail.com</p>
                </div>                
                <div className="flex flex-col items-center">
                    <p>Connect </p>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/devarshi.dutta" class="facebook"><i class="fa-brands fa-facebook fa-xl"></i></a>
                        </li>
                        <li>
                            <a href="#" class="twitter"><i class="fa-brands fa-twitter fa-xl"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jyotish_108_/" class="instagram"><i class="fa-brands fa-instagram fa-xl"></i></a>
                        </li>
                        <li>
                            <a href="#" class="google-plus"><i class="fa-brands fa-google fa-xl"></i></a>
                        </li>
                        <li>
                            <a href="#" class="linkedin"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
