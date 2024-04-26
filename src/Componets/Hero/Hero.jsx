
const Hero = () => {
      return (
            <div className="carousel w-full rounded-3xl my-8">
                  <div id="slide1" className="carousel-item relative w-full">
                        
                        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1692731798042-c0cfec5c38fa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="poppins">
                              <h1 className="mb-5 lg:text-6xl text-2xl font-bold">Welcome to Bangladesh!</h1>
                              <p className="mb-5 ">Let Bangladesh captivate your heart and soul. Begin your adventure and create <br /> memories that will last a lifetime.</p>
                              <button className="btn btn-primary">Explore More</button>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative w-full">
                  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1661411085325-e9a257764a6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="poppins">
                              <h1 className="mb-5 lg:text-6xl text-2xl font-bold">Welcome to Bangladesh!</h1>
                              <p className="mb-5 ">Let Bangladesh captivate your heart and soul. Begin your adventure and create <br /> memories that will last a lifetime.</p>
                              <button className="btn btn-primary">Explore More</button>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative w-full">
                  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1152443288/photo/big-tree-falling-down-cross-waterfall.jpg?s=1024x1024&w=is&k=20&c=9sx530dXOdHtTXTPXB505yrwiM8j42csfaOiR34IMwI=)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="poppins">
                              <h1 className="mb-5 lg:text-6xl text-2xl font-bold">Welcome to Bangladesh!</h1>
                              <p className="mb-5 ">Let Bangladesh captivate your heart and soul. Begin your adventure and create <br /> memories that will last a lifetime.</p>
                              <button className="btn btn-primary">Explore More</button>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                  </div> 
                  <div id="slide4" className="carousel-item relative w-full">
                  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1177220568/photo/waterfall.jpg?s=1024x1024&w=is&k=20&c=7AFwOKG-POSNCndDWHP5TBxN6SZIAJgK7_O1FTnD_-E='}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="poppins">
                              <h1 className="mb-5 lg:text-6xl text-2xl font-bold">Welcome to Bangladesh!</h1>
                              <p className="mb-5 ">Let Bangladesh captivate your heart and soul. Begin your adventure and create <br /> memories that will last a lifetime.</p>
                              <button className="btn btn-primary">Explore More</button>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                  </div>
            </div>
      );
};

export default Hero;