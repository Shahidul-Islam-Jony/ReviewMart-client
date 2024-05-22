import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import loginAnimation from "../../animation/loginAnimation.json";

const Login = () => {
  const { login, loginByGoogle } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location?.state?.from?.pathname);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    login(email, password)
      .then((result) => {
        console.log(result);
        swal("Done!", "Login successful", "success");
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch((error) => {
        toast.error(`${error}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      });
  };

  const handleLoginByGoogle = () => {
    loginByGoogle()
      .then((result) => {
        console.log(result);
        swal("Done!", "Login successful", "success");
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      });
  };
  console.log(location);

  return (
      <div className="w-11/12 mx-auto mt-20">
        <div className="flex mx-auto flex-col gap-4 lg:flex-row-reverse md:px-4">
          <div className="w-full lg:w-1/2">
            <Lottie animationData={loginAnimation}/>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
            <div className="rounded-lg w-full shadow-2xl border-2 border-blue-300 bg-base-100 px-4 py-6">
              <form onSubmit={handleLogin}>
                <div>
                  <label className="label">
                    <span className="text-xl font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input rounded-md w-full border-blue-300"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-xl font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input rounded-md w-full border-blue-300"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-blue-300 capitalize text-xl font-semibold"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div className="text-center mt-4">
                  <p>
                    Do not have account ? Please{" "}
                    <Link
                      to="/registration"
                      className="font-medium hover:underline text-blue-400 ml-2"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
              <div>
                <div className="divider">OR</div>
                <button
                  onClick={handleLoginByGoogle}
                  className="btn btn-outline w-full text-lg border-blue-300 capitalize"
                >
                  <FcGoogle className="text-3xl mr-4"></FcGoogle>Login With
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
  );
};

export default Login;
