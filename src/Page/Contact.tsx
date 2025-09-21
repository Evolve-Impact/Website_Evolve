import { useState } from "react";
import { TextAnimate } from "../components/magicui/text-animate";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import { FileUpload } from "../components/ui/file-upload";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
// import fb from "../assets/fb.png"
// import insta from "../assets/insta.png"
// import gh from "../assets/github.png"
// import tw from "../assets/tw.png"

const Contact = () => {

    const services  = [
        "AI Consultancy",
        "Meeting Scheduling",
        "Workflow Automation",
    ]

// const [files, setFiles] = useState<File[]>([]);
//   const handleFileUpload = (files: File[]) => {
//     setFiles(files);
//     // console.log(files);
//   };

//   const [value, setValue] = useState()

   // ✅ form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = "contact@evolvebitx.com"; // 🔑 replace with your Gmail
    const subject = "New Contact Form Submission";
    const body = `
        First Name: ${form.firstName}
        Last Name: ${form.lastName}
        Email: ${form.email}
        Phone: ${form.phone}

        Message:
        ${form.message}
    `;

    // ✅ Gmail compose URL
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open Gmail in new tab
    window.open(mailtoLink, "_blank");
  };

    return(
        <>
            <section className="pt-30 pb-20 text-gray-700 px-6 flex items-center justify-center font-montserrat-light">
                <div className="max-w-7xl w-full mx-auto items-start bg-white border border-neutral-300 md:p-10 p-6 rounded-2xl shadow-[10px_10px_#019EE3] backdrop-blur-xl grid lg:grid-cols-2 gap-10">
                        <div className="flex flex-col justify-between h-full">
                                <div className="">
                                <TextAnimate animation="blurInUp" by="character" once className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 font-montserrat">
                                        Get in Touch
                                </TextAnimate>
                                    <ul className="list-none text-black mb-10 space-y-4 font-inter ">
                                        <li className="flex items-center"><BsPatchCheckFill className="inline-block mr-2 text-[#0197D8] text-xl" /> Every query is an opportunity to create something better together.</li>
                                        <li className="flex items-center"><BsPatchCheckFill className="inline-block mr-2 text-[#0197D8] text-xl" /> Your ideas and questions help us build better products. Let’s talk!</li>
                                        <li className="flex items-center"><BsPatchCheckFill className="inline-block mr-2 text-[#0197D8] text-xl" /> Our team will get back to you within 12–24 hours.</li>
                                        {/* <li className="flex items-center"><BsPatchCheckFill className="inline-block mr-2 text-[#0197D8] text-xl" /> Let’s collaborate your feedback fuels our evolution.</li> */}
                                        {/* <li className="flex items-center"><BsPatchCheckFill className="inline-block mr-2 text-[#0197D8] text-xl" /> We don’t just respond, we engage, solve, and build with you.</li> */}
                                        {/* <li className="flex items-center"><BsPatchCheckFill className="inline-block mr-2 text-[#0197D8] text-xl" /> Behind every message, there’s a dedicated team eager to help.</li> */}
                                              <li className="flex items-center gap-2"><IoMdMail className="text-cyan text-3xl"/> contact@evolvebitx.com</li>
                                  
                                    
                                    </ul>

                                </div>
                                 <ul className="text-sm text-gray-600 space-y-2 mb-4 md:tex  t-left pt-4">
                                             
                                              {/* <li>+92 301 2721661</li> */}
                                    </ul>
                                <div>
                                    <div className="mb-10">
                                        <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-5">
                                            Find Us Here
                                        </h1>
                                           <li className="flex items-start gap-2 mb-5 font-inter text-black">
                                                <IoLocationSharp className="text-cyan text-3xl"/>
                                                Office Number 229, 2nd Floor NASTP Silicon 1, Shahre Faisal,
                                                Karachi Sindh, Pakistan
                                              </li>
                                            <div className="rounded-2xl overflow-hidden border border-neutral-800 ">
                                                <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28945.19578793647!2d67.087133!3d24.872557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ec4c95d4c1b%3A0x46c246e62849c076!2sV4P9%2B9G3%2C%20Faisal%20Cantonment%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694952000000!5m2!1sen!2s"
                                                width="100%"
                                                height="300"
                                                style={{ border: 0}}
                                                allowFullScreen={true}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className="brightness-75 contrast-125 grayscale-[20%]"
                                                ></iframe>
                                            </div>
                                        </div>
                                    {/* <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-5">
                                        Our Socials
                                    </h1>
                                    <div className="flex flex-wrap gap-6">
                                        <a href="#">
                                            <img src={fb} alt="" className="w-32 grayscale-100 hover:grayscale-0 transition duration-500"/>
                                        </a>
                                        <a href="#">
                                            <img src={insta} alt="" className="w-32 grayscale-100 hover:grayscale-0 transition duration-500"/>
                                        </a>
                                        <a href="#">
                                            <img src={tw} alt="" className="w-32 grayscale-100 hover:grayscale-0 transition duration-500"/>
                                        </a>
                                    </div> */}
                                </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-inter"> 
                                <label htmlFor="">Services</label>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    {
                                        services.map((service , index)=>(
                                            <>
                                                <div key={index} className="flex items-center text-sm gap-2 px-3 py-1 rounded-full bg-neutral-200 duration-200 hover:bg-neutral-500 hover:text-white transition cursor-pointer">
                                                    {service}
                                                </div>
                                            </>
                                        ))      
                                    }
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" placeholder="Enter First Name"
                                         value={form.firstName}
                                        onChange={(e) => handleChange("firstName", e.target.value)}
                                        required
                                        className="p-2 pl-4 bg-neutral-100 text-sm rounded-full transition duration-200 focus:outline-none border border-neutral-400 focus:ring-4 ring-[#D19FE8]"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" placeholder="Enter Last Name" 
                                            value={form.lastName}
                                            onChange={(e) => handleChange("lastName", e.target.value)}
                                            required
                                            className="p-2 pl-4 bg-neutral-100 text-sm rounded-full transition duration-200 focus:outline-none border border-neutral-400 focus:ring-4 ring-[#D19FE8]"/>
                                    </div>
                                     <div className="flex flex-col gap-2">
                                        <label htmlFor="">Email</label>
                                        <input 
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        placeholder="Enter Email" 
                                        required
                                        className="p-2 pl-4 bg-neutral-100 text-sm rounded-full transition duration-200 focus:outline-none border border-neutral-400 focus:ring-4 ring-[#D19FE8]"/>
                                    </div>
                                     <div className="flex flex-col gap-2">
                                              <label htmlFor="">Phone</label>
                                              <div className="">
                                                    <PhoneInput
                                                        international
                                                        defaultCountry="PK"
                                                        value={form.phone}
                                                        onChange={(val) => handleChange("phone", val || "")}
                                                        placeholder="123-456-7890"
                                                        className="custom-phone-input"
                                                        />
                                                </div>
                                    </div>
                                </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="">Message</label>
                                        <textarea rows={6} placeholder="Enter Your Message" 
                                            value={form.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            required
                                            className="p-2 pl-4 bg-neutral-100 text-sm rounded-xl transition duration-200 focus:outline-none border border-neutral-400 focus:ring-4 ring-[#D19FE8]"/>
                                    </div>
                                         <FileUpload />
                                <div>
                                    <button type="submit" className="bg-cyan-500 px-4 w-full py-2 rounded-lg  hover:shadow-xl text-white hover:shadow-cyan-400 cursor-pointer transition duration-200 font-semibold">
                                        Submit
                                    </button>
                                </div>

                                
                          





                            </form>

                        </div>                        
                </div>
            </section>
        </>
    )
}

export default Contact;