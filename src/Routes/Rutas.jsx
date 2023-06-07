import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Members } from '../Members/Members'
import { Menu } from '../shared/Menu/Menu'
import { Footer } from '../shared/Footer/Footer'
import { Fans } from '../Fans/Fans'
import { Shop } from '../Shop/Shop'
import { Music } from '../Music/Music'
import {Carga} from '../Hook/Carga'




export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Members />} />
        <Route path="/fans" element={<Fans />} />
        <Route path="/tienda" element={<Shop/>} />
        <Route path="/musica" element={<Music />} />
        <Route path="/hooks" element={<Carga />} />
      </Routes>
      <Footer />
    </>
  );
}
