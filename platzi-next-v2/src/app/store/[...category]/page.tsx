"use client";

import React, { use } from 'react'
import { useSearchParams } from 'next/navigation'

interface CategoryProps {
  params: Promise<{
    category: string[]
  }>
}

export default function Category({ params }: CategoryProps) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const model = searchParams.get('model');

  const { category } = resolvedParams;

  console.log(category);
  console.log(model);

  return (
    <div>
      <h3>Categoria dinamica: {category.join(' / ')}</h3>
      {model && <h3>Modelo: {model}</h3>}
    </div>
  )
}