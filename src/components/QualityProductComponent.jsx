import img16 from '../assets/img/Natural Process.png';
import img18 from '../assets/img/insta1.png';
import img17 from '../assets/img/insta2.png';
import ContentComponent from './common/ContentComponent';
import DescriptionComponent from './common/DescriptionComponent';
import TitleComponent from './common/TitleComponent';
const getAmataNaturalsData = {
    title: 'Quality Products',
    content: 'We provide our Customers with the best quality products available',
    description: 'Odio ut sem nulla pharetra diam sit amet nisl suscipit. Amet aliquam id diam maecenas ultricies mi eget mauris. Leo vel orci porta non pulvinar neque'
}
function QualityProductComponent(props) {
    return(
        <div className="mt-8">
            <div class="sm:flex w-3/5 mx-auto items-center justify-center">
                <div class="sm:w-1/3">
                    <div class="justify-center p-2">
                        <div class="size-full"><div class="row-span-2"><TitleComponent data={getAmataNaturalsData}></TitleComponent></div></div>
                    </div>
                </div>
                <div class="sm:w-2/3">
                    <div class="p-2">
                        <div class="size-full">
                            <div class="row-span-2">
                                <ContentComponent data={getAmataNaturalsData}></ContentComponent>
                                <DescriptionComponent data={getAmataNaturalsData}></DescriptionComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:flex w-3/5 mx-auto items-center justify-center">
                <div class="sm:w-1/3 p-2">
                    <div className='border bg-white  dark:bg-neutral-800'>
                        <div className='flex p-2'>
                            <img src={img16} class="h-auto m-w-6 rounded" alt="..." />
                            <div class="p-4 text-center md:text-left space-y-4">
                                <p class="text-md font-semibold">Natural Process</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sm:w-1/3 p-2">
                    <div className='border bg-white dark:bg-neutral-800'>
                        <div className='flex p-2'>
                            <img src={img17} class="h-auto m-w-6 rounded" alt="..." />
                            <div class="p-4 text-center md:text-left space-y-4">
                                <p class="text-md font-semibold">Experienced Staff</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:w-1/3 p-2">
                    <div className='border bg-whitedark:bg-neutral-800'>
                        <div className='flex p-2'>
                            <img src={img18} class="h-auto m-w-6 rounded" alt="..." />
                            <div class="p-4 text-center md:text-left space-y-4">
                                <p class="text-md font-semibold">Animal health comes </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QualityProductComponent;