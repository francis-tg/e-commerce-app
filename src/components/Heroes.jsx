import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {IoCart} from "react-icons/io5";
function Heroes() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <Splide options={{autoplay: true, interval: 2000}}>
        <SplideSlide>
          <div className='hero-content flex-col lg:flex-row'>
            <img
              src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              className='max-w-sm rounded-lg shadow-2xl'
            />
            <div>
              <h1 className='text-5xl font-bold'>Box Office News!</h1>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className='btn btn-primary'>
                <IoCart size={25} />
                Passer un commande
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='hero-content flex-col lg:flex-row'>
            <img
              src='https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              className='max-w-sm rounded-lg shadow-2xl'
            />
            <div>
              <h1 className='text-5xl font-bold'>Box Office News!</h1>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className='btn btn-primary'>
                <IoCart size={25} />
                Passer un commande
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Heroes;
