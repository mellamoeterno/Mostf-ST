"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useCart } from "@/app/contexts/CartContext";
import MiniCart from "@/app/components/miniCart";

export default function DesktopComponent() {
  const [showHeaderNames, setShowHeaderNames] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const renderProductCard = (item, index) => (
    <div
      key={index}
      className="flex flex-col items-center bg-white p-4 shadow hover:shadow-md transition rounded"
    >
      <Link href={item.href} className="w-full">
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-72 object-cover mb-4 rounded"
        />
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </Link>
    </div>
  );

  // HEADER
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 10) {
        // user scrolled down
        setShowHeaderNames(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // user scrolled up
        setShowHeaderNames(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productNames = ["conjuntos", "vestidos", "camisas", "calças", "perfumes"];
//HEADER

const conjuntos = [
    {
      id: "emily0002",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: 'images/roupas/emilyEmParis(emBreve).png',
      title: "Emily Em Paris",
      desc: "(Em Breve)",
      price: 199,
    },
    {
      id: "livia-0003",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "images/roupas/blusaSocialHomeOffice.png",
      title: "Blusa Social Home Office",
      desc: "além do céu",
      price: 199,
    },
    {
      id: "oceano-0004",
      href: '/vestidos/vestidoLeseVermelho',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1759135599/leseV_1_syumax.png",
      title: "vestido lese vermelho",
      desc: "estilo impecável",
      price: 199,
    },
    {
      id: "buque-0005",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672831/conjunto_7_csvmte.jpg",
      title: "Rosa buquê",
      desc: "rosa buquê",
      price: 199,
    },
    {
      id: "nome1",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672831/conjunto_6_ojwfyg.jpg",
      title: "Conjunto Miranda",
      desc: "conjunto miranda",
      price: 199,
    },
    {
      id: "nome2",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672830/barbara_3_pgquqv.jpg",
      title: "Conjunto Bárbara",
      desc: "conjunto bárbara",
      price: 199,
    },
    {
      id: "nome3",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672830/auroraVinho_4_dl4lnv.jpg",
      title: "Aurora vinho",
      desc: "aurora vinho",
      price: 199,
    },
    {
      id: "nome4",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672829/barbara_2_2r_zr39iw.jpg",
      title: "Barbara Cáqui",
      desc: "barbara cáqui",
      price: 199,
    },
    {
      id: "nome5",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672829/barbara_1_mh6ngs.jpg",
      title: "Barbara Branco",
      desc: "barbara branco",
      price: 199,
    }
  ];

  const blusas = [
    {
      id: "nome6",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672897/trico_4_plg40d.jpg",
      title: "Blusa tricô",
      desc: "blusa em tricô",
      price: 199,
    },
    {
      id: "nome7",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672893/pu_3_iibpi1.jpg",
      title: "Jaqueta Pu",
      desc: "jaqueta ultra leve macia",
      price: 199,
    },
    {
      id: "nome8",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672891/jaquetaOutonoV_1_fktdvc.jpg",
      title: "Jaqueta Outono",
      desc: "jaqueta Outono",
      price: 199,
    }
  ];

  const calcas = [
    {
      id: "nome9",
      href: 'https://checkout.infinitepay.io/sotfstudio?items=[{"name":"lese+vermelho+P","price":18900,"quantity":1}]&redirect_url=https://mostf.vercel.app/',
      src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1749679231/trouserBranca_1_xpl4rr.jpg",
      title: "Calça Comfy",
      desc: "calça comfy +",
      price: 199,
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] font-sans px-4 sm:px-6 md:px-8 gap-10">
       <>
              <MiniCart />
    
              <div className="flex flex-col items-center justify-center ...">
                {/* ...rest of your layout */}
              </div>
      
     {/*  <div className="relative min-h-screen bg-white"></div> */}
     {/* HEADER HEADER HEADER */}
        <header
        className={`hidden md:flex fixed top-36 left-0 w-full z-30 items-center justify-between px-6 py-3 bg-white/60 backdrop-blur-md shadow-sm transition-transform duration-500 ${
            showHeaderNames ? "translate-y-0" : "-translate-y-24"
        }`}
        >
        {/* Desktop product names */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium text-sm uppercase tracking-wide">
          {productNames.map((name, i) => (
            <a key={i} href="#" className="hover:text-gray-600 transition">
              {name}
            </a>
          ))}
        </div>

      </header>
      {/* Mobile menu */}
        <div className="md:hidden fixed top-3 left-3 z-50">
        <button
            className="p-2 text-gray-700 bg-white/80 backdrop-blur-sm rounded-md shadow-sm"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
        >
            <Menu className="w-6 h-6" />
        </button>
        </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md md:hidden z-20">
          <nav className="flex flex-col p-4 gap-3 text-gray-800 font-medium text-sm uppercase">
            {productNames.map((name, i) => (
              <a key={i} href="#" className="hover:text-gray-600 transition">
                {name}
              </a>
            ))}
          </nav>
        </div>
      )}
      {/* Mobile menu */}

      {/* filler */}
      <div className="relative w-full h-[10vh] md:h-[12vh] overflow-hidden">
        <p
          alt="filler"
          className="w-full h-full object-cover sticky top-0"
        />
      </div>
      {/* HEADER HEADER HEADER */}

      {/* PRODUCTS PRODUCTS PRODUCTS */}
      <img src="https://res.cloudinary.com/dyiyheyzq/image/upload/v1758517835/mostflogoLarge_mzy4ex.jpg" className="fixed top-0 w-full z-30 flex items-center justify-between px-6 py-0 object-cover" />
      <img src="images/showUp/M1.jpeg" className="w-100 h-100 object-cover" />

      <section className="py-12 sm:py-16 px-4 md:px-12 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-black mb-10">Nossos Conjuntos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-6">
          {conjuntos.map(renderProductCard)}
        </div>
      </section>
      <img src="images/showUp/M2.png" className="w-150 h-150 object-cover" />

      <section className="py-12 sm:py-16 px-4 md:px-12 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-black mb-10">Nossas Jaquetas, Blusas & tal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-6">
          {blusas.map(renderProductCard)}
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 md:px-12 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-black mb-10">Nossas Calças</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-6">
          {calcas.map(renderProductCard)}
        </div>
      </section>

      {/* PRODUCTS PRODUCTS PRODUCTS */}
      </>
    </div>
  );
}
