import React, {useState} from 'react';
function HeaderBenner() {
    const [show, setShow] = useState(true);
    return <div>
      {
        show &&
        <div className="w-full bg-[#077340] h-16 antialiased border-b-[#025939]">
          <div className="flex columns-5 items-center h-full">
            <div className="flex-none grow col-span-1"></div>
            <a href="/read1">
              <span className="text-white mt-3 col-span-1 pl-10">
                  <strong>종로학원 학부모 모드 바로가기 ➜</strong>
              </span>
            </a>
            <a href="/read1">  
              <div className="basis-5"></div>
            </a>
            <a href="/read1" className="w-auto h-full lg:pl-10">
              <img src="img/lol.png" className="w-auto h-full lg:pl-10"></img>
            </a>
            <div className="flex-none grow col-span-1"></div>
            <button type="button" className="flex-none col-span-1 text-orange-100 hover:text-orange-500 pl-auto lg:pr-52" onClick={() => {
              setShow(false);
            }}>
            <span class="sr-only">Close menu</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
        </div>
      </div>}
    </div>
  }
  export default HeaderBenner;