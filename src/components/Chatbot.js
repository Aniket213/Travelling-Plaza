import React from 'react';
import './Style/Chatbot.css';

export default function Chatbot() {
    const boticonclicked = ()=>{
        const boticon = document.querySelector('.boticon');
        const cb = document.querySelector('.botcheck');
        const box = document.querySelector('.chatbot');
        // console.log(cb);
        if(boticon.classList.contains('fa-chevron-down')){
            boticon.classList.remove('fa-chevron-down');
            boticon.classList.add('fa-chevron-up');
        }else{
            boticon.classList.add('fa-chevron-down');
            boticon.classList.remove('fa-chevron-up');
        }

        if(cb.checked) {
            // console.log('checked');
            box.style.bottom = '20px';
        }else{
            // console.log('notchecked');
            box.style.bottom = '-400px';
        }
    }

  return (
    <div className='chatbot'>
        <input onClick={boticonclicked} type="checkbox" className='botcheck'/>
        <div className="botupperbox">
            <img className='botimg' src="/images/bot4.png" alt="it's a chatbot" />
            <i className=" boticon fa-solid fa-chevron-up"></i>
        </div>
        <iframe className='botframe' src="https://webchat.botframework.com/embed/travelling-website-bot?s=Qu1JJCBCFDQ.3dnQ-lel6FrVmXeLN-78RXIGd2jstJKqxHhFLXsQHHk" title='bot'></iframe>
    </div>
  )
}
