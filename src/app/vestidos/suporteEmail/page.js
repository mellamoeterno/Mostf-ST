'use client'
import Link from "next/link";

export default function suporteEmail() {
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] font-sans px-4 sm:px-6 md:px-8 gap-10">
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Suporte E-mail</h2>
            <p className="text-lg text-gray-600 mb-4">Fale conosco pelo nosso E-mail, aqui você pode tratar á respeito de cancelamento de envio, devolução etc.
           </p>
           <li className="text-black">Pelo E-mail não tratamos dúvidas quanto aos produtos, somente via Whatsapp</li>
           <div className="px-3 py-3"></div>
           <h2 className="text-1x1 font-semibold text-gray-800 mb-4">Política de devoluções</h2>
            <p className="text-lg text-gray-600 mb-4">
            De acordo com o Código de Defesa do Consumidor (Lei nº 8.078/90), o cliente da loja MOSTF tem o direito de desistir da compra no prazo de até 7 (sete) dias 
            corridos após o recebimento do produto. A peça deve estar em perfeito estado, sem indícios de uso, com etiqueta afixada e na embalagem original.
            
            
            </p>
            <p className='text-lg text-gray-600 mb-4'>Não aceitamos trocas ou devoluções de:</p>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-4">
            
            <li>Peças em promoção ou liquidação;</li>
            <li>Produtos com sinais de uso, lavagem ou sem etiqueta.</li>
            </ul>
            <p className="text-lg text-gray-600">
            Para solicitar a troca ou devolução, envie um e-mail para: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ecommercmkssouza@gmail.com&su=Olá&Gostaria=I%20de%20suporte%20nesse%20look%20porfavor" 
            className="text-blue-600">
                ecommercmkssouza@gmail.com</a> com o número do pedido, motivo da solicitação e fotos do produto {/* put image here later for demonstration on how the product id look */}
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
            className="text-blue-600">WhatsApp</a> não atendemos erros do sistema pelo email.
            
            </p>
            <p className="text-lg text-gray-600 mb-4">
            Qualquer outro assunto/dúvida, atendemos pelo <a href="https://wa.me/556181808187" 
            className="text-blue-600">WhatsApp</a>.</p>
            <div className="px-3 py-3"></div>
            <p className="text-lg text-gray-600 mb-4">Se tem dúvidas sobre guia de tamanhos, as medidas devem estar disponiveis na página de cada produto. Caso o produto 
                não tenha sua medida disponível aguarde um pouco, pois está em produção.</p>
            
            
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