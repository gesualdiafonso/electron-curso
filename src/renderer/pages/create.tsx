import { useQueryClient, useMutation } from '@tanstack/react-query'
import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface DataMutation {
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  status: boolean;
}

export function Create(){
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const addressRef = useRef<HTMLInputElement | null>(null)
  const phoneRef = useRef<HTMLInputElement | null>(null)
  const roleRef = useRef<HTMLInputElement | null>(null)

  const { isPeding, mutateAsync: createCustomer } = useMutation({
    mutationFn: async (data: DataMutation) =>{

      await window.api.addCustomer({
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
        role: data.role,
        status: true, // Default status
      }).then((response) => {
        console.log("DEU Certo e retornou: ");
        navigate("/");
      }).catch((error) => {
        console.error("Erro ao adicionar cliente: ", error);
      })

    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    }
  });


  async function handleAddCustomer(e: FormEvent){
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const address = addressRef.current?.value;
    const phone = phoneRef.current?.value;
    const role = roleRef.current?.value;
    if(!name || !email || !address || !phone || !role){
      return alert("Preencha todos os campos!")
    }

    await createCustomer({
      name: name,
      email: email,
      address: address,
      phone: phone,
      role: role,
      status: true, // Default status
    })

    // const doc = {
    //   name: "Afonso Gesualdi",
    //   email: "gesualdiafonso@gesualdi.com",
    //   phone: "89972737",
    //   address: "Tucuman, buenos aires",
    //   role: "Dev",
    //   status: true
    // }

    // const response = await window.api.addCustomer(doc);
    // console.log(response);
  }

  return(
    <div className='flex-1 flex flex-col py-12 text-white overflow-y-auto'>
      <section className="flex flex-1 flex-col items-center ">
        <h1 className="text-white text-xl lg:text-3xl font-semibold">Cadastrar novo cliente</h1>

        <form className="w-full max-w-96 mt-4" onSubmit={handleAddCustomer}>
          <div className="mb-2">
            <label htmlFor="">Nome:</label>
            <input
              type="text"
              placeholder="Digite o nome do cliente..."
              className="w-full h-9 rounded bg-white text-black px-2"
              ref={nameRef}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Endereço:</label>
            <input
              type="text"
              placeholder="Digite o endereço do cliente..."
              className="w-full h-9 rounded bg-white text-black px-2"
              ref={addressRef}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              placeholder="Digite o email do cliente..."
              className="w-full h-9 rounded bg-white text-black px-2"
              ref={emailRef}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Cargo:</label>
            <input
              type="text"
              placeholder="Digite o cargo do cliente..."
              className="w-full h-9 rounded bg-white text-black px-2"
              ref={roleRef}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="">Telefone:</label>
            <input
              type="text"
              placeholder="Digite o telefone do cliente..."
              className="w-full h-9 rounded bg-white text-black px-2"
              ref={phoneRef}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 rounded items-center justify-center w-full h-9 disabled:bg-gray-500 hover:bg-blue-600 transition-colors"
            disabled={isPeding}
            >
            Cadastrar o cliente
          </button>
        </form>
      </section>
    </div>
  )
}