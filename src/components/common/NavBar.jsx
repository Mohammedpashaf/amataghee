import amataLogo from '../../assets/img/amata-logo.jpeg';
import { useCallback, useState } from 'react';
import ArrowDown from './ArrowDown';
import SubHeader from './Subheader';

export default function Example() {
  const [expand, setExpand] = useState(false);

  const handleClick = useCallback(() => {
    setExpand(true);
  }, [expand]);

  const closeNav = useCallback(() => {
    setExpand(false);
  }, [expand]);
  
  return (
    
    <div className='w-4/5 mx-auto text-center max-w-screen-lg mx-auto'>
      <header class="py-4 px-4 sm:px-10 relative z-50">
        <div class='max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4'>
          <a href="javascript:void(0)"><img src={amataLogo} alt="logo" class='w-40' />
          </a>
      
          <div id="collapseMenu"
            className={"max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 " + (expand ? '' : 'max-lg:hidden lg:!block')}
            >
            <button id="toggleClose" onClick={closeNav} class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>
      
            <ul class='lg:flex lg:ml-12 lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li class='group gap-7 m-r-2 m-l-3 max-lg:border-b max-lg:py-3 relative'>
                <a href='javascript:void(0)'
                  class='hover:text-[#62360F] text-gray-600 text-[15px] font-bold lg:hover:fill-[#62360F] block'>About<ArrowDown />
                </a>
                <ul
                  class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                  <SubHeader name='About'/>
                  <SubHeader name='Products'/>
                  <SubHeader name='Services'/>
                  <SubHeader name='News'/>
                </ul>
              </li>
              <li class='group gap-7 m-r-2 max-lg:border-b max-lg:py-3 relative'>
                <a href='javascript:void(0)'
                  class='hover:text-[#62360F] text-gray-600 text-[15px] font-bold lg:hover:fill-[#62360F] block'>Products <ArrowDown />
                </a>
                <ul
                  class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                  <SubHeader name='About'/>
                  <SubHeader name='Products'/>
                  <SubHeader name='Services'/>
                  <SubHeader name='News'/>
                </ul>
              </li>
              <li class='group gap-7 m-r-2 max-lg:border-b max-lg:py-3 relative'>
                <a href='javascript:void(0)'
                  class='hover:text-[#62360F] text-gray-600 text-[15px] font-bold lg:hover:fill-[#62360F] block'>Services <ArrowDown />
                </a>
                <ul
                  class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                  <SubHeader name='About'/>
                  <SubHeader name='Products'/>
                  <SubHeader name='Services'/>
                  <SubHeader name='News'/>
                </ul>
              </li>
              <li class='group gap-7 m-r-2 max-lg:border-b max-lg:py-3 relative'>
                <a href='javascript:void(0)'
                  class='hover:text-[#62360F] text-gray-600 text-[15px] font-bold lg:hover:fill-[#62360F] block'>News <ArrowDown />
                </a>
                <ul
                  class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                  <SubHeader name='About'/>
                  <SubHeader name='Products'/>
                  <SubHeader name='Services'/>
                  <SubHeader name='News'/>
                </ul>
              </li>
            </ul>
          </div>
      
          <div class='flex ml-auto'>
            <button
              class='hover:text-[#62360F] border border-full-3 flex items-center transition-all font-bold px-5 py-3'>Contact Us
            </button>
      
            <button onClick={handleClick} id="toggleOpen" class='lg:hidden ml-7'>
              <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          </div>
      </header>
    </div>
  );
}