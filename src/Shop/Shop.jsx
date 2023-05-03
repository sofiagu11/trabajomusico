export function Shop(){
    let productos = [
        {
            foto: "https://cdn.shopify.com/s/files/1/0022/5011/3123/products/SilhouetteTeeFRT.png?v=1681416024",
            nombre: "SILHOUETTE VINTAGE WASH T-SHIRT",
            precio: "$45.00",
            descripcion: "Screenprinted graphic on vintage distressed t-shirt.",
            id: "1"
        },
        {
            foto: "https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BP_WHITEHOODIE_BACK.png?v=1681412266",
            nombre: "BORN PINK PHOTO GRID HOODIE",
            precio: "$80.00",
            descripcion: "Ships on or around May 6, 2023",
            id: "1"
        },
        {
            foto: "https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BP_Box_V1_90fc247f-9726-4ee6-a117-7823ed2373b6.png?v=1602082456",
            nombre: "THE ALBUM (VERSION 1)",
            precio: "$30.00",
            descripcion: "THE ALBUM Includes: a Package Box (4 different versions), Hardcover Photobook (96 pages), CD, Postcard Set (4 unique cards), Credits Sheet, Photocards (2 of 20, random), Postcards (2 of 20, random), Sticker (1 of 4, random), Mounted Photocard.",
            id: "1"
        },
        {
            foto: "https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BLKPNK-0042_GIF.gif?v=1680819150",
            nombre: "BORN PINK VINYL",
            precio: "$38.00",
            descripcion: "Ships on or around May 6, 2023",
            id: "1"
        },
       
      ];

      
    return(
        <div className="row row-cols-1 row-cols-md-2">
        {productos.map(function (productos) {
          return (
            <div className="row my-3 d-flex justify-content-evenly" key={productos.id}>
              <div className="col-8">
                <div className="card" style={{width:'20rem'}}>
                  <h3 className="text-center fw-bold">{productos.nombre}</h3>
                  <img
                    src={productos.foto}
                    alt="foto"
                    className="img-fluid w-100"
                  />
                  <section className="text-center my-2 mx-2 px-2">
                    <p className="">{productos.precio}</p>
                  </section>
                  <section className="">
                    <p className="">{productos.descripcion}</p>
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
}