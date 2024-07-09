import React, { useState } from "react";
import ListNavbar from "../listnavbar";
import Footer from "../footer";
import { Container, Button } from "reactstrap";
import "./daftar_harga.css";

const placeDaftarHarga = [
  {
    nama_game: "mobile legend",
    produk_tipe: "twilight pass",
    harga: "Rp.145.190",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "weekly special",
    harga: "Rp.27.704",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "2x weekly special",
    harga: "Rp.55.408",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "3x weekly special",
    harga: "Rp.83.112",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "4x weekly special",
    harga: "Rp.110.816",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "5x weekly special",
    harga: "Rp.138.520",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "86 diamond",
    harga: "Rp.24.310",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "172 diamond",
    harga: "Rp.46.770",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "257 diamond",
    harga: "Rp.66.910",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "343 diamond",
    harga: "Rp.92.320",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "429 diamond",
    harga: "Rp.111.980",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "514 diamond",
    harga: "Rp.133.020",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "600 diamond",
    harga: "Rp.157.230",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "706 diamond",
    harga: "Rp.177.900",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "792 diamond",
    harga: "Rp.199.040",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "878 diamond",
    harga: "Rp.225.170",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "963 diamond",
    harga: "Rp.245.010",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1050 diamond",
    harga: "Rp.272.740",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1135 diamond",
    harga: "Rp.287.580",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1220 diamond",
    harga: "Rp.311.420",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1412 diamond",
    harga: "Rp.355.200",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1584 diamond",
    harga: "Rp.386.299",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1669 diamond",
    harga: "Rp.422.610",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1756 diamond",
    harga: "Rp.449.340",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1841 diamond",
    harga: "Rp.469.180",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "2195 diamond",
    harga: "Rp.538.830",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "2539 diamond",
    harga: "Rp.623.970",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "2901 diamond",
    harga: "Rp.730.430",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "3073 diamond",
    harga: "Rp.765.010",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "3688 diamond",
    harga: "Rp.895.444",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "4394 diamond",
    harga: "Rp.1.079.040",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "1532 diamond",
    harga: "Rp.1.350.607",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "6238 diamond",
    harga: "Rp.1.536.202",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "7727 diamond",
    harga: "Rp.1.895.433",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "9288 diamond",
    harga: "Rp.2.254.499  ",
  },
];

const DaftarHarga = () => {
  const [showDaftarHarga, setShowDaftarHarga] = useState(false);

  const handleButtonClick = () => {
    setShowDaftarHarga(!showDaftarHarga);
  };
  return (
    <>
      <ListNavbar />
      <Container>
        <div className="form-daf pt-3">
          <div className="col-lg-7">
            <div className="wrappedform">
              <div className="numberform">
                <div className="daft-flex">
                  <p className="pes-3">Daftar Harga</p>
                  <input type="text" name="harga" placeholder=" " className="form-control" required />
                  <Button className="button-cekdaftarharga" onClick={handleButtonClick}>
                    {"Cek Daftar Harga"}
                  </Button>
                  {showDaftarHarga && (
                    <div>
                      {/* Display the list of prices in a table */}
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Nama Game</th>
                            <th>Produk Tipe</th>
                            <th>Harga</th>
                          </tr>
                        </thead>
                        <tbody>
                          {placeDaftarHarga.map((data) => (
                            <tr key={data.harga}>
                              <td>{data.nama_game}</td>
                              <td>{data.produk_tipe}</td>
                              <td>{data.harga}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DaftarHarga;
