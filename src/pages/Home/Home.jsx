const Home =()=>{

    return (
        <div> 
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_960_720.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Book Your Dream Event With Us</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Home