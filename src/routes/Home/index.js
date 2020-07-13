import React from "react";
import { Row, Col } from "antd";
import CardComponent from "../../components/Card";
import product1 from "../../assets/blackCherry.png";
import product2 from "../../assets/smallBean.png";
import product3 from "../../assets/cherry.png";
import product4 from "../../assets/bean-sprouts.jpg";
import memberLogo from "../../assets/180Snack.png";
import folderLogo from "../../assets/folder.png";
import productIcon from "../../assets/IX-One.png";
import memberIcon from "../../assets/ball.png";
import "antd/dist/antd.css";

const Home = () => {
  const listProducts = [
    {
      id: 1,
      type: "product",
      code: "009873564781",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product1,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 2,
      type: "member",
      name: "180 Degree Snacks",
      address: "789 Parker Lane Walla Walla, WA 89764",
      iconCode: "609873645282",
      logo: memberLogo,
      icon: memberIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 3,
      type: "folder",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      logo: folderLogo,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 4,
      type: "product",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product2,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 5,
      type: "member",
      name: "180 Degree Snacks",
      address: "789 Parker Lane Walla Walla, WA 89764",
      iconCode: "609873645282",
      logo: memberLogo,
      icon: memberIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 6,
      type: "folder",
      code: "009873564490",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz, 24 oz",
      pack: "Each/6 Pack",
      logo: folderLogo,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 7,
      type: "product",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product3,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 8,
      type: "member",
      name: "180 Degree Snacks",
      address: "789 Parker Lane Walla Walla, WA 89764",
      iconCode: "609873645282",
      logo: memberLogo,
      icon: memberIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 9,
      type: "product",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product4,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 10,
      type: "product",
      code: "009873564781",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product1,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 11,
      type: "member",
      name: "180 Degree Snacks",
      address: "789 Parker Lane Walla Walla, WA 89764",
      iconCode: "609873645282",
      logo: memberLogo,
      icon: memberIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 12,
      type: "folder",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      logo: folderLogo,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 13,
      type: "product",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product2,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 14,
      type: "member",
      name: "180 Degree Snacks",
      address: "789 Parker Lane Walla Walla, WA 89764",
      iconCode: "609873645282",
      logo: memberLogo,
      icon: memberIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 15,
      type: "folder",
      code: "009873564490",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz, 24 oz",
      pack: "Each/6 Pack",
      logo: folderLogo,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 16,
      type: "product",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product3,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 17,
      type: "member",
      name: "180 Degree Snacks",
      address: "789 Parker Lane Walla Walla, WA 89764",
      iconCode: "609873645282",
      logo: memberLogo,
      icon: memberIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
    {
      id: 18,
      type: "product",
      code: "009873564780",
      market: "Whole Foods Market",
      day: "Every day 365",
      energy: "16 oz",
      pack: "6 Pack/24 Pack",
      iconCode: "SNL4568273",
      logo: product4,
      icon: productIcon,
      lastUpdated: "06/20/2020",
      imageDate: "05/04/2020",
    },
  ];

  const handleCardClick = (values) => {
    console.log("outside: ", values);
  };

  return (
    <div style={{ paddingTop: 16 }}>
      <Row gutter={[32, 16]}>
        {listProducts.map((product) => (
          <Col key={product.id} xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
            <CardComponent onHandleClick={handleCardClick} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
