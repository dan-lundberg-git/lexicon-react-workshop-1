import ProductCard from "./ProductCard"

export default function ProductGrid() {
  return (
    <div id="product-grid" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard 
        title="Technical Shell Jacket"
        price="1,450"
        imageSrc="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800"
        category="Outerwear"
      />
      <ProductCard 
        title="Speedster Running Shoes"
        price="1,200"
        imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
        category="Footwear"
      />
      <ProductCard 
        title="Minimalist Quartz Watch"
        price="1,850"
        imageSrc="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
        category="Accessories"
      />
      <ProductCard 
        title="Classic Canvas Sneakers"
        price="550"
        imageSrc="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
        category="Footwear"
      />
    </div>
  )
}
