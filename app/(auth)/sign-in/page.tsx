import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function SignInPage() {
  return (
    <div className="min-h-screen p-4 grid grid-cols-5 grid-rows-1 gap-4 ">
      <div className="col-span-2 row-span-1 flex flex-col justify-between items-start">
        <div>
          <span
            className={`text-2xl font-black text-primary ${styles.brandIcon}`}
          >
            HELPDESK
          </span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            repellendus atque omnis culpa cumque officia nobis obcaecati iste
            deserunt, saepe, ut voluptatum odit provident ipsum eveniet labore.
            Voluptas, magni perspiciatis.
          </p>
        </div>
        <div className="w-full text-center">
          <p className="text-sm">
            Need an account?{" "}
            <Link className="text-primary underline font-bold" href="/sign-up">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
      <div className="col-span-3 row-span-1 rounded-2xl bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-0">
          <Image
            fill
            src="/bg/sigin.webp"
            alt="an abstract black and blue cloth design"
          />
        </div>
        <div className="absolute inset-0 top-2/3 p-4 z-10 overflow-hidden backdrop-blur bg-white/10 border-t border-white/10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit
            repellat distinctio ea quidem sequi nam voluptatibus deleniti vero
            repudiandae, ipsam explicabo, debitis necessitatibus sapiente nihil
            omnis recusandae, quod cumque.
          </p>
        </div>
      </div>
    </div>
  );
}
