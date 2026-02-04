import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/shared/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.compare_at_price && product.compare_at_price > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.compare_at_price! - product.price) / product.compare_at_price!) * 100)
    : 0;

  return (
    <Link
      href={`/productos/${product.species}/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-petcom-coral/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-4xl">🐾</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.is_featured && (
            <span className="px-3 py-1 bg-petcom-yellow text-sm font-medium rounded-full">
              Destacado
            </span>
          )}
          {hasDiscount && (
            <span className="px-3 py-1 bg-petcom-coral text-white text-sm font-medium rounded-full">
              -{discountPercentage}%
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
              ¡Últimas unidades!
            </span>
          )}
        </div>

        {/* Out of stock overlay */}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="px-4 py-2 bg-white text-gray-900 font-medium rounded-lg">
              Agotado
            </span>
          </div>
        )}

        {/* Quick add button */}
        {product.stock > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add to cart functionality
              console.log('Add to cart:', product.id);
            }}
            className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-petcom-yellow"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        {product.brand && (
          <p className="text-sm text-petcom-coral font-medium mb-1">
            {product.brand}
          </p>
        )}

        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-petcom-coral transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        {product.short_description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.short_description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              ${product.compare_at_price!.toFixed(2)}
            </span>
          )}
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
