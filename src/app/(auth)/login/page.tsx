import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {signIn} from "@/auth";
export default function LoginPage() {
  const loginWithGoogle=async()=>{
    'use server';
    console.log('loginWithGoogle');
    await signIn('google');
  }
  const loginWithGithub=async()=>{
    'use server';
    console.log('loginWithGithub');
    await signIn('github');
  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 text-center -translate-y-20">

      <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
      <Card className="w-[350px] mt-20">
        
        <CardHeader className="flex flex-col items-start text-left">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Signin to your account
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex  flex-col gap-5">
          <form action={loginWithGoogle} className="w-full">
          <Button size="xl" className="w-full">
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </Button>
          </form>
          <form action={loginWithGithub} className="w-full">
          <Button size="xl" className="w-full">
            <FaGithub className="mr-2 text-xl" />
            Continue with Github
          </Button>
          </form>
        </CardFooter>        
      </Card>
    </div>
  )
}
