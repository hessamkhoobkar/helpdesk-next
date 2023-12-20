import Image from "next/image";
import styles from "./page.module.css";
import SignInCard from "./SignInCard";

export default function SignInPage() {
  return (
    <div className="min-h-screen p-6 xl:p-4 grid grid-cols-1 xl:grid-cols-5 grid-rows-1 gap-4">
      <div className="col-span-1 xl:col-span-2 row-span-1 flex flex-col justify-between items-center">
        <div className="w-full max-w-sm">
          <span
            className={`text-2xl font-black text-primary ${styles.brandIcon}`}
          >
            HELPDESK
          </span>
        </div>
        <div className="w-full max-w-sm flex flex-col gap-6">
          <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-4xl font-black">Sign in</h1>
            <p>Please select one of provided demo accounts.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-default-400">Sign in as staff</p>
            <SignInCard
              fullname="Norene Theobald"
              email="ntheobald0@behance.net"
              password="lY4a66&Ew"
              avatar="/user-avatar/userav136.webp"
            />
          </div>
          <div className="w-full flex justify-start items-center gap-4">
            <div className="bg-default-200 h-px grow"></div>
            <p>or</p>
            <div className="bg-default-200 h-px grow"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-default-400">Sign in as customer</p>

            <SignInCard
              fullname="Vinny Dobbinson"
              email="vdobbinson8@uol.com.br"
              password="eI03qSXuG=}7`P6"
              avatar="/user-avatar/userav843.webp"
            />
          </div>
        </div>
        <div className="w-full max-w-sm">
          <p className="text-sm">
            Need an account?{" "}
            <span className="text-primary underline font-bold cursor-not-allowed">
              Sign up here
            </span>
          </p>
        </div>
      </div>
      <div className="col-span-1 xl:col-span-3 row-span-1 rounded-2xl bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-0">
          <Image
            fill
            src="/bg/sigin.webp"
            className="opacity-50"
            alt="an abstract black and blue cloth design"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black "></div>
        </div>
        <div className="absolute top-0 left-0 p-8 2xl:p-12 w-4/5 2xl:w-2/3 z-10 overflow-hidden flex flex-col gap-3">
          <h2 className="text-3xl">Welcome to our Helpdesk Portal!</h2>
          <p>
            We&apos;re delighted to have you here. Whether you&apos;re a
            seasoned user or a first-time visitor, our Helpdesk is dedicated to
            providing you with top-notch support and assistance. Sign in below
            to access a world of solutions and expertise.
          </p>
        </div>
        <div className="absolute inset-0 top-[55%] 2xl:top-2/3 p-8 2xl:p-12 z-10 overflow-hidden backdrop-blur-md bg-black/10 border-t border-white/10">
          <div className="flex flex-col gap-3 w-4/5 2xl:w-2/3">
            <h2 className="text-2xl text-warning font-bold">
              This is a demo applicatoin
            </h2>
            <p>
              This is a demonstration application that is currently running on a
              free server. Please treat it with kindness and refrain from
              abusing it. The creation of new accounts is not available, but you
              can use one of the available demo accounts to sign in and explore
              the application.
            </p>

            <p>
              You can sign in as a staff member to access the staff dashboard,
              where you can resolve tickets and assist customers. Alternatively,
              you can sign in as a customer to create a ticket and receive help
              from the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
