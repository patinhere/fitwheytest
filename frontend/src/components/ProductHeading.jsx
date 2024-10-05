import { useState } from "react";
import "./productHeading.css";

function ProductHeading() {
  const [select, setSelect] = useState(0);
  const price = ["50", "300", "900", "1800", "2800", "3000"];

  return (
    <div>
      <div class="product-heading-wrap">
        <div class="product-title">Baam 100% My Whey</div>
        <div class="rp-content">
          <ion-buttons class="rate">
            <label>★★★★★</label>
            <span class="review-count">(200 Reviews)</span>
          </ion-buttons>
          <span class="points">500</span>
        </div>
        <div class="pricing-content">
          <div class="price-w">
            <div class="sub-text">Price</div>
            <div class="price-d">
              ฿{price[select] - price[select] * 0.2}
              <span class="price-o">฿{price[select]}</span>
            </div>
          </div>
          <div class="price-w border-left">
            <div class="sub-text">
              Your Price<ion-icon name="alert-circle-outline"></ion-icon>
            </div>
            <div class="price-d">฿{price[select] - price[select] * 0.2}</div>

            <div class="sub-text">
              Next Tier<ion-icon name="alert-circle-outline"></ion-icon>
            </div>
            <div class="price-nt">฿{price[select] - price[select] * 0.2}</div>
          </div>
        </div>

        <ion-buttons class="pd-size-slider-tab">
          <ion-button class="size-sub-btn inactive">
            <ion-icon name="chevron-back-circle-outline"></ion-icon>
          </ion-button>
          <div className={select === 0 ? "active" : "inactive"}>
            <ion-button
              class="size-sub-btn inactive"
              className="active"
              onClick={() => setSelect(0)}
            >
              Sample
            </ion-button>
          </div>
          <div className={select === 1 ? "active" : "inactive"}>
            <ion-button
              className="size-sub-btn inactive"
              onClick={() => setSelect(1)}
            >
              250g
            </ion-button>
          </div>
          <div className={select === 2 ? "active" : "inactive"}>
            <ion-button
              className="size-sub-btn inactive"
              onClick={() => setSelect(2)}
            >
              2lb
            </ion-button>
          </div>
          <div className={select === 3 ? "active" : "inactive"}>
            <ion-button
              className="size-sub-btn inactive"
              onClick={() => setSelect(3)}
            >
              5lb
            </ion-button>
          </div>
          <div className={select === 4 ? "active" : "inactive"}>
            <ion-button
              className="size-sub-btn inactive"
              onClick={() => setSelect(4)}
            >
              10lb
            </ion-button>
          </div>
          <div className={select === 5 ? "active" : "inactive"}>
            <ion-button
              className="size-sub-btn inactive"
              onClick={() => setSelect(5)}
            >
              12lb
            </ion-button>
          </div>
        </ion-buttons>

        <ion-buttons class="supp-btn-wrap">
          <ion-button class="supp-btn">View Supplement Fact</ion-button>
        </ion-buttons>
      </div>
    </div>
  );
}

export default ProductHeading;
