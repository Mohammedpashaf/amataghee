
import dianthus from '../assets/img/dianthus.png';
import medal from '../assets/img/medal.png';
import { default as dianthus2, default as Portrait } from '../assets/img/Portrait.png';
import wheat from '../assets/img/wheat.png';
import ContentComponent from './common/ContentComponent';
import CustomButton from './common/CustomButton';
import DescriptionComponent from './common/DescriptionComponent';
import TitleComponent from './common/TitleComponent';

const getOurProcessData = {
    title: 'OUR PROCESS',
    content: 'Our Process of Making Pure & Condensed Ghee',
    description: 'Placerat vestibulum lectus mauris ultrices. Felis bibendum ut tristique et egestas quis ipsum. Faucibus nisl tincidunt eget nullam non nisi est'
}

function OurProcess(params) {
    return (
        <div class="mt-8 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75 noborder">
            <div className='main-section-part1'>
                <div class="sm:flex p-l-10">
                    <div class="p-5 mt-1 bg-white py-1.25 px-0.75 items-center text-center sm:w-1/2 md:w-full">
                        <p>
                            <span class="mt-0.5 block font-medium text-sm leading-[1.125rem]">
                                <TitleComponent data={getOurProcessData}></TitleComponent>
                                <ContentComponent data={getOurProcessData}></ContentComponent>
                                <DescriptionComponent data={getOurProcessData}></DescriptionComponent>
                                <br />
                                <div className='grid grid-flow-row-dense grid-cols-2 grid-rows-2 mt-4'>
                                    <article>
                                        <div className='flex'>
                                            <img className='p-m-b-10' src={wheat} />
                                            <p>Lindsay Walton</p>
                                        </div>
                                        <p class="text-left">Neque gravida in fermentum et varius quam quisque </p>
                                    </article>
                                    <article>
                                        <div className='flex'>
                                            <img className='p-m-b-10' src={medal} />
                                            <p>Lindsay Walton</p>
                                        </div>
                                        <p class="text-left">Blandit massa enim nec dui nunc mattis enim ut tellus</p>
                                    </article>
                                </div>

                                <div className='classBox mt-4 float-left'>
                                    <CustomButton name='Buy Now'></CustomButton>
                                </div>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="sm:flex p-4">
                    <div class="mt-1 py-1.25 px-0.75 items-center text-center sm:w-1/2 md:w-full position-r mt-8">
                        <div class="grid-container">
                            <img className='height30rem object-fill' src={Portrait} alt="Image 1" />
                            <img className='height30rem object-fill' src={dianthus2} alt="Image 2" />
                            <img className='height30rem object-fill' src={dianthus} alt="Image 3" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default OurProcess;