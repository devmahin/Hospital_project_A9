import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Map from "../../Compnents/Map/Map";
import { Link } from "react-router-dom";
import UseAuthHook from "../../CustomeHook/UseAuthHook";

function Footer() {
  const {loading } = UseAuthHook();

  return (

    <>
      {
        loading ||  <div className="bg-neutral">
        <footer className=" grid md:grid-cols-2 gap-5 lg:grid-cols-3 gap-x-10 p-10 container mx-auto text-neutral-content">
          <nav className="space-y-3">
            <a
              href="#home"
              className="font-bold text-3xl tracking-wider text-[#00ADB5]"
            >
              Govt.Meditest
            </a>
            <p>
            Govt. Meditest Hospital is committed to providing exceptional healthcare services to all citizens. With state-of-the-art facilities and a dedicated team of medical professionals, we prioritize your well-being.
            </p>
            <div className="flex justify-center md:justify-start  gap-x-5 items-center">
              <div className="bg-[#e7dddd57] p-3 rounded-full">
                <FaFacebook />
              </div>
              <div className="bg-[#e7dddd57] p-3 rounded-full">
                <FaTwitter />
              </div>
              <div className="bg-[#e7dddd57] p-3 rounded-full">
                <FaLinkedin />
              </div>
            </div>
          </nav>
          <nav className="">
            <h6 className="footer-title text-xl ">Quick Link</h6>
            <Link  to="/" className="block">Home</Link>
            <Link  to="/" className="block">Service+</Link>
            <Link  to="/doctor" className="block">Doctor Booking+</Link>
            <Link  to="/updateprofile" className="block">Update Profile</Link>
            <Link  to="/profile" className="block">Profile</Link>
          </nav>
          <nav className="w-full">
            <h6 className="footer-title text-xl ">Medical Location</h6>
            <div className="w-full">
              <Map></Map>
            </div>
          </nav>
        </footer>
      </div>
      }
    </>
    
  );
}

export default Footer;
