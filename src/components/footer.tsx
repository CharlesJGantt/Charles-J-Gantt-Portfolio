import React from "react";
import { Typography, IconButton, Collapse, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );

    return () =>
      window.removeEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpen(false)
      );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Typography variant="h6" color={isScrolling ? "blue-gray" : "white"} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Material Tailwind
      </Typography>
      <ul
        className={`ml-10 hidden items-center gap-6 lg:flex ${
          isScrolling ? "text-gray-900" : "text-white"
        }`}
      >
        <NavItem>Home</NavItem>
        <NavItem>About Me</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
      <div className="hidden items-center lg:flex gap-2">
        <Button variant="text" color={isScrolling ? "gray" : "white"} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Log in
        </Button>
        <a href="https://www.material-tailwind.com/blocks" target="_blank">
          <Button color={isScrolling ? "gray" : "white"}>Blocks</Button>
        </a>
      </div>
      <IconButton
        variant="text"
        color="white"
        onClick={handleOpen}
        className="ml-auto inline-block lg:hidden"
      >
        {open ? (
          <XMarkIcon strokeWidth={2} className="h-6 w-6" />
        ) : (
          <Bars3Icon strokeWidth={2} className="h-6 w-6" />
        )}
      </IconButton>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="text" color="gray">
              Log in
            </Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">Blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Navbar;
