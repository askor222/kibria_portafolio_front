import React from 'react'
import SectionTitle from "../Components/SectionTitle";
import "../App/meta.css"

const Meta = () => {
  return (
    <div id="meta" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="META ∞" subtitle="Soy un desarrollador meta. Aqui tienese un ejemplo de mi trabajo. 👍" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          
        <div id='a-frame-container' className="w-full md:w-[50%] md:h-full mt-10" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr", justifyItems: "center", alignItems: "center" }}>
          <iframe src="/src/Pages/aframePage/index1.html" width="500" height="400"></iframe>
        </div>

          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meta