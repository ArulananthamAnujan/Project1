const Login=()=>{


      return (
        <div className="flex flex-col md:flex-row  items-center justify-evenly ">
          <div className="w-1/2">
            <img src="https://i.ibb.co/pX0s65j/20944201.jpg" alt="20944201" border="0"/>
          </div>

          <div className="">
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-8 shadow-lg p-4">
              <h1 className="text-3xl text-blue-600"> LOGIN TO YOUR ACCOUNT</h1>
               <input
                className="input input-bordered w-full "
                {...register("email", { required: true })}
                placeholder="EMAIL"
              />
              {errors.email && toast.error("EMAIL IS REQUIRED")}
              <input
                className="input input-bordered w-full "
                {...register("password", {
                  required: "PASSWORD REQUIRED",
                  minLength: { value: 6, message: "PASSWORD MUST BE 6 CHACRACTER" },
                })}
                placeholder="PASSWORD"
                type="password"
              />
              {errors.password && toast.error(`${errors.password?.message}`)}
              <p className="text-blue-500"><Link  to="/reset-password">FORGET PASSWORD?</Link></p>
              <button type="submit" className="btn w-full btn-outline bg-blue-500">
                LOGIN
              </button>
               <p className="text-blue-600"> <Link to="/register">DON'T HAVE AN ACCOUNT SIGN-UP</Link></p>
            </form>
            <br></br>
            <button onClick={handleGoogle} className="btn w-full btn-outline bg-blue-600 text-white">CONTINUE WITH GOOGLE <FcGoogle className="mx-2"></FcGoogle></button>
          </div>
        </div>
      );
}

export default  Login