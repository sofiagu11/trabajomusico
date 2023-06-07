import "./Members.css"
export function Members() {
  let integrantes = [
    {
      nombre: "Jennie",
      rol: "Voz principal",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicossaz.appspot.com/o/jennie.jpg?alt=media&token=19ecafa7-9204-4313-9107-312a21449674",
      nacimiento: "16 de enero de 1996 (edad 27 años), Seoul, Corea del Sur",
      id:1,
      datos:"El 22 de septiembre de 2021, se anunció que Jennie sería el rostro oficial de la campaña Coco Neige 2021/22 de Coco Chanel, marca francesa de la cual es embajadora desde 2017, a través de una sesión fotográfica realizada por el dúo fotográfico Inez & Vinoodh, y cuyo lanzamiento oficial se llevó a cabo el 28 de septiembre del mismo año."
    },
    {
      nombre: "Lisa",
      rol: "Bailarína principal",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicossaz.appspot.com/o/lisa.jpg?alt=media&token=95274960-095f-418b-84f4-fc049d38081f",
      nacimiento: "27 de marzo de 1997 (edad 26 años), Satuek District, Tailandia",
      id:2,
      datos:"El 2 de diciembre de 2021, Lisa fue anunciada, a través de una sesión fotográfica realizada en París, como una de las embajadoras mundiales de Celine Haute Parfumerie, la nueva línea de perfumes de Celine, que incluye fragancias personales, elegantes aerosoles recargables de viajes, así como velas y aromas para el hogar."
    },
    {
      nombre: "Jisoo",
      rol: "Voz",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicossaz.appspot.com/o/jisoo.jpg?alt=media&token=740a936f-075f-4878-a491-52b5e0963c0a",
      nacimiento: "3 de enero de 1995 (edad 28 años), Sanbon-dong, Gunpo-si, Corea del Sur",
      id:3,
      datos:"En marzo de 2023, mediante una sesión de fotos para una campaña de colección Primavera/Verano, Jisoo fue anunciada como la nueva embajadora de la marca de moda coreana Dunst. Ese mismo mes protagonizó una nueva campaña a nivel global para la marca Dior junto a la actriz Anya Taylor-Joy, donde promocionó el nuevo lápiz labial de la marca, Dior Addict Lipstick."
    },
    {
      nombre: "Rose",
      rol: "Vocalista principal",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicossaz.appspot.com/o/rose.jpg?alt=media&token=51756987-7d40-406c-9a42-4717ed1b6dc8",
      nacimiento: "11 de febrero de 1997 (edad 26 años), Auckland, Nueva Zelanda",
      id:4,
      datos:"El 13 de septiembre de 2021, Rosé fue invitada al importante evento benéfico de moda Met Gala en la ciudad de New York, en su calidad de embajadora global de la marca Yves Saint Laurent y como invitada especial del Director Creativo de la marca, Anthony Vaccarello, convirtiéndose en la primera artista femenina de k-pop en asistir al evento."
    },
  ];

  function quehagocuandosedeelevento(evento){
    evento.target.classList.add("blancoYnegro") 
    console.log("hola")
  }
  function quehagocuandosedeelotroevento(evento){
   evento.target.classList.remove("blancoYnegro")
   console.log("hola")
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2">
        {integrantes.map(function (integrante) {
          return (
            <div className="row my-3 d-flex justify-content-evenly" key={integrante.id}>
              <div className="col-8">
                <div className="card" style={{width:'20rem'}} >
                  <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                  <img
                    src={integrante.foto}
                    alt="foto"
                    className="img-fluid w-100" onMouseOver={quehagocuandosedeelevento} 
                    onMouseLeave={quehagocuandosedeelotroevento}
                  />
                  <section className="text-center my-2 mx-2 px-2">
                    <p className="">{integrante.nacimiento}</p>
                  </section>
                  <section className="">
                    <p className="">{integrante.datos}</p>
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
