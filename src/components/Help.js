import React, { useState } from "react";

const Help = () => {
  const [isFaqOpen, setFaqOpen] = useState(false);
  const [isGuideOpen, setGuideOpen] = useState(false);
  const [isChatOpen, setChatOpen] = useState(false);
  const [isSocialOpen, setSocialOpen] = useState(false);
  const [isQueryOpen, setQueryOpen] = useState(false);

  return (
    <div
      className="container mx-auto p-8 flex flex-col items-center h-full font-roboto mb-[40rem]"
      style={{ backgroundImage: "url('/helpbg.png')", backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", height:"470px" }}
    >
      <h1 className="text-2xl font-semibold text-center mb-6 text-[#073A4D] mt-6">
        Hello, how can we help you?
      </h1>
      <p className="text-center mb-8">Find Travel guide, FAQ, chat,</p>

      {/* FAQ and Travel Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-[800px] mt-[6rem]">
        <div
          className="p-4 bg-white rounded-lg shadow cursor-pointer"
          
        >
          <div className="flex justify-start items-center">
            <img src="/faq.png" alt="" />
            <div className="flex flex-col ml-5">
              <span>FAQ</span>
              <p className="mt-4">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <div
          className="p-4 bg-white rounded-lg shadow cursor-pointer"
          
        >
          <div className="flex justify-start items-center">
            <img src="/nav.png" alt="" />
            <div className="flex flex-col ml-5">
              <span>Travel Guide</span>
              <p className="mt-4">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div
        className="p-4 bg-white rounded-lg shadow mb-4 cursor-pointer w-full max-w-[800px]"
        
      >
        <div className="flex justify-start items-center">
          <img src="/msg.png" alt="" className="mr-[2rem]" />
          <div className="flex flex-col mr-auto">
            <span>Chat</span>
            <span>Lorem, ipsum dolor.</span></div>
          <span onClick={() => setChatOpen(!isChatOpen)}>{isChatOpen ? <img src="/up.png"/> : <img src="/down.png"/>}</span>
        </div>
        {isChatOpen && (
          <div className="mt-4 flex space-x-4 justify-center gap-4">
            <a href="#">
              <img src="/tele.png" alt="Telegram" />
            </a>
            <a href="#">
              <img src="/wp.png" alt="WhatsApp" />
            </a>
            <a href="#">
              <img src="/chat.png" alt="Live Chat" />
            </a>
          </div>
        )}
      </div>

      {/* Social */}
      <div
        className="p-4 bg-white rounded-lg shadow mb-4 cursor-pointer w-full max-w-[800px]"
        
      >
        <div className="flex justify-start items-center">
          <img src="/social.png" alt="" className="mr-[2rem]" />
          <div className="flex flex-col mr-auto">
            <span>Social</span>
            <span>Lorem, ipsum dolor.</span></div>
          <span onClick={() => setSocialOpen(!isChatOpen)}>{isChatOpen ? <img src="/up.png"/> : <img src="/down.png"/>}</span>
        </div>
        {isSocialOpen && (
          <div className="mt-4 flex space-x-4 justify-center gap-4">
            <a href="#">
              <img src="/fb.png" alt="Telegram" />
            </a>
            <a href="#">
              <img src="/ig.png" alt="WhatsApp" />
            </a>
            <a href="#">
              <img src="/tw.png" alt="Live Chat" />
            </a>
            <a href="#">
              <img src="/in.png" alt="Live Chat" />
            </a>
          </div>
        )}
      </div>

      {/* Send Query */}
      <div
  className="p-4 bg-white rounded-lg shadow mb-4 cursor-pointer w-full max-w-[800px]"
  
>
  <div className="flex justify-start items-center">
    <img src="/mail.png" alt="" className="mr-[2rem]" />
    <div className="flex flex-col mr-auto">
      <span>Send Query</span>
      <span>Lorem, ipsum dolor.</span>
    </div>
    <span onClick={() => setQueryOpen(!isQueryOpen)}>{isQueryOpen ? <img src="/up.png"/> : <img src="/down.png"/>}</span>
  </div>
  {isQueryOpen && (
    <form className="mt-4 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full max-w-[600px]">
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700">Name</label>
          <input
            className="p-2 border rounded bg-[#F7F7F7]"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700">Email</label>
          <input
            className="p-2 border rounded bg-[#F7F7F7]"
            type="email"
            
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full max-w-[600px]">
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700">Subject</label>
          <input
            className="p-2 border rounded bg-[#F7F7F7]"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700">Order no.</label>
          <input
            className="p-2 border rounded bg-[#F7F7F7]"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[600px]">
        <label className="mb-1 text-sm text-gray-700">Your Query</label>
        <textarea
          className="p-2 border rounded bg-[#F7F7F7] w-full"
          rows="4"
        ></textarea>
      </div>
      <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
        Submit
      </button>
    </form>
  )}
</div>


    </div>
  );
};

export default Help;
