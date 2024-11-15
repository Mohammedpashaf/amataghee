import Cold from '../assets/img/Cold Pressed Oil.png';
import Ghee from '../assets/img/Ghee.png';
import Honey from '../assets/img/honey.png';
import CustomButton from './common/CustomButton';
import DescriptionComponent from "./common/DescriptionComponent";
const getData = {
    title: 'About Company',
    content: ' We Provide a Full Range of Services',
    description : "We invite you to experience the rich and wholesome taste of our A2 ghee, knowing that it comes from our own farm's sustainable and ethical practices. Thank you for supporting our farm and farming with a purpose."
}

function ExploreProductComponent(props) {
    return(
        <div className="mt-8 p-4">
            <div className="text-center content-center w-full md:w-3/5 mx-auto ">
                <h1 class='explorehead'>Explore Our Products</h1>
                <DescriptionComponent data={getData}></DescriptionComponent>
            </div>
            <div class="sm:flex wi-full mx-auto text-center max-w-screen-lg mx-auto mt-2 ">
                <div className="flex-1 p-6 border-solid border-full border-right-none">
                    <img className="h-60 w-60 image-center" src={Ghee} alt='Ghee'/>
                    <h1 className="mt-4 mb-5 font-bold" >Pure A2 Ghee</h1>
                    <CustomButton name='Buy Now' customClass={props.customClass} className={props.className}></CustomButton>
                </div>
                <div class="flex-1 p-6 border-solid border-full border-right-none">
                    <img class="h-60 w-60 image-center" src={Cold} alt='Cold'/>
                    <h1 className="mt-4 mb-5 font-bold" >Cold Pressed Oil</h1>
                    <CustomButton name='Coming soon' customClass={props.customClass} className={props.className}></CustomButton>
                </div>

                <div class="flex-1 p-6 border-solid border-full">
                    <img class="h-60 w-60 image-center" src={Honey} alt='Honey'/>
                    <h1 className="mt-4 mb-5 font-bold" >Honey</h1>
                    <CustomButton name='Coming soon' customClass={props.customClass} className={props.className}></CustomButton>
                </div>
            </div>
        </div>
    )
}
export default ExploreProductComponent;