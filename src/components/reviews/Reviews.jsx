const Reviews = () => {
  return (
    <div>
      <div>
        {/* Banner Div */}
        <div className="bg-[#9538E2] pb-10">
          <h1 className="text-3xl font-semibold py-5 text-center text-white">
            Our Happy Customers Reviews
          </h1>
          <p className="text-center text-[#ffffffb9] text-xs w-[90%] lg:w-[40%] mx-auto lg:text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <section class="mt-16 mb-16 px-2 lg:px-24 lg:mb-24">
          <h1 class="text-3xl font-bold text-center mb-14 poppins-font lg:text-5xl">Client's <span class="text-[#9fec42]">Reviews</span></h1>
           <div class="grid justify-center grid-rows-3  gap-9 lg:grid-rows-1 lg:grid-cols-3 ">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img class="w-full"
                src="../../../public/images/client1.jpg"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <p class="text-center">"Stunning transformation, elegant design, and attention to every detail. Perfect!"</p>
                <div class="rating mx-auto">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div>
                  <h3 class="text-center text-lg font-semibold text-blue-500">Saheen Shuvo</h3>
                  <h3 class="text-center text-base font-medium">Student</h3>
                </div>
            </div>
          </div>
          <div class="card bg-base-100  shadow-xl">
            <figure>
              <img class="w-full"
                src="../../../public/images/client2.jpg"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <p class="text-center">"Exceptional design! Its luxurious, stylish, and cozy. Every detail was thoughtfully executed. Highly recommended!"</p>
                <div class="rating mx-auto">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div>
                  <h3 class="text-center text-lg font-semibold text-blue-500">Rehinna Swift</h3>
                  <h3 class="text-center text-base font-medium">Teacher</h3>
                </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img class="w-full"
                src="../../../public/images/client3.jpg"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <p class="text-center">"Beautifully crafted, modern design with a cozy feel. Exceeded expectations!"</p>
                <div class="rating mx-auto">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div>
                  <h3 class="text-center text-lg font-semibold text-blue-500">Sophia Zemen</h3>
                  <h3 class="text-center text-base font-medium">Banker</h3>
                </div>
            </div>
          </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
