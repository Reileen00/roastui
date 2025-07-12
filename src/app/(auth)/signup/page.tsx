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
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {signIn} from "@/auth";
export default function SignupPage() {
  const signupWithGoogle=async()=>{
    'use server';
    console.log('signupWithGoogle');
    await signIn('google');
  }
  const signupWithGithub=async()=>{
    'use server';
    console.log('signupWithGithub');
    await signIn('github');
  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 px-4 text-center -translate-y-20">

      <h1 className="text-4xl font-bold">No More Design Flaws</h1>
      <Card className="w-[350px] mt-20">
        
        <CardHeader className="flex flex-col items-start text-left">
          <CardTitle>Signup</CardTitle>
          <CardDescription>
            Create an account to continue
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex  flex-col gap-5">
          <form action={signupWithGoogle} className="w-full">
          <Button size="xl" className="w-full">
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </Button>
          </form>
          <form action={signupWithGithub} className="w-full">
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
