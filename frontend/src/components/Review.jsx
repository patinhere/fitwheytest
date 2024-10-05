function Review() {
  return (
    <div className="p-16">
      <div class="pd-review">
        <div class="review-heading-wrap">
          <div class="re-flex">
            <div class="t-title">Customer Review</div>
            <div class="re-rate">
              <label>★★★★★</label>
              <span class="re-rate-total">4/5</span>
              <span class="re-count">(200 Reviews)</span>
            </div>
          </div>
          <ion-buttons class="re-write">
            <ion-button class="re-write-btn">Write Review</ion-button>
          </ion-buttons>
        </div>

        <ion-list>
          <ion-item>
            <ion-avatar class="img-content" slot="start">
              <img src="assets/img/profile-placeholder.png" />
            </ion-avatar>
            <div class="re-right-content">
              <ion-buttons>
                <ion-button class="like">0</ion-button>
              </ion-buttons>
              <div class="name">Barack Obama</div>
              <div class="rate">★★★★★</div>
              <div class="sub-info">
                <span>12 March 2022</span> |
                <span class="verify">
                  <img src="assets/img/icon/verify-icon.svg" /> Verified Buyer
                </span>
              </div>
              <div class="flavor">Vanilla Milkshake</div>
              <p class="description">
                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do
                eius mod tempor incididut ut labore te dfdf dfsdfdf
              </p>
              <div class="img-vdo-container">
                <ul>
                  <li>
                    <ion-button class="play-btn">
                      <img src="assets/img/icon/play-icon.svg" />
                    </ion-button>
                    <img src="https://dummyimage.com/360x640/333/aaa" />
                  </li>
                  <li>
                    <ion-button class="play-btn">
                      <img src="assets/img/icon/play-icon.svg" />
                    </ion-button>
                    <img src="assets/img/place-holder3.png" />
                  </li>
                  <li>
                    <img src="assets/img/place-holder3.png" />
                  </li>
                  <li>
                    <img src="assets/img/place-holder3.png" />
                  </li>
                  <li>
                    <img src="assets/img/place-holder3.png" />
                  </li>
                  <li>
                    <img src="assets/img/place-holder3.png" />
                  </li>
                </ul>
              </div>
              <div class="bottom-sub-info">
                <span>Order ID: 0123456</span> |<span>Product 1 of 2</span>
              </div>
            </div>
          </ion-item>
          <ion-item>
            <ion-avatar class="img-content" slot="start">
              <img src="assets/img/profile-placeholder.png" />
            </ion-avatar>
            <div class="re-right-content">
              <ion-buttons>
                <ion-button class="like">0</ion-button>
              </ion-buttons>
              <div class="name">Onitsuka Tiger</div>
              <div class="rate">★★★★★</div>
              <div class="sub-info">
                <span>12 March 2022</span>
              </div>
              <p class="description">
                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do
                eius mod tempor incididut ut labore te dfdf dfsdfdf
              </p>
              <div class="bottom-sub-info"></div>
            </div>
          </ion-item>
          <ion-item>
            <ion-avatar class="img-content" slot="start">
              <img src="assets/img/profile-placeholder.png" />
            </ion-avatar>
            <div class="re-right-content">
              <ion-buttons>
                <ion-button class="like-active">3</ion-button>
              </ion-buttons>
              <div class="name">Steve Jobs</div>
              <div class="rate">★★★★★</div>
              <div class="sub-info">
                <span>12 March 2022</span>
                <span class="verify">
                  <img src="assets/img/icon/verify-icon.svg" /> Verified Buyer
                </span>
              </div>
              <p class="description">
                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do
                eius mod tempor incididut ut labore te dfdf dfsdfdf
              </p>
              <div class="bottom-sub-info">
                <span>Order ID: 0123456</span>
              </div>
            </div>
          </ion-item>
          <ion-item>
            <ion-avatar class="img-content" slot="start">
              <img src="assets/img/profile-placeholder.png" />
            </ion-avatar>
            <div class="re-right-content">
              <ion-buttons>
                <ion-button class="like-active">3</ion-button>
              </ion-buttons>
              <div class="name">Steve Jobs</div>
              <div class="rate">★★★★★</div>
              <div class="sub-info">
                <span>12 March 2022</span> |
                <span class="verify">
                  <img src="assets/img/icon/verify-icon.svg" /> Verified Buyer
                </span>
              </div>
              <div class="flavor">Vanilla Milkshake</div>
              <p class="description">
                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do
                eius mod tempor incididut ut labore te dfdf dfsdfdf
              </p>
              <div class="bottom-sub-info">
                <span>Order ID: 0123456</span> |<span>Product 1 of 2</span>
              </div>
            </div>
          </ion-item>
        </ion-list>
        <ion-buttons class="sm-btn-wrap">
          <ion-button class="sm-btn">See More</ion-button>
        </ion-buttons>
      </div>
    </div>
  );
}

export default Review;
