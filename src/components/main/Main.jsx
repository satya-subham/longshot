import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "antd";
import "./Main.css";
import axios from "axios";
import { columns } from "./TableStaticData";

export function Main() {
  const [size, setSize] = useState("large");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data.raw_broadmatch_data);
    });
  }, []);

  const handleBroadMatchTableData = () => {
    axios.get("/data.json").then((response) => {
      setData(response.data.raw_broadmatch_data);
    });
  };

  const handleRelatedTableData = () => {
    axios.get("/data.json").then((response) => {
      setData(response.data.raw_related_data);
    });
  };
  const handleQuestionsTableData = () => {
    axios.get("/data.json").then((response) => {
      setData(response.data.raw_question_data);
    });
  };

  return (
    <>
      <main>
        <div className="main">
          <section>
            <div className="section">
              <div className="log-port-div">
                <div className="log-div">
                  <p>Volume</p>
                  <h1>480</h1>
                </div>
                <div className="port-div">
                  <p>Keyword Difficulty</p>
                  <h1>46%</h1>
                  <p>possible</p>
                  <p>
                    Slightly more cometition. you'll need well-structured and
                    unique content appropriately optimized for your keywords
                  </p>
                </div>
              </div>
              <div className="results-div">
                <div className="intent">
                  <p>Intent</p>
                  <p>commercial</p>
                </div>
                <div className="intent">
                  <p>Results</p>
                  <h1>313M</h1>
                </div>
                <div className="cpc-com">
                  <div className="cpc">
                    <p>cpc</p>
                    <h1>$0.12</h1>
                  </div>
                  <div className="com">
                    <p>com</p>
                    <h1>$0.24</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="table-container">
            <div className="buttons">
              <div className="three-button">
                <Button
                  type="primary"
                  size={size}
                  onClick={() => handleBroadMatchTableData()}
                >
                  Broad Match
                </Button>
                <Button
                  type="default"
                  size={size}
                  onClick={() => handleRelatedTableData()}
                >
                  Related
                </Button>
                <Button
                  type="default"
                  size={size}
                  onClick={() => handleQuestionsTableData()}
                >
                  Questions
                </Button>
              </div>
              <div className="one-button">
                <Button type="primary" size={size} onClick={showModal}>
                  Add to List
                </Button>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <div className="drag-and-drop">
                  <h2>shopping in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>how to open a weed shop in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>best shopping in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>shopping in barcelona spain</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>best coffee shops in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>luxury shopping in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>tattoo shops in barcelona spain</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>where to shop in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>best places to shop in barcelona</h2>
                  </div>
                  <div className="drag-and-drop">
                  <h2>is shopping cheap in barcelona</h2>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </main>
    </>
  );
}
