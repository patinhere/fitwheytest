import { useEffect, useState } from "react";
import axios from "axios";

function ModalAdd({ setCart }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [flavour, setFlavour] = useState("");
  const [size, setSize] = useState("");
  const [product, setProduct] = useState(null);
  const id = new Date();

  useEffect(() => {
    async function getProduct() {
      axios
        .get(`http://localhost:8800/api/detail/${1}`, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "secretkey",
          },
        })
        .then((res) => {
          setProduct(res.data[0]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    getProduct();
  }, []);

  const handleIncrease = () => {
    if (quantity === 100) return;
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };
  const handleCart = () => {
    setShowModal(false);
    setCart((prev) => [...prev, { size, quantity, flavour, id }]);
  };
  return (
    <>
      <button
        className="bg-blue-500 w-full text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add to cart
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add to Cart</h3>
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
                <div className="relative p-6 flex-auto">
                  <div class="qcart-content-wrap">
                    <ion-list class="qcart-content">
                      <div class="position-wrap">
                        <div class="qcart-top-info-wrap" className="flex">
                          <div className="max-w-36">
                            <ion-img
                              class="product-img"
                              src="assets/img/product-mock3.png"
                            ></ion-img>
                          </div>

                          <div
                            class="qcart-info-right"
                            className=" mt-5 p-3 ml-10"
                          >
                            <span class="qcart-title">
                              {product?.name || "Baam 100% my Whey"}
                            </span>
                            <p class="qcart-des">
                              {product?.description ||
                                "Baam My Whey Protein one two sentences dfsdf dfsf"}
                            </p>
                          </div>
                        </div>

                        <div class="qcart-select">
                          Please select your options
                        </div>

                        <div class="qcart-exp">
                          Stock:
                          {product?.flavour
                            ? JSON.parse(product.flavour).stock
                            : 1000}
                        </div>
                        <div class="qcart-mid-wrap">
                          <div class="qcart-selector-wrap">
                            <div class="qcart-selector">
                              <div class="qcart-heading">
                                Size <span class="select-num"> (Select 1)</span>
                              </div>
                              <div className="flex mb-5 ">
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center justify-center items-center p-5 min-w-24"
                                  onClick={() => setSize("Sample")}
                                >
                                  Sample
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 justify-center items-center self-center p-2 min-w-24"
                                  onClick={() => setSize("250g")}
                                >
                                  250 g
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center justify-center items-center p-4 min-w-24"
                                  onClick={() => setSize("1lb")}
                                >
                                  1lb
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center  justify-center items-center p-2 min-w-24"
                                  onClick={() => setSize("2lb")}
                                >
                                  2lb
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center justify-center items-center p-2 min-w-24"
                                  onClick={() => setSize("5lb")}
                                >
                                  5lb
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center justify-center items-center p-2 min-w-24"
                                  onClick={() => setSize("10lb")}
                                >
                                  10lb
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center justify-center items-center p-2 min-w-24"
                                  onClick={() => setSize("12lb")}
                                >
                                  12lb
                                </button>
                              </div>
                            </div>
                            <div
                              class="qcart-selector"
                              className="flex space-x-3 flex-wrap min-h-28 "
                            >
                              <div class="qcart-heading">
                                Flavor / Selections
                                <span class="select-num"> (Select 1)</span>
                              </div>
                              <div className="flex mb-5">
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center p-4"
                                  onClick={() => setFlavour("Chocolate")}
                                >
                                  Chocolate
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center p-2"
                                  onClick={() => setFlavour("Matcha Green Tea")}
                                >
                                  Matcha Green Tea
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center p-4"
                                  onClick={() => setFlavour("Vanilla")}
                                >
                                  Vanilla
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center p-2 "
                                  onClick={() => setFlavour(" Cafe Mocha")}
                                >
                                  Cafe Mocha
                                </button>
                                <button
                                  className="bg-slate-200 mr-2  flex h-16 self-center p-2"
                                  onClick={() =>
                                    setFlavour(
                                      "Super Yummy Japanese Home Made Orange Yuzu"
                                    )
                                  }
                                >
                                  Super Yummy Japanese Home Made Orange Yuzu
                                </button>
                              </div>
                            </div>
                          </div>

                          <ion-footer class="qcart-confirm-footer">
                            <div
                              class="qcart-confirm"
                              className="flex place-content-evenly"
                              lines="none"
                            >
                              <div className="self-center">
                                {size}
                                <br />
                                {flavour}
                              </div>
                              <div class="">
                                <p class="qty-left">Quantity</p>
                                <div class="qty-right">
                                  <button
                                    className="bg-blue-600 w-8 rounded-md m-2 text-white "
                                    onClick={handleDecrease}
                                  >
                                    -
                                  </button>

                                  <span class="quickcart-text-qty">
                                    {quantity}
                                  </span>

                                  <button
                                    className="bg-blue-600 w-8 rounded-md m-2 text-white "
                                    onClick={handleIncrease}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </ion-footer>
                        </div>
                      </div>
                    </ion-list>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalAdd;
