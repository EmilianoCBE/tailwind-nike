import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
import { Button } from '../components/Button'

export const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you <span className='text-coral-red'>Super</span> <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-14 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique asperiores architecto officia fugit eius distinctio rem explicabo ratione a. Totam iste, tempora at deleniti consequuntur itaque corporis molestias reprehenderit eos.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique asperiores architecto officia fugit eius distinctio rem explicabo ratione a. Totam iste, tempora at deleniti consequuntur itaque corporis molestias reprehenderit eos.
        </p>
        <div className='mt-11'>
          <Button label="Shop now"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}
