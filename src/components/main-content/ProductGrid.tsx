import ProductCard, { type Product } from './ProductCard'

export default function ProductGrid() {
  const productCards: Product[] = [
    {
      title: 'Technical Shell Jacket',
      price: 1450,
      imageSrc:
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800',
      category: 'Outerwear',
    },
    {
      title: 'Speedster Running Shoes',
      price: 1200,
      imageSrc:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
      category: 'Footwear',
    },
    {
      title: 'Minimalist Quartz Watch',
      price: 1850,
      imageSrc:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      category: 'Accessories',
    },
    {
      title: 'Classic Canvas Sneakers',
      price: 550,
      imageSrc:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
      category: 'Footwear',
    },
    {
      title: 'Premium Wireless Headphones',
      price: 2200,
      imageSrc:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      category: 'Accessories',
    },
    {
      title: 'Tech Daypack',
      price: 1100,
      imageSrc:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
      category: 'Accessories',
    },
  ]

  return (
    <div id="product-grid" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {productCards.map((product: Product, index: number) => {
        return (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            imageSrc={product.imageSrc}
            category={product.category}
          />
        )
      })}
    </div>
  )
}
