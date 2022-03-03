import bannerTichopComp from "./imgs/bannerTichopComp.jpg";

import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import "./Brand.css";

class TichopComp extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    comp_1hp: {},
    comp_2hp: {},
    comp_4hp: {},
    etc: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=comp_1hp"
      );
      this.setState({ comp_1hp: response });
    } catch (error) {
      this.setState({ error });
    }
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=comp_2hp"
      );
      this.setState({ comp_2hp: response });
    } catch (error) {
      this.setState({ error });
    }
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=comp_4hp"
      );
      this.setState({ comp_4hp: response });
    } catch (error) {
      this.setState({ error });
    }
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=etc"
      );
      this.setState({ etc: response });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const stuffBox = {
      float: "center",
      backgroundColor: "white",
      width: "200px",
      height: "400px",
      margin: "10px",
      padding: "40px",
    };

    const textBox = {
      float: "center",
      backgroundColor: "none",
      width: "200px",
      height: "50px",
      margin: "10px",
      padding: "10px",
    };

    return (
      <>
        <div className="TichopComp">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>브랜드</span>
                <span>></span>
                <span>티찹</span>
                <span>></span>
                <span>컴프레서</span>
              </div>
              <p>
                <h1>티찹 컴프레서</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="mainBanner">
            <div className="mainBannerParents">
              <img id="mainBannerImg" src={bannerTichopComp} />
              <div id="mainBannerText">TICHOP</div>
            </div>
          </div>

          {/* 여기까지 MainBanner 적용*/}

          <div className="fix_width">
            <div id="toTichop">
              <button id="linkTichop" type="button">
                <a href="tichoppower">티찹 전동공구 보러 가기!</a>
              </button>
            </div>

            <div className="tichopComp1">
              <div className="section">1마력</div>
              <div className="stuffgroup">
                {this.state.comp_1hp.data && this.state.comp_1hp.data.data.map
                  ? this.state.comp_1hp.data.data.map(item => {
                      return (
                        <ul className="container0">
                          <Link
                            to={"/detail/" + item.id}
                            className="stuffBoxSwitch"
                            href=""
                          >
                            <li id="stuffBox" style={stuffBox}>
                              <p>
                                <img
                                  className="stuffBoxImg"
                                  src={
                                    "http://jkintl.iptime.org:10337" +
                                    item.attributes.mainImage.data.attributes
                                      .url
                                  }
                                />
                              </p>
                              <p id="stuffName">{item.attributes.name}</p>
                              <p id="stuffSpec" style={textBox}>
                                {item.attributes.mainDescription}
                              </p>
                            </li>
                          </Link>
                        </ul>
                      );
                    })
                  : ""}
              </div>

              <div className="section">2마력</div>
              <div className="stuffgroup">
                {this.state.comp_2hp.data && this.state.comp_2hp.data.data.map
                  ? this.state.comp_2hp.data.data.map(item => {
                      return (
                        <ul className="container0">
                          <Link
                            to={"/detail/" + item.id}
                            className="stuffBoxSwitch"
                            href=""
                          >
                            <li id="stuffBox" style={stuffBox}>
                              <p>
                                <img
                                  className="stuffBoxImg"
                                  src={
                                    "http://jkintl.iptime.org:10337" +
                                    item.attributes.mainImage.data.attributes
                                      .url
                                  }
                                />
                              </p>
                              <p id="stuffName">{item.attributes.name}</p>
                              <p id="stuffSpec" style={textBox}>
                                {item.attributes.mainDescription}
                              </p>
                            </li>
                          </Link>
                        </ul>
                      );
                    })
                  : ""}
              </div>

              <div className="section">4마력</div>
              <div className="stuffgroup">
                {this.state.comp_4hp.data && this.state.comp_4hp.data.data.map
                  ? this.state.comp_4hp.data.data.map(item => {
                      return (
                        <ul className="container0">
                          <Link
                            to={"/detail/" + item.id}
                            className="stuffBoxSwitch"
                            href=""
                          >
                            <li id="stuffBox" style={stuffBox}>
                              <p>
                                <img
                                  className="stuffBoxImg"
                                  src={
                                    "http://jkintl.iptime.org:10337" +
                                    item.attributes.mainImage.data.attributes
                                      .url
                                  }
                                />
                              </p>
                              <p id="stuffName">{item.attributes.name}</p>
                              <p id="stuffSpec" style={textBox}>
                                {item.attributes.mainDescription}
                              </p>
                            </li>
                          </Link>
                        </ul>
                      );
                    })
                  : ""}
              </div>

              <div className="section">기타</div>
              <div className="stuffgroup">
                {this.state.etc.data && this.state.etc.data.data.map
                  ? this.state.etc.data.data.map(item => {
                      return (
                        <ul className="container0">
                          <Link
                            to={"/detail/" + item.id}
                            className="stuffBoxSwitch"
                            href=""
                          >
                            <li id="stuffBox" style={stuffBox}>
                              <p>
                                <img
                                  className="stuffBoxImg"
                                  src={
                                    "http://jkintl.iptime.org:10337" +
                                    item.attributes.mainImage.data.attributes
                                      .url
                                  }
                                />
                              </p>
                              <p id="stuffName">{item.attributes.name}</p>
                              <p id="stuffSpec" style={textBox}>
                                {item.attributes.mainDescription}
                              </p>
                            </li>
                          </Link>
                        </ul>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TichopComp;