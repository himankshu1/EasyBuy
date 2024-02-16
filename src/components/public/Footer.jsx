import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bottom-0 flex justify-between px-52 mt-16 pb-12">
      <Logo />

      <div>
        <ul>
          <li className="font-bold text-gray-500 mb-2 capitalize">About</li>
          <li className="text-xs cursor-pointer hover:underline">Contact Us</li>
          <li className="text-xs cursor-pointer hover:underline">About Us</li>
          <li className="text-xs cursor-pointer hover:underline">
            EasyBuy Stories
          </li>
          <li className="text-xs cursor-pointer hover:underline">Careers</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-bold text-gray-500 capitalize mb-2">Help</li>
          <li className="text-xs cursor-pointer hover:underline">Payments</li>
          <li className="text-xs cursor-pointer hover:underline">Shipping</li>
          <li className="text-xs cursor-pointer hover:underline">
            Cancellation and Returns
          </li>
          <li className="text-xs cursor-pointer hover:underline">FAQs</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-bold text-gray-500 capitalize mb-2">
            Consumer Policy
          </li>
          <li className="text-xs cursor-pointer hover:underline">
            Terms of Use
          </li>
          <li className="text-xs cursor-pointer hover:underline">Security</li>
          <li className="text-xs cursor-pointer hover:underline">Privacy</li>
          <li className="text-xs cursor-pointer hover:underline">Sitemap</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-bold text-gray-500 capitalize mb-2">Social</li>
          <li className="text-xs cursor-pointer hover:underline">Instagram</li>
          <li className="text-xs cursor-pointer hover:underline">Twitter</li>
          <li className="text-xs cursor-pointer hover:underline">
            People's Website
          </li>
          <li className="text-xs cursor-pointer hover:underline">YouTube</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
