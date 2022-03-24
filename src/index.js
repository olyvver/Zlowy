import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import WebFont from "webfontloader";
import App from "./App";
import ToHire from "./routes/ToHire";
import UpSkill from "./routes/UpSkill";
import Form from "./routes/Form";

    WebFont.load({
        google: {
            families: ['Poppins', "Inter:600,500", "Homenaje:400"]
        }
      });

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
          <StrictMode>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="tohire" element={<ToHire />} />
                    <Route path="upskill" element={<UpSkill />} />
                    <Route path="form" element={<Form />} />
                </Routes>
          </StrictMode>
      </BrowserRouter>,
      rootElement
    );