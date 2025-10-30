import ItemProducto from "./ItemProducto"

const TablaProducto = () => {
  return (
     <> 
    <h2>Listado de Productos</h2>

    <table className="overflox-x-auto">
      <thead className="min-w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg shadow-md">
        <tr className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold rounded-xl">
          <th className="px-4 py-3 border-b">Nombre del producto</th>
          <th className="px-4 py-3 border-b">Categoría</th>
          <th className="px-4 py-3 border-b">Precio</th> 
          <th className="px-4 py-3 border-b">Acciones</th>
          
          </tr>
        
        
        </thead>
        <tbody className="divide-y divide-gray-200">
          <ItemProducto />

        </tbody>
    </table>
    </>
  )
}

export default TablaProducto