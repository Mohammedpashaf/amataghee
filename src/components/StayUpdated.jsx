import cow from '../assets/img/20 cow.png';
import bull from '../assets/img/bull.png';
function StayUpdated(params) {
    return (
        <div class="font-sans">
            <div class="lg:max-w-5xl max-w-5xl mx-auto my-8">
                <div class="sm:w-3/5 w-3/5 mx-auto text-center">
                    <h2 class="text-gray-800 text-3xl font-extrabold">Stay Updated with Our Latest Insights</h2>
                </div>

                <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-6 max-md:justify-center mt-12">
                    <div class="border rounded-lg overflow-hidden">
                        <img src={bull} class="w-full h-56 object-cover" alt='bull'/>

                        <div class="p-4">
                            <h4 class="text-gray-800 text-base font-bold">Your Go-To Resource for industry Trends</h4>
                            <p class="text-gray-800 text-xs mt-1">of the great explorer of the truth, the master-builder of human happines.no outline
                                rejects,dislikes,or avoids pleasure itself,because it is pleasure.</p>
                        </div>
                        <button type="button" class="m-5 px-6 py-3 rounded text-sm text-gray-800 tracking-wider border-none outline-none bg-gray-200 hover:bg-gray-300">Read more</button>
                    </div>

                    <div class="border rounded-lg overflow-hidden">
                        <img src={cow} class="w-full h-56 object-cover" alt='cow'/>
                        <div class="p-4">
                            <h4 class="text-gray-800 text-base font-bold">Your Go-To Resource  for industry Trends</h4>
                            <p class="text-gray-800 text-xs mt-1">of the great explorer of the truth, the master-builder of human happines.no outline
                                rejects,dislikes,or avoids pleasure itself,because it is pleasure.</p>
                        </div>
                        <button type="button" class="m-5 px-6 py-3 rounded text-sm text-gray-800 tracking-wider border-none outline-none bg-gray-200 hover:bg-gray-300">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StayUpdated;