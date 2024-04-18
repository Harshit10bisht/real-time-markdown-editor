import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './Navbar';
import DOMPurify from "dompurify";
// import ReactMarkdown from 'react-markdown';

const NODE_URL = `http://localhost:3001/home`;

function App() {
  const [markedText, setMarkedText] = useState('');
  const [htmlText, setHtmlText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(NODE_URL, { markedText });
        // console.log("HERE : ", response.data);
        const sanitizedHtml = DOMPurify.sanitize(response.data);
        setHtmlText(sanitizedHtml);
      } catch (error) {
        console.error(`Error converting Markdown to HTML : ${error}`);
      }
    };

    if (markedText) {
      fetchData();
    }
  }, [markedText]);

  const handleText = (event) => {
    setMarkedText(event.target.value);
  }

  return (
    <div>
      <Navbar />

      <div className="justify-between items-center mt-8 text-center">
        <p className="text-lg text-gray-500">
          Your Markdown Text is being converted in real-time...
        </p>
      </div>

      <div className="w-full h-96 flex justify-between mt-4 py-4 px-32">
        <textarea
          className="w-1/2 h-80 border border-gray-300 rounded-lg p-4 resize-none bg-slate-100"
          placeholder="Enter Markdown text here ... (Like *Italic* **Strong**)"
          value={markedText}
          onChange={handleText}
        />
        <div className="w-16"></div>
        <div
          className="w-1/2 h-80 border border-gray-300 rounded-lg p-4  overflow-y-auto bg-slate-400"
          dangerouslySetInnerHTML={{  __html: htmlText || '<p>LIVE PREVIEW PANEL</p>' }}
          // ref={(element) => { if (element) element.innerHTML = `${htmlText}` || '<p>LIVE PREVIEW PANEL</p>'; }}
        />
      </div>
    </div>
  )
}

export default App;