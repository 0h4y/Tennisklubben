import React from "react";

function Home() {
  return (
    <>
      <div className="bg-image p-5">
        <div className="card m-5" style={{ opacity: "0.9" }}>
          <div className="card-header row text-center App-header">
            <h1 className="text-center m-0">
              BordTennisBrödernasTisdagsBollar
              <br />
              <span aria-label="some Icons" role="img">
                🍽🍻🍷🏓🌮
              </span>
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 bg-light text-dark min-vh-100 text-center">
              left side
            </div>
            <div className="col-lg-5 bg-light text-dark min-vh-100 text-center">
              right side
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
