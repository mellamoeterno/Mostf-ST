'use client'
import Link from "next/link";

export default function suporteWhatsapp() {
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] font-sans px-4 sm:px-6 md:px-8 gap-10">
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Suporte WhatsApp</h2>
            <p className="text-lg text-gray-600 mb-4">
            No suporte WhatsApp você pode conversar conosco sobre dúvidas quanto aos produtos ou informar sobre algum erro com sua compra, por exemplo <a href="/vestidos/naoRecebiNumeroDePedido" 
            className="text-blue-600">
            -não recebi email com número de pedido pelo email-</a> 
            
            
            </p>
            <p className="text-lg text-gray-600">
            Para solicitar a troca ou devolução, envie um e-mail: <a href="/vestidos/suporteEmail" 
            className="text-blue-600">
                suporte E-mail</a>.
            </p>
            <li className="text-black">Só tratamos devoluções/cancelamento de pedidos pelo EMAIL</li>
            <p className="text-lg text-gray-600">
            Mais informações sobre política de devolução: <a href="/policy" 
            className="text-blue-600">
                políticas</a>.
            </p>
            <p className="text-lg text-gray-600 mb-4">
            O número do seu pedido pode ser encontrado no email que você recebeu após fazer a compra. Se não recebeu o email de compra envie para nós uma reclamação
            direta para nosso <a href="/vestidos/naoRecebiNumeroDePedido" 
            className="text-blue-600">WhatsApp</a> não atendemos erros do sistema pelo E-mail.
            
            </p>
            <p className="text-lg text-gray-600 mb-4">
            Qualquer outro assunto/dúvida, atendemos pelo <a href="https://wa.me/556181808187" 
            className="text-blue-600">WhatsApp</a> ou pelo email <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ecommercmkssouza@gmail.com&su=Olá&Gostaria=I%20de%20suporte%20nesse%20look%20porfavor" 
            className="text-blue-600">
                ecommercmkssouza@gmail.com</a> Se tem dúvidas sobre guia de tamanhos, as medidas devem estar disponiveis na página de cada produto. Caso o produto 
                não tenha sua medida disponível aguarde um pouco, pois está em produção.
            
            </p>
        </section>
        <header className="w-full bg-[#3d3d3d] text-gray-200 px-4 py-60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">


            <div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="break-words">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ecommercmkssouza@gmail.com&su=Olá&Gostaria=I%20de%20suporte%20nesse%20look%20porfavor" 
                className="text-[#a8a8a8] hover:underline">
                  ecommercmkssouza@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Política</h3>
              <ul>
                <li><a href="/policy" className="text-[#a8a8a8] hover:underline">Política de privacidade</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Contato WhatsApp</h3>
              <p>
                <a href="https://wa.me/556181808187" className="text-[#a8a8a8] hover:underline">
                  +55 (61) 981808187
                </a>
              </p>
            </div>

          </div>
           {/*integrate when we get the Copyright for MOTF

          <div className="mt-8 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Motf. All rights reserved.
          </div>
          */}
        </header>
    </div>
    );
}