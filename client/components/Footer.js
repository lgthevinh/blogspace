import { UilFacebookF, UilTwitter, UilGithub } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 rounded-t-2xl bg-blue-600 text-slate-50">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <UilFacebookF size="30" />
          </a>
          <a>
            <UilTwitter size="30" />
          </a>
          <a>
            <UilGithub size="30" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Blogspace Team</p>
      </aside>
    </footer>
  );
};

export default Footer;
