import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-lp_red text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImg}
          alt="Dog Image"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl leading-10" data-aos="fade-down">
              Your pet deserves care, affection and special attention.
            </h1>
            <p className="lg:text-lg" data-aos="fade-right">
              We offer the best services to ensure the well-being and happiness
              of your four-legged friend.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              href="#"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
            justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contact us on WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                off on your first purchase
              </p>

              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Foto do gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Dog Image"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
