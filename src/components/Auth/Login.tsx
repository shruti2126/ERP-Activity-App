import { useFrappeAuth, useFrappeGetCall } from "frappe-react-sdk";
import { useState } from "react";
import {
  BiShow,
  BiHide,
  BiLogoGithub,
  BiLogoGoogle,
  BiLogoFacebookCircle,
  BiMailSend,
} from "react-icons/bi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/comp/ui/card";

import { Input } from "@/comp/ui/input";
import { Label } from "@/comp/ui/label";
import { Button } from "@/comp/ui/button";

import Header from "../Header";

const SocialProviderIcons = {
  github: <BiLogoGithub size="18" />,
  google: <BiLogoGoogle size="18" />,
  facebook: <BiLogoFacebookCircle size="18" />,
};

interface SocialProvider {
  name: "github" | "google" | "facebook";
  provider_name: string;
  auth_url: string;
  redirect_to: string;
  icon: {
    src: string;
    alt: string;
  };
}

const Login = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const { login } = useFrappeAuth();

  return (
    <div className="flex flex-col justify-evenly gap-16 mt-10">
      <Header heading="Activity Management Portal" />
      <div className="flex justify-center">
        <Card className="sm:w-60 md:w-[350px] lg:w-[450px] lg:h-[400px] flex flex-col justify-center">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Activity Management Login</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Something@example.com" type="email"/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="Enter Password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
