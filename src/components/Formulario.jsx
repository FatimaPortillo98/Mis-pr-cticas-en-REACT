
const Formulario = () => {
  return (
    <>
    <h2 className="text-2xl font-semibold mb-2">Formulario de Productos</h2>
   <form className="border border-green-500 rounded-2xl w-full max-w-md px-6 py -4 mb-10 ">
    {/* Campo  Nombre */}
    <div className="mb-4">
    <label 
      htmlFor="" 
      className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
    <input 
      type="text" 
      id="nombre"
      placeholder="Escriba el nombre del producto. Ej: PC, Notebook"
      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 
      focus:ring-green-500"/>

      </div>

      {/* Campo  Categoria */}
    <div className="mb-4">
    <label 
      htmlFor="" 
      className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
    <input 
      type="text" 
      id="categoria"
      placeholder="Escriba la categoria del producto. Ej: Electronica, Hogar"
      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 
      focus:ring-green-500"/>

      </div>

     {/* Campo  Precio */}
    <div className="mb-4">
    <label 
      htmlFor="" 
      className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
    <input 
      type="text" 
      id="precio"
      placeholder="Escriba el precio del producto. Ej: 1000"
      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 
      focus:ring-green-500"/>

      </div>
  
   </form>
   </>
  )
}

export default Formulario