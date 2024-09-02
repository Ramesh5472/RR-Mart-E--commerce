
import React from "react";
import {Routes, Route} from 'react-router-dom'

import './App.css'
import LandingPage from "./stores/pages/LandingPage";
import Kitchen from "./stores/components/Kitchen";
import MobilePage from "./stores/pages/MobilePage";
import WomenPage from "./stores/pages/womanPage";
import MensPage1 from "./stores/pages/MenPage";
import ComputerPage from "./stores/pages/computerPage";
import WatchPage from "./stores/pages/WatchPage";
import FurniturePage from "./stores/pages/FurniturePage";
import ACPage from "./stores/pages/AcPages";
import KitchenPage from "./stores/pages/KitchenPage";
import BookPage from "./stores/pages/BookPages";
import TVPage from "./stores/pages/TvPages";
import FridgesPage from "./stores/pages/Fridges";
import SpeakerPage from "./stores/pages/SpeakerPage";
import MobileSingle from "./Singles/MobileSingles";
import ComputerSingle from "./Singles/ComputerSingles";
import TVSingle from "./Singles/TvSingles";
import WomenSingle from "./Singles/WomenSingle";
import WatchSingle from "./Singles/WatchSingles";
import MenSingle from "./Singles/MenSingles";
import KitchenSingle from "./Singles/KitchenSingles";
import FurnitureSingle from "./Singles/FurnitureSingle";
import AcSingle from "./Singles/AcSingles";
import BookSingle from "./Singles/BookSingles";
import FridgeSingle from "./Singles/FridgeSingles";
import SpeakerSingle from "./Singles/SpeakerSingle";
import UserCart from "./stores/UserCart";


const App=()=> {
  return(
    <div>
       <Routes>
        <Route path="/" element= { <LandingPage></LandingPage>}/>
        <Route path="/abc" element= {<Kitchen></Kitchen>}></Route>
        <Route path="/Mobiles" element={<MobilePage></MobilePage>}></Route>
        <Route path="/Woman Dresses" element={<WomenPage></WomenPage>}></Route>
        <Route path="/Mens Dress" element={<MensPage1></MensPage1>}></Route>
        <Route path="/Computers" element={<ComputerPage></ComputerPage>}></Route>
        <Route path="/Watches" element={<WatchPage></WatchPage>}></Route>
        <Route path="/furnitures" element={<FurniturePage></FurniturePage>}></Route>
        <Route path="/Acs" element={<ACPage></ACPage>}></Route>
        <Route path="/Kitchen" element={<KitchenPage></KitchenPage>}></Route>
        <Route path="/books" element={<BookPage></BookPage>}></Route>
        <Route path="/Tvs" element={<TVPage></TVPage>}></Route>
        <Route path="/fridges" element={<FridgesPage></FridgesPage>}></Route>
        <Route path="/Speakers" element={<SpeakerPage></SpeakerPage>}></Route>
             <Route path="/Mobiles/:id" element = {<MobileSingle></MobileSingle>}></Route>
             <Route path="/Computers/:id" element = {<ComputerSingle></ComputerSingle>}></Route>
             <Route path="/Tvs/:id" element = {<TVSingle></TVSingle>}></Route>
             <Route path="/Woman Dresses/:id" element = {<WomenSingle></WomenSingle>}></Route>
             <Route path="/Watches/:id" element = {<WatchSingle></WatchSingle>}></Route>
             <Route path="/Mens Dress/:id" element = {<MenSingle></MenSingle>}></Route>
             <Route path="/Kitchen/:id" element = {<KitchenSingle></KitchenSingle>}></Route>
             <Route path="/furnitures/:id" element = {<FurnitureSingle></FurnitureSingle>}></Route>
             <Route path="/Acs/:id" element = {<AcSingle></AcSingle>}></Route>
             <Route path="/books/:id" element = {<BookSingle></BookSingle>}></Route>
             <Route path="/fridges/:id" element = {<FridgeSingle></FridgeSingle>}></Route>
             <Route path="/Speakers/:id" element = {<SpeakerSingle></SpeakerSingle>}></Route>
        <Route path="/cart" element = {<UserCart></UserCart>}></Route>
       </Routes>
    </div>
  )
}

export default App