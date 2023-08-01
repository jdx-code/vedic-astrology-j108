const Consultation = () => {
    return (
        <div>
            <h1 className='text-center text-xl font-extrabold my-4'>Procedure for availing consultation:</h1> 
            <div className='about-section my-10 flex flex-col md:w-[80%] md:mx-auto md:flex-row md:items-center'> 
            <div className='w-[80%] mx-auto md:w-[60%] lg:w-[45%]'>                 
                <p className="text-center text-lg my-4">The client can make payment of dakshina at the following account:</p>
                <div className='text-center font-bold border-2 border-blue-200 rounded-md my-4 p-4'>                     
                    <p>
                    Beneficiary Name: Devarshi Dutta
                    </p>
                    <p>
                    A/C Number: 31121839970 (State Bank of India, Guwahati Branch)
                    </p>
                    <p>
                    IFSC code: SBIN0000078
                    </p>
                    <p>
                    Google Pay number: 9101489058
                    </p>
                </div>
            </div>

            <div className='w-[80%] mb-4 mx-auto md:mb-0 md:pl-4 md:w-[65%] lg:w-[45%]'>   
                <p className='text-justify'>
                    Once payment is made, the client is requested to send a screenshot of the payment at the WhatsApp number: 9101489058 along with the birth details (date of birth, place of birth and time of birth). The consultation will be provided within 3 days on a first come first serve basis.
                </p>
                <p className='text-justify'>
                    N.B. Payments once made are non refundable under any circumstances. For any queries Call / WhatsApp us at : +91-9101489058.
                </p>
            </div>
        </div>
        </div>        
    )
}

export default Consultation