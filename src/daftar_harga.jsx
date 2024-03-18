import React, { useState } from "react";
import ListNavbar from "./listnavbar";
import Footer from "./footer";
import { Container, Button } from "reactstrap";

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
    produk_tipe: "diamond",
    harga: "Rp.22.720",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.43.659",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.62.518",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.85.238",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.106.177",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.125.036",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.147.756",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.166.320",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.189.040",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.209.979",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.228.838",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.253.638",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.272.497",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.291.356",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.332.640",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.376.299",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.395.158",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.419.958",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.438.817",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.502.821",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.590.139",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.669.141",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.712.800",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.838.728",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.1.005.048",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.1.262.220",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.1.431.540",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.1.768.041",
  },
  {
    nama_game: "mobile legend",
    produk_tipe: "diamond",
    harga: "Rp.2.102.463  ",
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
