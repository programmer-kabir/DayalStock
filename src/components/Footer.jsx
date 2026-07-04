import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#03243D] text-white">


      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Our Network */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Our Network
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Dayal Stock</a></li>
              <li><a href="#">Premium Assets</a></li>
              <li><a href="#">Video Hub</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Developer API</a></li>
              <li><a href="#">AI Tools</a></li>
              <li><a href="#">Background Removal</a></li>
            </ul>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Site Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Licensing Agreement</a></li>
              <li><a href="#">DMCA</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Popular Searches</a></li>
              <li><a href="#">Popular Photos</a></li>
              <li><a href="#">Popular Videos</a></li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Learn More
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Become a Contributor</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Languages
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>English</li>
              <li>বাংলা</li>
              <li>Español</li>
              <li>Português</li>
              <li>Deutsch</li>
              <li>Français</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-8 lg:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <span className="text-2xl font-bold text-[#03243D]">
                D
              </span>
            </div>

            <h2 className="text-4xl font-bold">
              Dayal Stock
            </h2>

<div className="flex items-center gap-4">
  <FaFacebookF size={19} />
  <FaInstagram size={19} />
  <FaLinkedinIn size={19} />
  <FaXTwitter size={19} />
  <FaYoutube size={19} />
</div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 lg:text-right">
            © 2026 Dayal Stock. All rights reserved ·
            <span className="mx-2">Terms of Use</span>·
            <span className="mx-2">Privacy Policy</span>·
            <span className="mx-2">Fair Use Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;