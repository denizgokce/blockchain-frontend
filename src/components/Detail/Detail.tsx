import React from "react";
import styles from "./Detail.module.css";
import Loader from "react-loader-spinner";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BlockDetailHook from "../../hooks/BlockDetailHook";

const Detail = () => {
  const { dataRes, loading, error, handlers } = BlockDetailHook();
  let navigate = useNavigate();
  return (
    <div className={styles.Detail} data-testid="Detail">
      {
        !loading && (
          <>
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Block Index</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.block_index}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Hash</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.hash}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Height</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.height}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Bits</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.bits}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Fee</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.fee}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Merkel Root</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.mrkl_root}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Nonce</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.nonce}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Size</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.size}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Time</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.time}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Version</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.ver}</span>
            </div>
            <hr />
            <div className="row mb-2 p-1">
              <label className="col w-50" style={{ textAlign: "left" }}>Weight</label>
              <span className="col w-50" style={{ textAlign: "left" }}>{dataRes.weight}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              {
                dataRes.prev_block && dataRes.prev_block.length > 0 && (
                  <Button variant="outline-primary" onClick={() => {
                    handlers.directPage(dataRes.prev_block);
                    navigate(`/block/${dataRes.prev_block}`);
                  }}>Previous</Button>
                )
              }
              {
                dataRes.next_block && dataRes.next_block.length > 0 && (
                  <Button variant="outline-primary" onClick={() => {
                    handlers.directPage(dataRes.next_block);
                    navigate(`/block/${dataRes.next_block}`);
                  }}>Next</Button>
                )
              }
            </div>
          </>) || (
          <div style={{ margin: "auto" }}>
            <Loader
              type="Oval"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
        )
      }
    </div>
  );

};
export default Detail;
