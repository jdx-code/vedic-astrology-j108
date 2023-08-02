const Contact = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">                    
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</p>

                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">                                
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    
                                    <div className="sm:col-span-3">
                                        <label for="fullname" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                        <div className="mt-2">
                                            <input type="text" name="fullname" id="fullname" placeholder="Enter your name" autocomplete="fullname" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                        <div className="mt-2">
                                            <input type="email" name="email" id="email" placeholder="Enter your email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4" />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label for="subject" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                                        <div className="mt-2">
                                            <input type="text" name="subject" id="subject" placeholder="Enter the subject" autocomplete="subject" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4" />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                        <div className="mt-2">
                                            <textarea id="message" name="message" placeholder="Enter the message" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"></textarea>
                                        </div>                                        
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                        <div className="flex items-center justify-end gap-x-6">                            
                            <button type="submit" className="w-full bg-blue-50 border-2 border-[#1f2937] px-3 py-2 text-sm font-semibold text-[#1f2937] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#1f2937] hover:border-[#eff6ff] hover:text-[#eff6ff]">Submit</button>
                        </div>
                        </form>
                    
                    </div>
                </div>
                <div>
                    <iframe 
                        className="w-[100%] h-[100%] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-4" 
                        src="https://maps.google.com/maps?q=fc%20road%20latasil%20guwahati&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>		  
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Contact