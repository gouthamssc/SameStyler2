import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

const NavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "text-sm",
        active ? "text-white font-medium" : "text-white/70 hover:text-white"
      )}
    >
      {children}
    </a>
  );
};

const NavDropdown = ({ href, children }: NavLinkProps) => {
  return (
    <div className="relative group">
      <a
        href={href}
        className="text-white/70 hover:text-white flex items-center text-sm"
      >
        {children}
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </a>
    </div>
  );
};

const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-white/10 rounded-full p-2">
      {children}
    </button>
  );
};

export function Navbar() {
  return (
    <nav className="bg-primary px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl flex items-center">
          <i className="fas fa-cube mr-2"></i>
          <span>REGENERON</span>
          <span className="ml-1 font-normal text-sm">Web Services</span>
        </div>
        <div className="ml-12 flex space-x-6 text-sm">
          <NavLink href="#" active>API Hub</NavLink>
          <NavLink href="#">App Dev</NavLink>
          <NavLink href="#">Marketplace</NavLink>
          <NavDropdown href="#">App Extensions</NavDropdown>
          <NavDropdown href="#">Integrations</NavDropdown>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <IconButton>
          <i className="fas fa-bell text-white text-sm"></i>
        </IconButton>
        <IconButton>
          <i className="fas fa-question text-white text-sm"></i>
        </IconButton>
        <IconButton>
          <i className="fas fa-cog text-white text-sm"></i>
        </IconButton>
        <a href="#" className="bg-white text-primary text-sm font-medium px-4 py-1.5 rounded-full">
          VISIT DEVELOPER PORTAL
        </a>
        <div className="w-9 h-9 bg-[#AA55CC] text-white rounded-full flex items-center justify-center">
          <span className="font-medium text-sm">AD</span>
        </div>
      </div>
    </nav>
  );
}
