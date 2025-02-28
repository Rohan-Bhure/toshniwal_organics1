import React from "react";
import Youtube from "../assets/icons8-youtube.svg";
import Instagram from "../assets/instagram-1-svgrepo-com.svg";
import LinkedIn from "../assets/icons8-linkedin.svg";
import Twitter from "../assets/icons8-twitter.svg";
import Facebook from "../assets/icons8-facebook.svg";
import Whatsapp from "../assets/icons8-whatsapp24.svg";
import Email from "../assets/email-opened-svgrepo-com.svg";
import { Vegan } from "lucide-react";
const Footer: React.FC = () => {
  return (
    <footer className=" pb-12  dark:bg-gray-900 ">
      <div className="container px-6 py-12  ">
        <div className="flex justify-between px-8 text-white">
          <div className="">
            <a href="#" className="flex items-center space-x-3">
              <Vegan className="text-green-700" />
              <span className="text-2xl font-semibold dark:text-white">
                Toshniwal{" "}
                <span className=" hover:text-orange-300">Organics</span>
              </span>
            </a>
            <h1 className="text-white text-2xl pt-5">
              {" "}
              Fresh, Pure, and Naturally Yours!🌿🥕🍅
            </h1>
          </div>

          <div>
            <ul>
              <h1>Contact us</h1>
              <li>
                ALPINE FOODS, Gala no. 214, 2nd floor,
                <br /> Nilgiri Industrial Estate, T J Road, Sewri West,
                <br />
                Mumbai City, Maharashtra - 400033
              </li>
              <li>
                Call Us : 9833907750
                <br />
                Whatsapp : 9833907750
                <br />
                E-mail : contact@thefarmeronline.com
                <br />
              </li>
            </ul>
          </div>

          <div>
            <h1>About</h1>
            <h1>Home</h1>
            <h1>Contact</h1>
            <h1>Support</h1>
          </div>

          <div className="">
            <h1>Account</h1>
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col">
                <a>Your Account</a>
                <a>Your Orders</a>
              </div>
            </div>
          </div>
          <div className="">
            <h1>Connect Us</h1>
            <div className="flex justify-between items-center gap-2">
              <img src={Facebook} className="h-9" />
              <img src={Twitter} className="h-9" />
              <img src={Instagram} className="h-9" />
              <img src={LinkedIn} className="h-10" />
              <img src={Youtube} className="h-10" />
            </div>
            <div className="space-y-2 mt-3">
              <h1 className="flex items-center gap-4">
                <img src={Whatsapp} className="h-9 " />
                <span>+91 9823110433</span>
              </h1>

              <h1 className="flex items-center gap-4">
                <img src={Email} className="h-8" />
                <span>toshiwalhelp@gmail.com</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-white"></div>
      <footer className="bg-gray-800 text-white text-center py-4">
  <p>&copy; 2025 Toshniwal Organics. All rights reserved.</p>
</footer>
    </footer>
  );
};

export default Footer;
