import React from 'react'

interface CategoryProps {
  params: {
    category: string[]
  },
  searchParams:  {
    model?: string
  }
}

export default async function Category({ params, searchParams }: CategoryProps) {

  const resolvedParams = await params;
  const { category } = resolvedParams
  const { model } = searchParams

  console.log(model);
  console.log(category);

  return (
    <div>
      <h3>Categoria dinamica: {category}</h3>
      <h3>Modelo: {model}</h3>
    </div>
  )
}