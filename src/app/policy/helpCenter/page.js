import Link from "next/link";

export default function helpCenter() {
  return (
<div className="bg-black max-w-7xl mx-auto p-4">
    <header className="bg-black w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Left - Logo */}
        
          {/* Replace with your logo image */}
          <img src="https://res.cloudinary.com/dyiyheyzq/image/upload/v1749672771/icon_mzoomm.ico" alt="Logo" className="h-10 absolute left-15 w-auto" />
        {/* Center - Navigation Links */}
        <nav className="hidden md:flex space-x-8 mx-auto">
        </nav>
      </div>
    </header>
      <h1 className="text-3xl font-semibold text-center mb-8">Centro de ajuda</h1>

      <section className="text-center mb-12">
        <h2>
            <p>
                <a href="/vestidos/suporteEmail" 
                className="font-semibold text-center mb-8 text-blue-600">ecommercmkssouza@gmail.com</a>
                
            </p>
            <p>
                <a href="/vestidos/suporteWhatsapp" className="font-semibold text-center mb-8 text-blue-600">+55 (61) 981808187</a>
            </p>
        </h2>
      </section>
           <Link href="/vestidos/suporteEmail"><p className="text-lg text-gray-600 mb-4">
            -Clique no E-mail para resolver problemas á respeito de detalhes com o seu pedido, cancelamento de envio, ou devolução.
            
            
            </p>
           </Link>
            <div></div>

            <Link href="/vestidos/suporteWhatsapp"><p className="text-lg text-gray-600 mb-4">
            -Clique no número Whatsapp para dúvidas quanto aos produtos ou informar sobre algum erro com sua compra.
            
            
            </p>
            </Link>
</div>
)
};