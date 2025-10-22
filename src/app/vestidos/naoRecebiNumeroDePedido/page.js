'use client'
import Link from "next/link";

export default function suporteNaoRecebiNumero() {
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#d1d1d1] via-[#afafaf] to-[#bae9ff] font-sans px-4 sm:px-6 md:px-8 gap-10">
       <Link href="https://wa.me/556181808187"><section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Suporte WhatsApp</h2>
            <p className="text-lg text-gray-600 mb-4 hover:text-green-800 transition-colors duration-300">
            Clique no botão abaixo e explique em detalhes o que lhe ocorreu, quanto mais detalhes você der mais rápido resolveremos sua situação.
            Junto de sua mensagem informe o nome completo que você utilizou para fazer o pedido, e se possível, cor e tamanho da roupa -não necessário
            se for mais de 1 roupa-  Precisamos do nome utilizado na compra para verificar o erro no banco de dados.</p>
            <p className="text-lg text-gray-600 mb-4 hover:text-green-800 transition-colors duration-300">⚠️AVISO: não fazemos cancelamento de venda, devolução, ou mudança de endereço pelo Whatsapp, somente via E-mail, para sua própria segurança.</p>
            {/* FIGURE HOW TO HANDLE THIS OUT */}
            
            
            
        </section>
        </Link>
<Link href="https://wa.me/556181808187">
  <img
    src="https://res.cloudinary.com/dyiyheyzq/image/upload/v1758517835/mostflogoLarge_mzy4ex.jpg"
    className="w-full z-30 transition duration-300 hover:brightness-75"
    alt="Mostf Logo"
  />
</Link>
    </div>
    );
}