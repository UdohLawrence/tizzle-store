'use client';

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <Image
        priority={true}
        src='/images/logo.svg'
        width={60}
        height={60}
        alt={`${APP_NAME} logo`}
      />
      <div className="p-6 rounded-lg w-full sm:w-1/2 md:w-1/3 shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find the requested page</p>
        <Button
          variant='outline'
          className="mt-4 ml-3"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound