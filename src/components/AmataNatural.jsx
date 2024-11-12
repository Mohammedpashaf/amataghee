import img3 from '../assets/img/Cold pressed  Oil.png';
import img1 from '../assets/img/Ghee.png';
import handsome from '../assets/img/handsome.png';
import img4 from '../assets/img/honey.png';
import img6 from '../assets/img/julier.png';
import img2 from '../assets/img/logo.png';
import img7 from '../assets/img/Quote-icon.png';
import ContentComponent from './common/ContentComponent';
import CustomButton from './common/CustomButton';
import CustomPlayButton from './common/CustomPlayButton';
import DescriptionComponent from './common/DescriptionComponent';
import TitleComponent from './common/TitleComponent';

const getAmataNaturalsData = {
    title: 'AMATA NATURALS',
    content: ' Quality You Can Taste, Nutrition You Can Trust',
    description: 'Cras sed felis eget velit aliquet sagittis. Varius quam quisque id diam vel quam. Odio ut sem nulla pharetra diam sit'
}

function AmataNaturals(params) {
    return(
        <div>
            <div class="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75 noborder">
                <div className='main-section-part1'>
                    <div class="p-l-10">
                        <div class="p-5 mt-1 bg-white py-1.25 px-0.75 items-center text-center sm:w-1/2 md:w-full">
                            <p>
                                <span class="mt-0.5 block font-medium text-sm leading-[1.125rem]">
                                    <TitleComponent data={getAmataNaturalsData}></TitleComponent>
                                    <ContentComponent data={getAmataNaturalsData}></ContentComponent>
                                    <DescriptionComponent data={getAmataNaturalsData}></DescriptionComponent>
                                 
                                    <div className='classBox mb-7 mt-4 float-left'>
                                        <CustomButton name='Learn more'></CustomButton>
                                        <CustomPlayButton name='Watch About Us'></CustomPlayButton>

                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='man pt-8 sm:shrink-0 w-full'>
                        <img src={handsome} loading="lazy" className='sm:h-full'/>
                    </div>
                </div>
                <div>
                    <div class="flex">
                        <div class="mt-1 py-1.25 px-0.75 items-center text-center sm:w-1/2 md:w-full">
                            <div class="grid grid-cols-2 gap-4 m-b-10">
                                <div className='pad-margin-left'>
                                    <h1 className='classyears'>10+ Years</h1>
                                    <h3 className='classyears2'>We are growing and selling organic food</h3>
                                </div>
                                <div class="">
                                    <img class="object-contain h-48 w-full p-t-15 object-fit" src={img2} />
                                </div>
                            </div>
                            <div class="sm:flex">
                                <div className="sm:flex-1 p-5">
                                    <div >
                                        <div className="uppercase tracking-wide text-sm text-black-500 font-semibold mb-4 text-left">Pure A2 Ghee</div>
                                        <img className="h-48 w-full object-fit" src={img1} />
                                    </div>
                                </div>
                                <div class="sm:flex-1 p-5">
                                    <div class="">
                                        <div class="uppercase tracking-wide text-sm text-black-500 font-semibold mb-4 text-left">Cold Pressure Oil</div>
                                        <img class="h-48 w-full object-fit" src={img3} />
                                    </div>
                                </div>
                                <div class="sm:flex-1 p-5">
                                    <div >
                                        <div class="uppercase tracking-wide text-sm text-black-500 font-semibold mb-4 text-left">Honey</div>
                                        <img class="h-48 w-full object-fit" src={img4} />
                                    </div>
                                </div>
                            </div>
                            <div className='quote'>
                                <h1 className='pb-3'>Organic is a “whole system” approach to farming and food production. From the soil, to plants and animals.</h1>
                                <figure class="ruby rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                    <img class="h-20 w-20 rounded-full" src={img6} />
                                    <figcaption class="text-base p-5">
                                        <div class="text-gray-700 dark:text-sky-400">
                                            Jordan NTolo
                                        </div>
                                        <div class="text-slate-700 dark:text-slate-500 text-color-green">
                                         Owner Agria Company
                                        </div>
                                        </figcaption>
                                    <div class='quoteimg'>  <img class="h-12 w-12" src={img7} /></div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AmataNaturals;