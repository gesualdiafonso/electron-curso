import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
export function Home(){

  const queryClient = useQueryClient();

  // Buscar os clientes
  const { data, isFatching } = useQuery( {queryKey: ["customers"], queryFn: async() =>{
    const response = await window.api.fetchAllCustomers();
    //console.log(response);
    return response;
  } })

  // async function handleAdd() {
  //   const response = await window.api.fetchAllCustomers();
  //   console.log(response);
  // }

  // async function handleCustomerById(){
  //   const docId = "4b4b622d-8f77-4667-8b95-8f4e2cdda28b"
  //   const response = await window.api.fetchCustumerById(docId)
  //   console.log(response);
  // }

  // async function handleDeleteCustomer(){
  //   const docId = "4b4b622d-8f77-4667-8b95-8f4e2cdda28b"

  //   const response = await window.api.deleteCustomer(docId);
  //   console.log(response);
  // }


  return(
    <div className='flex-1 flex flex-col py-12 text-white'>
      <div className='px-10'>
        <h1 className='text-white text-xl lg:text-3xl font-semibold mb-4'> Todos os Clientes</h1>
      </div>

      <section className='flex flex-col gap-6 w-full h-screen overflow-y-auto px-10 pb-[200px]'>
        {!isFatching && data?.length === 0 && (
          <p className='text-gray-300'>Nenhum cliente cadastrado...</p>
        )}
        {data?.map((customers) => (
          <Link
            to={`/customer/${customers._id}`}
            key={customers._id}
            className='bg-gray-800 px-4 py-3 rounded'
          >
            <p className='mb-2 font-semibold text-lg'>
              {customers.name}
            </p>
            <p className=''>
              <span className='font-semibold'>Email: </span>
              {customers.email}
            </p>
            {customers.phone && (
              <p className=''>
                <span className='font-semibold'>Telefone: </span>
                {customers.phone}
              </p>
            )}
          </Link>
        ))}
      </section>
    </div>
  )
}