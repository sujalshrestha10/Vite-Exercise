function Dokan(prop) {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container mx-auto p-10 max-w-screen-lg">
        {/* Coupon Eligibility Section */}
        <div className="bg-white rounded shadow p-8">
          <div className="w-full bg-orange-200 text-yellow-900 px-4 py-2 flex items-center">
            <img
              src="https://svgsilh.com/svg/151889.svg"
              alt="Congratulations Icon"
              className="w-10 block pr-2"
            />
            <div className="text-sm">
              Congrats! You are eligible for a <b>Coupon Code</b> in this order
              and all {prop.name}.
            </div>
          </div>

          {/* Order Summary Section */}
          <div>
            <h3 className="text-xl mt-4 font-bold">Order Summary</h3>

            {/* Product 1: Black Jacket XL */}
            <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41KufN65f8L.jpg"
                alt="Black Jacket XL"
                className="w-12"
              />
              <div className="w-2/3">
                <h3 className="text-lg font-medium">Black Jacket XL</h3>
                <p className="text-gray-600 text-xs">
                  Sold by <b>Aashir Khan</b>
                </p>
                <h4 className="text-red-700 text-xs font-bold mt-1">
                  Only 2 left in stock
                </h4>
              </div>
              <div>
                <h4 className="text-3xl font-medium">
                  <sup className="text-lg text-purple-800">$</sup> 89
                </h4>
                <h5 className="text-sm font-bold text-purple-800">60% OFF</h5>
              </div>
              <div className="w-full flex justify-between mt-4">
                <button className="text-red-700 hover:bg-red-100 px-2">
                  DELETE
                </button>
                <label
                  className="block uppercase tracking-wide text-gray-700"
                  htmlFor="qty1"
                >
                  QTY
                  <select
                    className="ml-3 text-sm bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight"
                    id="qty1"
                  >
                    <option>1</option>
                    <option>2</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Product 2: Black Hat */}
            <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
              <img
                src="https://cdn11.bigcommerce.com/s-tboh32g/images/stencil/1280x1280/products/385314/492280/104C_BlackBlackHQ__07610.1557157866.jpg?c=2?imbypass=on"
                alt="Black Hat"
                className="w-12"
              />
              <div className="w-2/3">
                <h3 className="text-lg font-medium">Black Hat</h3>
                <p className="text-gray-600 text-xs">
                  Sold by <b>Taha Dildar</b>
                </p>
                <h4 className="text-red-700 text-xs font-bold mt-1">
                  Only 1 left in stock
                </h4>
              </div>
              <div>
                <h4 className="text-3xl font-medium">
                  <sup className="text-lg text-purple-800">$</sup> 20
                </h4>
                <h5 className="text-sm font-bold text-purple-800">40% OFF</h5>
              </div>
              <div className="w-full flex justify-between mt-4">
                <button className="text-red-700 hover:bg-red-100 px-2">
                  DELETE
                </button>
                <label
                  className="block uppercase tracking-wide text-gray-700"
                  htmlFor="qty2"
                >
                  QTY
                  <select
                    className="ml-3 text-sm bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight"
                    id="qty2"
                  >
                    <option>1</option>
                    <option>2</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">
            PROCEED TO CHECKOUT SCREEN
          </button>
        </div>

        {/* Price Breakdown Section */}
        <div className="flex justify-between mt-8 flex-wrap lg:justify-center">
          <div className="bg-white rounded shadow p-2 w-full lg:w-2/4">
            <div className="w-full bg-orange-200 px-8 py-6">
              <h3 className="text-2xl mt-4 font-bold">Price Breakdown</h3>
              <div className="flex justify-between mt-3">
                <div className="text-xl text-orange-900 font-bold">Amount</div>
                <div className="text-xl text-right font-bold ">$102</div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="text-xl text-orange-900 font-bold">
                  VAT (15%)
                </div>
                <div className="text-xl text-right font-bold">$12</div>
              </div>
              <div className="bg-orange-300 h-1 w-full mt-3"></div>
              <div className="flex justify-between mt-3">
                <div className="text-xl text-orange-900 font-bold">
                  Total Amount
                </div>
                <div className="text-2xl text-orange-900 font-bold">$114</div>
              </div>
              <button className="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">
                CHECKOUT
              </button>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="bg-white rounded shadow px-10 py-6 w-full mt-4 flex flex-wrap justify-center lg:w-2/4 lg:ml-3">
            <div className="pr-8">
              <h3 className="text-2xl mt-4 font-bold text-purple-900">
                Thank You, Alex
              </h3>
              <h4 className="text-sm text-gray-600 font-bold">ORDER #5624</h4>
            </div>
            <img
              src="https://image.flaticon.com/icons/svg/1611/1611768.svg"
              alt="Thank You Icon"
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dokan;
