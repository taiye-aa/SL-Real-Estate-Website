import React from 'react'






const API_KEY = import.meta.env.VITE_WEB3_API_KEY;
const Contact = () => {
    const [result, setResult] = React.useState("");
      const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...")
    const formData = new FormData(event.target);
    formData.append("access_key", API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
  setResult("Sent");
  document.body.style.overflow='hidden'
  openModal();
  setTimeout(() => {
    setResult("");
    closeModal();
    document.body.style.overflow='auto'
  event.target.reset();}, 2000);
} else {
  setResult("Failed to send");
  toast("Failed to send message. Please try again later.");
}
    
    
  };

  return (
    
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id="contact">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Message Sent Successfully</h2>
            <p className="mb-4">We'll get back to you soon</p>
            <button onClick={closeModal} className="px-4 py-2 bg-orange-400 text-white rounded cursor-pointer">
              Close
            </button>
          </div>
        </div>
      )}
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact Us</h1>
        <p  className='text-center text-gray-500 mb-12 mx-auto max-w-80'>Ready to Make a Move? Let's Build Your Future Together</p>


        <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
            <div className='flex wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border outline-orange-300 border-gray-300 rounded py-3 px-4 mt-2' type="text"name="Name" placeholder='Your Name' required />
                </div>
            <div className='w-full md:w-1/2 text-left md:pl-3'>
                    Your Email
                    <input className='w-full border outline-orange-300 border-gray-300 rounded py-3 px-4 mt-2' type="email"name="Email" placeholder='Your Email' required />
            </div>
            </div>
            
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 outline-orange-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
            </div>

            <button className='bg-orange-400 hover:bg-orange-500 text-white py-2 px-12 mb-10 rounded cursor-pointer' >{result? result: "Send Message"}</button>
        </form>

    </div>
  )
}

export default Contact