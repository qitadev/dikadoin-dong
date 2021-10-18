import React from 'react'

export default function ProductItem({ product }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-brand-brown">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={product.img_url}
          alt={product.name}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold">
          {product.type} ({product.name})
        </h2>
        <p>
          Rp {product.price}
        </p>
        <button className="mt-2 px-4 py-2 bg-brand-primary rounded w-full text-sm font-medium">
          Beli Sekarang
        </button>
        <button className="mt-2 px-4 py-2 rounded w-full text-sm font-medium">
          Lihat Detail
        </button>
      </div>
    </article>
  )
}
