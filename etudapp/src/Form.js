import React, { useState } from "react";
import styled from "styled-components";
const ScTitle = styled.legend`
  color: grey;
  font-weight: bolder;
`;
const ScDiv = styled.div`
  color: #0d0dbd;
  display: flex;
  font-weight: bolder;
  justify-content: space-evenly;
  margin: 30px;
  fieldset {
    border-radius: 20px;
    border-color: #4b9696;
  }
  .birthday {
    display: inline-block;
  }
`;

export default function Form() {
  const [deger, setDeger] = useState({
    Name: "",
    SurName: "",
    Email: "",
    phone: "",
    password: "",
    Google: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleIsimDegistir(event) {
    const { value, id } = event.target;
    setDeger({ ...deger, [id]: value });
  }

  function formuTemizle(e) {
    setDeger({
      Name: "",
      SurName: "",
      Email: "",
      phone: "",
      password: "",
      Google: "",
    });
  }
  function formuTemizleGoogle(e) {
    setDeger({ Google: "" });
  }

  /*  turkceKarakter = {}; */
  const disabledMi =
    deger.Name === "" ||
    deger.SurName === "" ||
    deger.password === "" ||
    deger.phone === "" ||
    deger.Google === "" ||
    deger.Email === "";

  return (
    <ScDiv>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <ScTitle>Hesap Bilgileri</ScTitle>
          {disabledMi && <p>Lütfen, formu eksiksiz doldurunuz!</p>}
          <section>
            <p>
              <label htmlFor="Name">Name :</label>
              <input
                onChange={handleIsimDegistir}
                type="text"
                autoComplete={false}
                placeholder="Name"
                value={deger.Name}
                id="Name"
              />
            </p>
            <p>
              <label htmlFor="SurName">Surname :</label>
              <input
                onChange={handleIsimDegistir}
                type="text"
                value={deger.SurName}
                placeholder="Surname"
                id="SurName"
              ></input>
            </p>
            <p>
              <label htmlFor="password">Password :</label>
              <input
                onChange={handleIsimDegistir}
                type="password"
                value={deger.password}
                placeholder="Password"
                id="password"
              ></input>
            </p>
            <p>
              <label htmlFor="Email">E-mail :</label>
              <input
                onChange={handleIsimDegistir}
                type="email"
                value={deger.Email}
                placeholder="sample@example.com"
                id="Email"
              ></input>
            </p>
            <p>
              <label htmlFor="phone">Phone :</label>
              <input
                value={deger.phone}
                onChange={handleIsimDegistir}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                placeholder="5XX XXX XX XX"
                id="phone"
              ></input>
            </p>
            <p>
              <button onClick={formuTemizle} type="button">
                Formu Temizle
              </button>
              <button disabled={disabledMi} type="button">
                Kaydet
              </button>
            </p>
          </section>
        </fieldset>
      </form>
    </ScDiv>
  );
}
