'use client';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [ruaAvenida, setRuaAvenida] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeSobrenome, setNomeSobrenome] = useState('');
  const [error, setError] = useState('');

  const {
    cart,
    cartTotal,
    removeFromCart,
    clearCart
  } = useCart();

  const ZAPIER_URL = "/api/send-to-zapier";
  /* HANDLE SUBMIT  */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!cep.trim() || !ruaAvenida.trim() || !numero.trim() || !telefone.trim() || !nomeSobrenome.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

   const selectedSize = cart[0]?.size || null;

    try {
      const body = {
        orderId: Date.now().toString(), 
          email,
          cep,
          ruaAvenida,
          numero,
          complemento,
          infoAdicional,
          telefone,
          nomeSobrenome,
        items: cart.map(item => ({
          description: item.name || item.title || "Produto sem nome",
          price: Math.round(Number(item.price) * 100), // convert R$ → centavos
          quantity: item.quantity || 1,
          size: item.size || null,
        })),
      };

      const zapierRes = await fetch(ZAPIER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!zapierRes.ok) {
      console.warn("Zapier webhook falhou:", await zapierRes.text());
    }

    // ✅ 2️⃣ Then call your backend to start checkout
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    //error 
      const data = await res.json();

      if (data.url) {
        // ✅ Redirect user to InfinitePay checkout page
        window.location.href = data.url;
      } else {
        setError("Erro ao criar o link de pagamento.");
      }
    } catch (err) {
      console.error("Erro no checkout:", err);
      setError("Algo deu errado. Por favor, tente novamente mais tarde.");
    }
  };

  // Optional: Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart-page h-300">
      <main className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-black">Meu Carrinho</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Seu Carrinho Está Vazio</p>
            <Link 
              href="/" 
              className="inline-block bg-emerald-900 text-black px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
            >
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200 mb-8">
              {cart.map(item => (
                <div key={item.id} className="py-4 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-black">{item.name}</h3>
                    <p className="text-gray-600">R$ {Number(item.price).toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg text-black">Total:</span>
                <span className="font-bold text-xl text-black ">R$ {cartTotal}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition-colors text-black "
                >
                  Limpar Carrinho
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md space-y-4 mt-6"
              >
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
                  Adicione seus dados e continue para pagamento
                </h1>

                <input
                  type="email"
                  placeholder="seuemail@porexemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Rua / Avenida"
                  value={ruaAvenida}
                  onChange={(e) => setRuaAvenida(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Informações adicionais"
                  value={infoAdicional}
                  onChange={(e) => setInfoAdicional(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="tel"
                  placeholder="Telefone (+99)123456789"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Nome e sobrenome"
                  value={nomeSobrenome}
                  onChange={(e) => setNomeSobrenome(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 text-black focus:ring-blue-500"
                />

                {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-[#082402ea] text-white font-semibold py-2 rounded-lg hover:bg-emerald-950 transition"
                >
                  Continuar
                </button>
              </form>
            </div>
          </>
        )}
      </main>
      
          <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow container mx-auto p-4 max-w-4xl">
              {/* ... your cart content here ... */}
            </main>

            <footer className="w-full bg-[#fff] text-black px-4 py-4 border-t">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <h3 className="text-black font-semibold mb-2">Suporte</h3>
                  <ul>
                    <li><a href="/policy/helpCenter" className="text-black hover:underline">Centro de ajuda</a></li>
                    <li><a href="/vestidos/suporteWhatsapp" className="text-black hover:underline">Tenho perguntas</a></li>
                    <li><a href="/vestidos/suporteEmail" className="text-black hover:underline">Problemas com pedido</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-black font-semibold mb-2">----</h3>
                  <ul>
                    <li><a href="https://stripe.com/br/payments" className="text-black">Vendas feitas pelo sistema renomado Stripe, Stripe, Inc.</a></li>
                    <li><a href="https://stripe.com/br/payments" className="text-black">Seus dados são guardados</a></li>
                    <li><a href="https://stripe.com/br/payments" className="text-black">com segurança SSL</a></li>
                    <li><a href="https://stripe.com/br/payments" className="text-black">STRIPE🔒</a></li>
                    <li><a href="https://stripe.com/br/payments" className="text-black">----</a></li>
                    <li><a href="https://stripe.com/br/payments" className="text-black">https://stripe.com/br/payments</a></li>
                  </ul>
                </div>
                 <div>
                  <h3 className="text-black font-semibold mb-2">Pagamento</h3>
                  
                    <img src="images/boleto.png" className="w-10 h-5 object-cover" />
                    <img src="images/mastercard.png" className="w-10 h-5 object-cover" />
                    <img src="images/visa.png" className="w-10 h-5 object-cover" />
                  
                </div>

                <div>
                  <img src="images/stripe.png" className="w-40 h-40 object-cover" />
                </div>

                <div>
                  <img src="images/nextjs.jfif" className="w-20 h-20 object-cover" />
                </div>
              </div>
              {/*integrate when we get the Copyright for MOTF <div className="mt-8 
              text-center text-xs text-gray-500"> © {new Date().getFullYear()} Mostf. 
              All rights reserved. </div> */}
            </footer>
          </div>

        </div>
  );
}