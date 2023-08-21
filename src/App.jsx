import React from "react";
import FloorsComponent from "./components/FloorsComponent/FloorsComponent";

function App() {
 
  return (
    <section
      className="w-full flex justify-center"
    >
      <div className="p-5 rounded-2xl border-solid border bg-gray-50 mx-5 my-6 w-6/12 min-w-fit">
        <h1 className="my-5 text-4xl font-semibold text-red-900">Pruebas</h1>
        <hr className="mb-3 mt-1"/>
        <FloorsComponent />
      </div>
    </section>
  )
}

export default App
