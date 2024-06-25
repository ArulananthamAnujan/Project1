


const Login=()=>{

        
      return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 h-1/2 rounded-lg shadow shadow-blue-500/100">
                <p className="text-3xl  text-center my-1 text-bold ">Login</p>
                <form className="px-2 flex flex-col content-around  ">
                      <div className="my-4">
                          <label className="input input-bordered flex items-center gap-2">
                               Email:
                               <input type="text" className="grow" placeholder="daisy@site.com" />
                             </label>
                      </div>
                       <div className="my-4">
                           <label className="input input-bordered flex items-center gap-2">
                                   Password:
                                   <input type="password" className="grow" placeholder="******" />
                              </label>
                       </div>
                    <div>
                        <button className="btn btn-primary  w-full  "> SUBMIT</button>

                    </div>
                </form>
            </div>
        </div>
      );
}

export default  Login