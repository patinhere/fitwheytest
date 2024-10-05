import "./App.css";
import Bundle from "./components/Bundle";
import FlashSale from "./components/FlashSale";
import ImageSlide from "./components/ImageSlide";
import NotiText from "./components/NotiText";
import ProductHeading from "./components/ProductHeading";
import Review from "./components/Review";
import TabBar from "./components/TabBar";
import Header from "./components/Header";
import { useState } from "react";
import ModalAdd from "./components/ModalAdd";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <ion-app>
        <Header cart={cart} setCart={setCart} />

        <ion-content class="main-content-pd" fullscreen>
          <div class="pd-top-sec-wrap">
            <ImageSlide />
            <FlashSale />
            <ProductHeading />
          </div>
          <div class="line-break"></div>
          <TabBar />
          <div class="line-break"></div>
          <div class="p-title">Bundle Set</div>
          <Bundle />
          <div class="line-break"></div>
          <Review />
        </ion-content>

        <ion-footer class="footer-menu-common">
          <NotiText />
          <ModalAdd setCart={setCart} />
        </ion-footer>
      </ion-app>
    </div>
  );
}

export default App;
