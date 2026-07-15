"use client";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        priority={true}
        alt={`${APP_NAME} logo}`}
        width={100}
        height={100}
        src="/images/logo.svg"
      />
      <div className="p-6 text-center rounded-lg shadow-md w-1/3">
        <h1 className="text-3xl font-bold mb-4"> Not Found</h1>
        <p className="text-destructive">Requested page is not found</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => router.push("/")}
        >
          {" "}
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
