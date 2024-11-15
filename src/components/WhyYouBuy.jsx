import CustomButton from './common/CustomButton';
function WhyYouBuy() {
  return (
    <div class="max-w-6xl mx-auto sm:grid sm:grid-cols-3 gap-4 ">
      <div class="text-center py-16 border-full mb-4 p-8">
        <h1 className='our-journey-header'>Why you should buy from us!</h1>
        <div className='mb-7 mt-4 w-64'>
          <CustomButton name='Buy Now' customClass={true} className='rounded onlyButton'></CustomButton>
        </div>
      </div>

      <div class="col-span-2 mb-4">
        <div class="sm:grid sm:grid-cols-2 quote1 border-full">
          <div className='border-bottom border-right p-8'>
            <h1 className='font-bold text-4xl pb-3'>01</h1>
            <h1 className='font-semibold text-2xl pb-3 '>We treat our cows with love and care</h1>
            <p className='text-base pb-3 '>We treat our cows with love and care, Providing them
              with a natural and stress-free environment to roam
              and graze freely.</p>
          </div>
          <div className='border-bottom p-8'>
            <h1 className='font-bold text-4xl pb-3'>02</h1>
            <h1 className='font-semibold text-2xl pb-3'>We take great care in the process of making our ghee.</h1>
            <p className='text-base pb-3'> we use traditionl methods and hand craft each batch
              of ghee in small quantities to ensure its quality and
              purity.</p>
          </div>
          <div className='border-bottom border-right p-8'>
            <h1 className='font-bold text-4xl pb-3'>03</h1>
            <h1 className='font-semibold text-2xl pb-3'>Feeding a healthy diet.</h1>
            <p className='text-base pb-3 '> we also make sure to feed cows a healthy diet of
              Organic grass, herbs,and grains. resulting in milk that
              is rich in A2 protein and packed with nutrients.</p>
          </div>
          <div className='border-bottom p-8'>
            <h1 className='font-bold text-4xl pb-3'>04</h1>
            <h1 className='font-semibold text-2xl pb-3'>Your Satisfaction, Our Priority</h1>
            <p className='text-base pb-3 '>of the great explorer of the truth, the master-builder
              of human happiness. No one rejects,dislikes,or
              avoids pleasure itself because its pleasure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyYouBuy;