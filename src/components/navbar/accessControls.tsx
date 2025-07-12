import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";

const buttonsContainer = cva("flex gap-x-3 items-center");

export async function AccessControls() {
  const session = await auth();

  return (
    <div className={buttonsContainer()}>
      {!session &&  (
        <>
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default">Signup</Button>
          </Link>
        </>
      ) }
      {session && (
        <Link href="/dashboard">
          <Button variant="default">Dashboard</Button>
        </Link>
      )}
    </div>
  );
}
