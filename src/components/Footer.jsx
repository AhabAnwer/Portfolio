import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2026 <strong>Ahab Anwer</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => {
            const isExternal = link.link.startsWith("http");
            return (
              <Link
                key={link.name}
                to={link.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            );
          })}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
