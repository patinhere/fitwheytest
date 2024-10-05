import { useState } from "react";

const Header = ({ cart, setCart }) => {
  const [showModal, setShowModal] = useState(false);

  const decreaseQuantity = (current) => {
    setCart((prev) => {
      return prev
        .map((pre) => {
          if (pre.id === current.id)
            return { ...pre, quantity: pre.quantity - 1 };
          else return pre;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const increaseQuantity = (current) => {
    setCart((prev) => {
      return prev.map((pre) => {
        if (pre.id === current.id && current.quantity > 0)
          return { ...pre, quantity: pre.quantity + 1 };
        else return pre;
      });
    });
  };

  return (
    <div>
      <ion-header mode="md" class="top-header-wrap ion-no-border fixed">
        <ion-toolbar class="toolbar-wrap clear">
          <ion-buttons slot="start">
            <ion-button class="header-btn back-btn">
              <img src="assets/img/icon/white-back-arrow-icon.svg" />
            </ion-button>
          </ion-buttons>

          <ion-buttons slot="primary" class="icon-btn">
            <button type="button" onClick={() => setShowModal(true)}>
              <ion-button>
                <ion-badge class="noti-count">{cart.length}</ion-badge>
                <img
                  src="assets/img/icon/cart-icon.svg"
                  alt=""
                  class="icon-size"
                />
              </ion-button>
            </button>
            <ion-button>
              <ion-badge class="noti-count">99</ion-badge>
              <img
                src="assets/img/icon/message-icon.svg"
                alt=""
                class="icon-size message"
              />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-">
            <div className="relative w-auto my-6 mx-auto w-screen flex justify-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  w-7/12 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Cart</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <div class="qcart-content-wrap">
                    <ion-list class="qcart-content">
                      <div class="position-wrap">
                        <div class="qcart-mid-wrap">
                          {cart.map((c) => (
                            <ion-footer class="qcart-confirm-footer">
                              <div
                                class="qcart-confirm"
                                className="flex place-content-between mx-8"
                                lines="none"
                              >
                                <div className="self-center text-start">
                                  {c.flavour}
                                  <br />
                                  {c.size}
                                </div>
                                <div class="">
                                  <p class="qty-left">Quantity</p>
                                  <div class="qty-right">
                                    <button
                                      className="bg-blue-600 w-8 rounded-md m-2 text-white "
                                      onClick={() => decreaseQuantity(c)}
                                    >
                                      -
                                    </button>

                                    <span class="quickcart-text-qty">
                                      {c.quantity}
                                    </span>

                                    <button
                                      className="bg-blue-600 w-8 rounded-md m-2 text-white "
                                      onClick={() => increaseQuantity(c)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </ion-footer>
                          ))}
                          {cart.length === 0 && "none"}
                        </div>
                      </div>
                    </ion-list>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-stone-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setCart([])}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
