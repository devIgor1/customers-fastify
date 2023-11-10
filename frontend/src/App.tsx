import { useRef, useEffect, useState } from "react"
import { FiTrash } from "react-icons/fi"
import api from "./api"

interface CustomerProps {
  id: string
  name: string
  email: string
  created_at: string
  status: boolean
}

const App = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([])
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    loadCustomers()
  }, [])

  async function loadCustomers() {
    const response = await api.get("/customers")

    setCustomers(response.data)
  }

  async function handleRegister() {
    if (!nameRef.current?.value || !emailRef.current?.value) return

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
    })

    setCustomers((allCustomers) => [...allCustomers, response.data])
  }

  async function handleDelete(id: string) {
    try {
      await api.delete("/customer", {
        params: {
          id: id,
        },
      })

      const allCustomers = customers.filter((customer) => customer.id !== id)
      setCustomers(allCustomers)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen min-w-full bg-slate-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-white text-4xl font-medium">Customers</h1>
        <form className="flex flex-col my-6" onSubmit={handleRegister}>
          <label className="font-medium text-white">Name:</label>
          <input
            type="text"
            className="w-full mb-5 p-2 rounded outline-none"
            ref={nameRef}
          />
          <label className="font-medium text-white">Email:</label>
          <input
            type="text"
            className="w-full mb-5 p-2 rounded outline-none"
            ref={emailRef}
          />
          <input
            type="submit"
            value="Register"
            className="cursor-pointer p-2 w-full bg-green-500 rounded font-medium hover:bg-green-400 duration-150"
          />
        </form>

        <section>
          {customers.map((customer) => (
            <article className="w-full bg-white rounded p-2 mb-4 font-medium relative hover:scale-105 duration-200">
              <p>
                <span>Name:</span> {customer.name}
              </p>
              <p>
                <span>Email:</span> {customer.email}
              </p>
              <p>
                <span>Status:</span> {customer.status ? "ACTIVE" : "INACTIVE"}
              </p>

              <button
                onClick={() => {
                  handleDelete(customer.id)
                }}
                className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
              >
                <FiTrash size={18} color="#FFF" />
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
