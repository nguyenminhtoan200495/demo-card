import React from "react";
import { Card, Row, Col, Divider } from "antd";
import {
  SyncOutlined,
  DatabaseOutlined,
  PictureOutlined,
  PaperClipOutlined,
  DownloadOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  CommentOutlined,
  FileImageOutlined,
  InboxOutlined,
  QrcodeOutlined,
  CodepenOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const CardComponent = (props) => {
  let product = null;
  let productInfo = null;
  let memberInfo = null;
  let memberBody = null;
  let memberIcon = null;
  let folder = null;
  let folderInfo = null;
  if (props.product.type === "product") {
    product = (
      <Row justify="end" align="bottom" style={{ minHeight: "32px" }}>
        <Col style={{ padding: "3px" }}>
          <CodeSandboxOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
          <DatabaseOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
          <SyncOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
        </Col>
      </Row>
    );
    const { code, market, day, energy, pack } = props.product;
    productInfo = (
      <div
        style={{
          overflow: "hidden",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {code}
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {market}
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {day}
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {energy}
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {pack}
        </div>
      </div>
    );
  } else if (props.product.type === "member") {
    memberIcon = (
      <>
        <UserOutlined
          style={{
            fontSize: "22px",
            marginRight: "4px",
            backgroundColor: "#fff",
          }}
          onClick={() => onClick1(props.product)}
        />
        <FileImageOutlined
          style={{
            fontSize: "22px",
            marginRight: "4px",
            backgroundColor: "#fff",
          }}
          onClick={() => onClick1(props.product)}
        />
        <CommentOutlined
          style={{
            fontSize: "22px",
            marginRight: "4px",
            backgroundColor: "#fff",
          }}
          onClick={() => onClick1(props.product)}
        />
      </>
    );
    const { name, address } = props.product;
    memberInfo = (
      <div style={{ paddingTop: "20px" }}>
        <div>{name}</div>
        <div>{address}</div>
      </div>
    );
    memberBody = (
      <Row justify="space-between" align="middle">
        <Col style={{ padding: "3px 3px 3px 20px" }}>
          <CodepenOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
          <DatabaseOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
          <InboxOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
          <QrcodeOutlined
            style={{ fontSize: "22px", marginRight: "2px" }}
            onClick={() => onClick1(props.product)}
          />
        </Col>
        <Col style={{ paddingRight: "10px" }}>
          <div
            style={{
              overflow: "hiden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            Thomas Hanks
          </div>
          <div
            style={{
              overflow: "hiden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            thanks@company.com
          </div>
        </Col>
      </Row>
    );
  } else if (props.product.type === "folder") {
    folder = (
      <>
        <PictureOutlined
          style={{
            fontSize: "22px",
            marginRight: "4px",
            backgroundColor: "#fff",
          }}
          onClick={() => onClick1(props.product)}
        />
        <PaperClipOutlined
          style={{
            fontSize: "22px",
            marginRight: "4px",
            backgroundColor: "#fff",
          }}
          onClick={() => onClick1(props.product)}
        />
        <DownloadOutlined
          style={{
            fontSize: "22px",
            marginRight: "4px",
            backgroundColor: "#fff",
          }}
          onClick={() => onClick1(props.product)}
        />
      </>
    );
    folderInfo = (
      <div style={{ overflow: "hidden", paddingTop: "25px" }}>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          Everything I Want To Download
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          365MB
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          22 Products
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          451 Images
        </div>
        <br />
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          David Parker
        </div>
        <div
          style={{
            overflow: "hiden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          3Cows Metats
        </div>
      </div>
    );
  }

  const onClick1 = (values) => {
    console.log("inner: ", values);
    props.onHandleClick(values);
  };

  return (
    <div>
      <Card
        hoverable
        bodyStyle={{
          padding: 0,
          lineHeight: "1.3",
          fontSize: "13px",
          fontWeight: 500,
          border: "2px solid #949494",
        }}
        actions={[]}
      >
        <Row
          style={{
            minHeight: props.product.type !== "folder" ? "113px" : "145px",
          }}
        >
          <Col span={props.product.type === "folder" ? 24 : 17}>
            <div
              style={{
                float: "left",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop:
                  props.product.type === "folder"
                    ? "25px"
                    : props.product.type === "member"
                    ? "10px"
                    : "5px",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  maxWidth: "100px",
                  maxHeight: "100px",
                }}
              >
                <img
                  style={{
                    display: "block",
                    width: "auto",
                    height: "100px",
                    maxWidth: "100px",
                  }}
                  alt="logo"
                  src={props.product.logo}
                />
              </span>
            </div>
            {productInfo}
            {memberInfo}
            {folderInfo}
          </Col>
          {props.product.type !== "folder" && (
            <Col span={7} style={{ padding: "2px" }}>
              <img
                style={{
                  width: props.product.type === "product" ? "40px" : "65px",
                  height: props.product.type === "product" ? "40px" : "65px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                alt="icon"
                src={props.product.icon}
              />
              <div
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {props.product.iconCode}
              </div>
            </Col>
          )}
        </Row>
        {product}
        {memberBody}
        <Divider style={{ margin: 0 }}></Divider>
        <Row
          style={{
            backgroundColor: "#ebebeb",
            padding: "2px 5px",
            lineHeight: "1.2",
            fontSize: "11px",
            fontWeight: 700,
          }}
        >
          <Col span={24}>
            <Row align="middle">
              <Col flex="auto">
                <div>Last Updated: {props.product.lastUpdated}</div>
                <div>Image Date: {props.product.imageDate}</div>
              </Col>
              <Col flex="80px">
                {folder}
                {memberIcon}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CardComponent;
