import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Orb, SplitText } from '../components/Shared';
import { useCart } from '../context/CartContext';

export const ProductosPage = () => {
  const [filter, setFilter] = useState<string>('todos');
  const [sort, setSort] = useState<'precio-asc' | 'precio-desc' | 'default'>('default');
  const { isQuizOpen, setIsQuizOpen, addItem } = useCart();

  const categories = ['todos', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filter !== 'todos') {
      result = result.filter(p => p.category === filter);
    }

    if (sort === 'precio-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'precio-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter, sort]);

  return (
    <div className="min-h-screen bg-[#F5F3ED] text-[#0A0906] pt-[120px] pb-24 font-['Inter'] relative selection:bg-[#FF4D2E] selection:text-white">
      <div className="max-w-[1440px] w-full mx-auto px-[32px] md:px-[64px] 2xl:px-[120px]">
        {/* HERO */}
        <div className="mb-16">
          <div className="flex gap-2 text-[12px] text-secondary mb-10 tracking-widest uppercase">
            <Link to="/" className="hover:text-primary transition-colors">Start</Link>
            <span>/</span>
            <span className="text-primary">Dispositivos</span>
          </div>
          <SplitText text="Los dispositivos" as="h1" className="text-[64px] md:text-[80px] font-medium tracking-tight mb-6 leading-none" />
          <p className="text-[18px] text-[var(--theme-color-secondary)] max-w-[600px] leading-relaxed">
            Explora la línea completa de terapia FIR. Desde estimulación facial hasta recuperación celular de cuerpo completo. Cada uno con una longitud de onda específica para tu necesidad.
          </p>
        </div>

        {/* FILTERS & SORT */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 sticky top-[80px] bg-[#F5F3ED]/90 backdrop-blur-md py-4 z-20 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-[13px] font-medium transition-colors border ${filter === c ? 'bg-[#0A0906] text-white border-[#0A0906]' : 'bg-transparent text-secondary border-[var(--theme-color-border)] hover:border-primary hover:text-primary'}`}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
          <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
            <span className="text-[12px] text-secondary">Ordenar por:</span>
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="bg-transparent border border-[var(--theme-color-border)] rounded-full px-4 py-2 text-[13px] font-medium"
            >
              <option value="default">Relevancia</option>
              <option value="precio-asc">Precio: de menor a mayor</option>
              <option value="precio-desc">Precio: de mayor a menor</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                key={product.id}
                className="group relative flex flex-col"
              >
                <Link to={`/producto/${product.slug}`} className="block relative w-full aspect-[4/5] bg-white rounded-[24px] overflow-hidden mb-6 flex items-center justify-center p-8 border border-[var(--theme-color-border)]">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full p-4">
                      <Orb colors={product.orbColors} size="100%" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#F5F3ED] border border-[var(--theme-color-border)] rounded-full px-3 py-1 text-[11px] font-medium">
                    {product.number}
                  </div>
                </Link>

                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/producto/${product.slug}`} className="hover:opacity-70 transition-opacity">
                      <h2 className="text-[24px] font-medium leading-none">{product.name}</h2>
                    </Link>
                    <div className="text-[18px] font-medium">€{product.price}</div>
                  </div>
                  <div className="text-[13px] text-secondary italic mb-4">{product.originalName}</div>
                  <p className="text-[14px] text-secondary leading-relaxed line-clamp-2 mb-6">
                    {product.tagline}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.specs.wavelengths.map(w => (
                        <div key={w} className="text-[11px] px-2 py-1 border border-[var(--theme-color-border)] rounded-full text-secondary">
                          {w}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => addItem(product)}
                      className="w-full px-6 py-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-[14px] font-medium"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-32 w-full bg-[#0A0906] rounded-[32px] p-[40px] md:p-[80px] text-[#F5F3ED] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] opacity-20 pointer-events-none">
            <Orb colors={['#FF4D2E', '#A78BFA', '#0A0906']} size="100%" />
          </div>
          <div className="max-w-[480px] relative z-10">
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] mb-6">¿No sabes por dónde empezar?</h2>
            <p className="text-[16px] text-white/70 leading-relaxed mb-8">
              Encuentra el dispositivo eefit ideal para tu estilo de vida y necesidades. Solo te llevará dos minutos.
            </p>
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="bg-[#FF4D2E] text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#E63D20] transition-colors inline-block"
            >
              Hacer el test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
