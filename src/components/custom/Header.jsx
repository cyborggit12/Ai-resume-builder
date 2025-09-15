import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import DashBoard from "../../dashboard";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" width={100} height={100} alt="" />
      {isSignedIn ? (
        <div className="flex gap-3 items-center">
          <Link to={"/dashboard"}>
            <Button className="cursor-pointer" variant="outline">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div>
          <Link to={"/auth/sign-in"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
