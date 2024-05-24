import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-blue-300 text-base-content">
        <aside>
          <h2 className="text-xl font-bold">ReviewMart</h2>
          <p>
            We help you find <br />
            your dream plant
          </p>
          <div className="flex text-2xl gap-4 mt-5">
            <CiFacebook />
            <FaInstagram />
            <FiTwitter />
          </div>
          <p className="mt-10">2023 all Right Reserved Term of use ReviewMart</p>
        </aside>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
