import mansun from '../assets/img/mansun.png';
import woman from '../assets/img/woman.png';
import ContentComponent from "./common/ContentComponent";
import TitleComponent from "./common/TitleComponent";
const getBlogUpdateComponentData = {
    title: 'Blog & Updates',
    content: 'Latest Articles & Tips',
}
function BlogUpdateComponent() {
    return(
        <div className="w-3/5 mx-auto mb-11">
            <TitleComponent data={getBlogUpdateComponentData}></TitleComponent>
            <ContentComponent data={getBlogUpdateComponentData}></ContentComponent>
            <div class="grid sm:grid-cols-2 justify-center gap-2">
                <div className='pos-relative'>
                    <img class="height30rem object-cover rounded-lg img-css" src={mansun} alt=""/>
                    <div className='blog-image'>
                    <div className='flex'>
                        <p className="mb-3">Food Facts - {new Date().toLocaleDateString()}</p>
                    </div>
                    <h2>How Can Calcium Deficiency Cause Osteoporosis?</h2>
                    </div>
                </div>
                <div className='pos-relative'>
                    <img class="height30rem object-cover rounded-lg img-css" src={woman} alt=""/>
                    
                    <div className='blog-image'>
                    <div className='flex'>
                        <p className="mb-3">FARMER STORIES - {new Date().toLocaleDateString()}</p>
                    </div>
                    <h2>Supporting Farmers Returning to Agriculture</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlogUpdateComponent;