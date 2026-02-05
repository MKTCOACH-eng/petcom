export function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Categorías</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/productos/perros/alimento-seco" className="hover:text-petcom-coral">Alimentación</a></li>
              <li><a href="/productos/perros/higiene-cuidado" className="hover:text-petcom-coral">Higiene</a></li>
              <li><a href="/productos/perros/juguetes" className="hover:text-petcom-coral">Juguetes</a></li>
              <li><a href="/productos/perros/accesorios" className="hover:text-petcom-coral">Accesorios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explorar</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/blog" className="hover:text-petcom-coral">Blog</a></li>
              <li><a href="/servicios" className="hover:text-petcom-coral">Servicios</a></li>
              <li><a href="#" className="hover:text-petcom-coral">Proveedores</a></li>
              <li><a href="#" className="hover:text-petcom-coral">Vender en Petcom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-petcom-coral">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-petcom-coral">Privacidad</a></li>
              <li><a href="#" className="hover:text-petcom-coral">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-petcom-coral">Instagram</a></li>
              <li><a href="#" className="hover:text-petcom-coral">Facebook</a></li>
              <li><a href="#" className="hover:text-petcom-coral">TikTok</a></li>
            </ul>
            <div className="mt-4">
              <form className="flex gap-2">
                <input type="email" placeholder="Tu email" className="flex-1 px-3 py-2 border rounded-lg" />
                <button className="px-4 py-2 rounded-lg bg-petcom-yellow text-white">Suscribirme</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} PETCOM</div>
      </div>
    </footer>
  );
}