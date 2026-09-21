import { useState } from "react";

const year = new Date().getFullYear();

function Home() {
  const [freeBtn, setFreeBtn] = useState(false);
  const [proBtn, setProBtn] = useState(false);
  const [enterpriseBtn, setEnterpriseBtn] = useState(false);

  return (
    <div className="px-5 py-3">

      {/* Header */}
      <div className="d-flex justify-content-between">

        <div className="left">
          Pricing example
        </div>

        <div className="right text-dark">
          <a href="#" className="text-dark text-decoration-none me-3">
            Features
          </a>

          <a href="#" className="text-dark text-decoration-none me-3">
            Enterprise
          </a>

          <a href="#" className="text-dark text-decoration-none me-3">
            Support
          </a>

          <a href="#" className="text-dark text-decoration-none">
            Pricing
          </a>
        </div>

      </div>

      {/* Line */}
      <div
        style={{
          border: "1px solid #ccc",
          width: "100%",
          height: "1px",
        }}
      ></div>

      {/* Title */}
      <h1 className="mt-3 text-center">
        Pricing
      </h1>

      <p className="text-center">
        Quickly built an effective pricing table for your potential customers
        with this Bootstrap example. It’s built with default Bootstrap components
        and utilities with little customization.
      </p>

      {/* Cards container */}
      <div
        style={{ marginTop: "50px" }}
        className="d-flex justify-content-center gap-3"
      >

        {/* ================= FREE CARD ================= */}

        <div
          style={{
            height: "300px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >

          {/* Card header */}
          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: freeBtn ? "#007bff" : "#ccc",
              border: "1px solid #ccc",
              borderRadius: "5px 5px 0 0",
              position: "relative",
              color: freeBtn ? "white" : "black",
            }}
          >
            Free

            {freeBtn && (
              <button
                onClick={() => setFreeBtn(false)}
                style={{
                  position: "absolute",
                  right: "10px",
                  width: "70px",
                  height: "40px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            )}
          </div>

          {/* Price */}
          <div className="d-flex justify-content-center align-items-center mt-3">
            <h2 className="mb-0">$0/</h2>
            <h5 className="text-muted mb-0">
              mo
            </h5>
          </div>

          <p>10 users included</p>
          <p>2 GB of storage</p>
          <p>Email support</p>

          <p
            style={{
              backgroundColor: "#ccc",
              margin: "3px 50px",
            }}
          >
            Help center access
          </p>

          {/* Main button */}
          <button
            onClick={() => setFreeBtn(true)}
            style={{
              color: freeBtn ? "white" : "#007bff",
              marginTop: "20px",
              borderRadius: "5px",
              backgroundColor: freeBtn ? "#007bff" : "white",
              width: "90%",
              height: "40px",
              border: "1px solid #007bff",
            }}
          >
            Sign up for free
          </button>

        </div>


        {/* ================= PRO CARD ================= */}

        <div
          style={{
            height: "300px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >

          {/* Card header */}
          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: proBtn ? "#007bff" : "#ccc",
              border: "1px solid #ccc",
              borderRadius: "5px 5px 0 0",
              position: "relative",
              color: proBtn ? "white" : "black",
            }}
          >
            Pro

            {proBtn && (
              <button
                onClick={() => setProBtn(false)}
                style={{
                  position: "absolute",
                  right: "10px",
                  width: "70px",
                  height: "40px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            )}
          </div>

          {/* Price */}
          <div className="d-flex justify-content-center align-items-center mt-3">
            <h2 className="mb-0">$15/</h2>
            <h5 className="text-muted mb-0">
              mo
            </h5>
          </div>

          <p>20 users included</p>
          <p>10 GB of storage</p>
          <p>Priority email support</p>

          <p
            style={{
              backgroundColor: "#ccc",
              margin: "3px 50px",
            }}
          >
            Help center access
          </p>

          {/* Main button */}
          <button
            onClick={() => setProBtn(true)}
            style={{
              color: proBtn ? "white" : "#007bff",
              marginTop: "20px",
              borderRadius: "5px",
              width: "90%",
              height: "40px",
              backgroundColor: proBtn ? "#007bff" : "white",
              border: "1px solid #007bff",
            }}
          >
            Get started
          </button>

        </div>


        {/* ================= ENTERPRISE CARD ================= */}

        <div
          style={{
            height: "300px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >

          {/* Card header */}
          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: enterpriseBtn ? "#007bff" : "#ccc",
              border: "1px solid #ccc",
              borderRadius: "5px 5px 0 0",
              position: "relative",
              color: enterpriseBtn ? "white" : "black",
            }}
          >
            Enterprise

            {enterpriseBtn && (
              <button
                onClick={() => setEnterpriseBtn(false)}
                style={{
                  position: "absolute",
                  right: "10px",
                  width: "70px",
                  height: "40px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            )}
          </div>

          {/* Price */}
          <div className="d-flex justify-content-center align-items-center mt-3">
            <h2 className="mb-0">$29/</h2>
            <h5 className="text-muted mb-0">
              mo
            </h5>
          </div>

          <p>30 users included</p>
          <p>15 GB of storage</p>
          <p>Phone and email support</p>

          <p
            style={{
              backgroundColor: "#ccc",
              margin: "3px 50px",
            }}
          >
            Help center access
          </p>

          {/* Main button */}
          <button
            onClick={() => setEnterpriseBtn(true)}
            style={{
              color: enterpriseBtn ? "white" : "#007bff",
              marginTop: "20px",
              borderRadius: "5px",
              width: "90%",
              height: "40px",
              backgroundColor: enterpriseBtn ? "#007bff" : "white",
              border: "1px solid #007bff",
            }}
          >
            Contact us
          </button>

        </div>

      </div>


      {/* Footer line */}
      <div
        style={{
          marginTop: "80px",
          width: "100%",
          height: "1px",
          backgroundColor: "#ccc",
        }}
      ></div>


      {/* Footer */}
      <div className="mt-5">

        <div className="text-muted pb-3 text-start">
          @2017-{year}
        </div>

        <div
          style={{ paddingRight: "150px" }}
          className="d-flex justify-content-between text-start"
        >

          <div className="text-muted">
            <h5 className="text-black">
              Features
            </h5>
            <p>Cool stuff</p>
            <p>Random feature</p>
            <p>Team feature</p>
            <p>Stuff for developers</p>
            <p>Another one</p>
            <p>Last time</p>
          </div>

          <div className="text-muted">
            <h5 className="text-black">
              Features
            </h5>
            <p>Cool stuff</p>
            <p>Random feature</p>
            <p>Team feature</p>
            <p>Stuff for developers</p>
            <p>Another one</p>
            <p>Last time</p>
          </div>

          <div className="text-muted">
            <h5 className="text-black">
              Features
            </h5>
            <p>Cool stuff</p>
            <p>Random feature</p>
            <p>Team feature</p>
            <p>Stuff for developers</p>
            <p>Another one</p>
            <p>Last time</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;