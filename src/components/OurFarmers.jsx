import Antonin from '../assets/img/Antonin Hafer.png';
import julier from '../assets/img/julier.png';
import lvan from '../assets/img/lvan.png';
import CustomButton from './common/CustomButton';

function OurFarmers(params) {
    return(
        <div className="mt-8">
            <div className="text-center content-center w-3/5 mx-auto ">
                <h5 class="text-3xl font-bold titleCss mb-4 mt-4">Our Farmers</h5>   
                <h1 class='explorehead'>We Have More Than 20+ Years Practical Experience</h1>
            </div>
            <div class="sm:flex wi-full mx-auto text-center max-w-screen-lg mx-auto mt-2 ">
                <div className="flex-1">
                    <div class="max-w-screen-xl mx-auto p-4">
                        <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                            <a href="#"> <img class="object-fill md:h-80" src={julier} alt="julier"/></a>
                            <div class="relative -mt-3 py-5 bg-gray-100  m-10">
                                <figcaption class="text-base p-2">
                                    <div class="farmour-title">
                                        Julian Gruber
                                    </div>
                                    <div class="text-slate-700 dark:text-slate-500 farmour-designation">
                                        Founder of farm
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="max-w-screen-xl mx-auto p-4">
                        <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                            <a href="#"> <img class="object-fill h-80" src={lvan} alt="lvan"/></a>
                            <div class="relative -mt-3 py-5 bg-gray-100  m-10">
                                <figcaption class="text-base p-2">
                                    <div class="farmour-title">
                                        Ivan Cornejo
                                    </div>
                                    <div class="text-slate-700 dark:text-slate-500 farmour-designation">
                                        Founder of farm
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-1">
                <div class="max-w-screen-xl mx-auto p-4">
                        <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                            <a href="#"> <img class="object-fill h-80" src={Antonin} alt="Antonin"/></a>
                            <div class="relative -mt-3 py-5 bg-gray-100  m-10">
                                <figcaption class="text-base p-2">
                                    <div class="farmour-title">
                                        Antonin Hafer
                                    </div>
                                    <div class="text-slate-700 dark:text-slate-500 farmour-designation">
                                        Founder of farm
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-7 mt-4 w-64 mx-auto float-center'>
                <CustomButton name='All Farmers'></CustomButton>
            </div>
        </div>
    );
}
export default OurFarmers;