import ContentComponent from "./common/ContentComponent";
import TitleComponent from "./common/TitleComponent";
import cowman from '../assets/img/cowman.png';


const getAboutCompanyData = {
    title: 'About Company',
    content: ' We Provide a Full Range of Services',
    description: ''
}

function AboutCompany(props) {
    return(
        <div>
            <div class="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75 noborder">
                <div className='p-l-5'>
                    <div class="flex">
                        <div class="p-5 mt-1 bg-white py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <p>
                                <span class="mt-0.5 block font-medium text-sm leading-[1.125rem]">
                                    <TitleComponent data={getAboutCompanyData}></TitleComponent>
                                    <ContentComponent data={getAboutCompanyData}></ContentComponent>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='man content-center w-11/12 mx-auto'>
                        <div class="border-b border-slate-200">
                            <button class="w-full flex justify-between items-center py-5 text-slate-800">
                                <span> We supporting customers with personalized services </span>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                                </span>
                            </button>
                            </div>
                            
                            <div class="border-b border-slate-200">
                            <button class="w-full flex justify-between items-center py-5 text-slate-800">
                                <span>Our main principle is to help people live healthier lives</span>
                                <span id="icon-2" class="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                                </span>
                            </button>
                            <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5 text-sm text-slate-500">
                                Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Pellentesque diam volutpat commodo sed egestas. Ante metus dictum at tempor commodo ullamcorper. Morbi tempus iaculis urna id volutpat lacus laoreet. Donec pretium vulputate sapien nec sagittis aliquam. Fames ac turpis egestas sed tempus.
                                </div>
                            </div>
                            </div>
                            
                            <div class="border-b border-slate-200">
                            <button class="w-full flex justify-between items-center py-5 text-slate-800">
                                <span> Innovative solutions for consumers seeking foods</span>
                                <span id="icon-3" class="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex">
                        <div class="mt-1 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
                            <div class='man pt-8'>
                                <img src={cowman} loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutCompany