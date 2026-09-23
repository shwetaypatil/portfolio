import { MoveRight, Phone, Mail, MapPin } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Section6 = () => {

        const [showSuccess, setShowSuccess] = useState(false);
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        }
        
        const handleSubmit = async(e) => {
            e.preventDefault();
            
            try{
                const response = await fetch("https://portfolio-drdb.vercel.app/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })

                const data = await response.json()

                if(response.ok){
                    setShowSuccess(true)

                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    })
                } else {
                    alert(data.error || "Something went wrong.")
                }
            } catch(error) {
                console.error(error)
                alert("Unable to send message.")
            }
            // You can add your form submission logic here, such as sending the data to a server or an email service.
        }
    
  
  return (
    <div id='contact' className='flex w-full flex-col items-center bg-[#f4f4f4] px-4 pt-12 sm:px-6 lg:px-12'>
      <h2 className='mb-6 text-center text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl'>
        Let's Create <span className='font-normal italic text-amber-400'>Something <br /> Amazing</span> Together!
      </h2>

      <button className='mb-12 flex items-center gap-4 rounded-full bg-amber-400 px-1 py-1'>
        <span className='rounded-full bg-[#344C36] px-5 py-3 text-[#f4f4f4]'>Contact Now</span>
        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] text-[#344C36]'>
          <MoveRight />
        </span>
      </button>

      <div className='w-full bg-[#344C36] px-4 py-8 sm:px-6 lg:px-10'>
        <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:gap-10'>
          <div className='flex w-full flex-col gap-5 text-[#f4f4f4] lg:w-2/5'>
            <h4 className='text-xl sm:text-2xl'>
              <span className='pr-2 text-2xl text-amber-500 sm:text-3xl'>-</span>
              Let's Connect
            </h4>

            <h2 className='text-3xl font-medium sm:text-4xl lg:text-5xl'>
              Talk to Me If You'd Like to <span className='font-normal italic text-amber-400'>Work Together</span>
            </h2>

            <p className='mt-2 text-base text-gray-300 sm:text-xl'>
              I'm open to new opportunities, collaborations, and conversations. Feel free to get in touch.
            </p>

            <div className='flex items-center gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400'>
                <Phone className='text-white' />
              </div>
              <h4 className='min-w-0 break-words text-base text-[#f4f4f4] sm:text-xl'>+91 9922787891</h4>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400'>
                <Mail className='h-6 w-6 text-white' />
              </div>
              <h4 className='min-w-0 break-words text-base text-[#f4f4f4] sm:text-xl'>shwetaypatil05@gmail.com</h4>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400'>
                <MapPin className='h-6 w-6 text-white' />
              </div>
              <h4 className='min-w-0 break-words text-base text-[#f4f4f4] sm:text-xl'>Kolhapur, Maharashtra, India - 416 221</h4>
            </div>
          </div>

          <div className='w-full lg:w-3/5'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <label htmlFor='name' className='text-base text-[#f4f4f4] sm:text-xl'>Name</label>
              <input id='name' type='text' name='name' placeholder='Ex. John Doe' value={formData.name} onChange={handleChange} className='rounded-xl border border-gray-300 bg-transparent p-4 text-base text-amber-100 outline-none placeholder:text-gray-300' />

              <label htmlFor='email' className='text-base text-[#f4f4f4] sm:text-xl'>Email</label>
              <input id='email' type='email' name='email' placeholder='email@gmail.com' value={formData.email} onChange={handleChange} className='rounded-xl border border-gray-300 bg-transparent p-4 text-base text-amber-100 outline-none placeholder:text-gray-300' />

              <label htmlFor='message' className='text-base text-[#f4f4f4] sm:text-xl'>Message</label>
              <textarea id='message' name='message' placeholder='Enter here...' value={formData.message} onChange={handleChange} className='rounded-xl border border-gray-300 bg-transparent p-4 text-base text-amber-100 outline-none placeholder:text-gray-300' rows='4' />

              <button type='submit' className='mt-2 flex w-fit items-center gap-4 rounded-full bg-amber-400 px-1 py-1 transition-colors duration-300 hover:bg-amber-500 hover-float cursor-pointer'>
                <span className='rounded-full bg-[#344C36] px-4 py-3 text-[#f4f4f4]'>Submit</span>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] text-[#344C36]'>
                  <MoveRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4'>
            <div className='w-full max-w-md animate-[fadeIn_0.3s_ease-out] rounded-3xl bg-[#f4f4f4] p-8 text-center shadow-2xl'>

                <div className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400'>
                    <span className='text-3xl text-[#344C36]'>✓</span>
                </div>

                <h2 className='mb-2 text-2xl font-semibold text-[#344C36]'>Message Sent!</h2>
                <p className='mb-6 text-gray-600'>Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                    onClick={() => setShowSuccess(false)}
                    className='rounded-full bg-[#344C36] px-6 py-3 text-[#f4f4f4] transition-all duration-300 hover: translate-y-1 hover:bg-[#263a29] cursor-pointer'>
                        Done
                    </button>
            </div>
        </div>
      )}
    </div>
  )
}
 
export default Section6
