import { FiTrash } from "react-icons/fi"

const App = () => {
  return (
    <div className="min-h-screen min-w-full bg-slate-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-white text-4xl font-medium">Customers</h1>
        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Name:</label>
          <input type="text" className="w-full mb-5 p-2 rounded outline-none" />
          <label className="font-medium text-white">Email:</label>
          <input type="text" className="w-full mb-5 p-2 rounded outline-none" />
          <input
            type="submit"
            value="Register"
            className="cursor-pointer p-2 w-full bg-green-500 rounded font-medium hover:bg-green-400 duration-150"
          />
        </form>

        <section>
          <article className="w-full bg-white rounded p-2 font-medium relative hover:scale-105 duration-200">
            <p>
              <span>Name:</span> Igor Moraes
            </p>
            <p>
              <span>Email:</span> igor@teste.com
            </p>
            <p>
              <span>Status:</span> ATIVO
            </p>

            <button className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2">
              <FiTrash size={18} color="#FFF" />
            </button>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
