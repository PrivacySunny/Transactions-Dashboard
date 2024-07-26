import "./App.css";
import React, { useState } from "react";
import { Layout, Menu, Select } from "antd";
import Transactions from "./components/Transactions";
import Stats from "./components/Stats";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FcList } from "react-icons/fc";
const { Header, Content, Footer } = Layout;

const navItems = [
  {
    key: 1,
    label: <NavLink to="/">Transactions</NavLink>,
  },
  {
    key: 2,
    label: <NavLink to="/stats">Stats</NavLink>,
  },
];
const options = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const App = () => {
  let [month, setMonth] = useState(3);

  const handleMonthChange = (value) => {
    setMonth(parseInt(value));
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}> Transactions Dashboard</h1>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={navItems}
            style={{
              flex: 1,
              padding: "0 60px",
            }}
          />
          <Select
            size="large"
            defaultValue={options[month]}
            onChange={handleMonthChange}
            style={{
              width: 500,
            }}
            options={options.map((text, i) => {
              return {
                value: i,
                label: text,
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: "10px 48px",
            backgroundColor: "white",
            // theme:"dark",
            minHeight: 600,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Transactions month={month} monthText={options[month]} />
              }
            />
            <Route
              path="/stats"
              element={<Stats month={month} monthText={options[month]} />}
            />
          </Routes>
        </Content>
        <Footer
          style={{
            color: "white",
            background: "black",
            textAlign: "center",
          }}
        >
          Created by <strong>Sunny Kumar 💞</strong>
          <div style={{ marginTop: "10px" }}>
            <a
              href="https://www.linkedin.com/in/sunny-kumar-4821a2229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                style={{ margin: "0 10px", fontSize: "24px", color: "#0072b1" }}
              />
            </a>
            <a
              href="https://github.com/PrivacySunny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo
                style={{ margin: "0 10px", fontSize: "24px", color: "white" }}
              />
            </a>
            <a
              href="https://clist.by/coder/sanhayu546/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcList
                style={{ margin: "0 10px", fontSize: "24px", color: "#333" }}
              />
            </a>
          </div>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
