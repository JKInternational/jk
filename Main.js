import bannerTichop from "./imgs/bannerTichop.jpg";
import bannerTichopComp from "./imgs/bannerTichopComp.jpg";
import bannerBlueshark from "./imgs/bannerBlueshark.jpg";
import bannerWorthytool from "./imgs/bannerWorthytool.jpg";
import spriteLeft from "./imgs/spriteLeft.png";
import spriteRight from "./imgs/spriteRight.png";
import tsd16bl from "./imgs/tsd16bl.png";
import tsd16blb from "./imgs/tsd16blb.png";
import tid16bl from "./imgs/tid16bl.png";
import tid16blb from "./imgs/tid16blb.png";
import youtube_logo from "./imgs/youtube_logo.png";

import React from 'react';
import YouTube from 'react-youtube';
import './Main.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Main extends React.Component {


    constructor(props) {
        super(props);

        this.showRightImage = this.showRightImage.bind(this);
        this.showLeftImage = this.showLeftImage.bind(this);
        this.showImage = this.showImage.bind(this);
        this.getAllSlides = this.getAllSlides.bind(this);

        this.imageNo = 0;
    }

    getAllSlides() {
        var e = document.querySelectorAll(".slideElement")
        if (e) {
            return e.length
        } else {
            return 0
        }
    }

    showRightImage() {
        this.imageNo += 1;
        if(this.imageNo >= this.getAllSlides()) {
            this.imageNo = 0;
        }
        this.showImage(this.imageNo);
    }

    showLeftImage() {
        this.imageNo -= 1;
        if(this.imageNo < 0) {
            this.imageNo = this.getAllSlides() -1;
        }
        this.showImage(this.imageNo);
    }

    showImage(imgNo) {
        const element = document.querySelector('.slides')
        if(element) {
            var move = -100 * imgNo
            element.style.transform = 'translate(' + move.toString() + 'vw)'
        }
    }

    state = {
      newArrival: {},
      bestItem: {},
      error: null,
    };
  
    componentDidMount = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/items/?_limit=-1&populate=*&filters[newArrival]=1&sort[0]=newArrivalOrder:desc' );
        this.setState({ newArrival: response });
      } catch (error) {
        this.setState({ error });
      }
      try {
        const response = await axios.get('http://localhost:1337/api/items/?_limit=-1&populate=*&filters[bestItem]=1&sort[0]=bestItemOrder:desc' );
        this.setState({ bestItem: response });
      } catch (error) {
        this.setState({ error });
      }
    };
    /*
    componentDidMount() {
        this is function that intended to run after dom is rendred,
        but in practically, it is executed duing dom is rendering.
        do not use this function to add eventhandler.
    }
    */

  render() {
    const opts = {
      height: '130',
      width: '214',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

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


    if(this.state.newArrival.data) {
        console.log(this.state.newArrival.data.data);
        }

      return <>
      <div className="Main">
      
        <div className="slideShow">
          <div className="slideShowNav">
            <a className="prev" onClick={this.showLeftImage.bind(this)}><img src={spriteLeft} /></a>
            <a className="next" onClick={this.showRightImage.bind(this)}><img src={spriteRight} /></a>
          </div>
            
          <div className="slides">
            <a className="slide1 slideElement" href="">
              <div className="mainBanner">
                <div className="mainBannerParents">
                  <img id="mainBannerImg" src={bannerTichop} />
                </div>
              </div>
            </a>

            <a className="slide1 slideElement" href="">
              <div className="mainBanner">
                <div className="mainBannerParents">
                  <img id="mainBannerImg" src={bannerTichopComp} />
                </div>
              </div>
            </a>
            <a className="slide1 slideElement" href="">
              <div className="mainBanner">
                <div className="mainBannerParents">
                  <img id="mainBannerImg" src={bannerBlueshark} />
                </div>
              </div>
            </a>
            <a className="slide1 slideElement" href="">
              <div className="mainBanner">
                <div className="mainBannerParents">
                  <img id="mainBannerImg" src={bannerWorthytool} />
                </div>
              </div>
            </a>
          </div>{/* 여기까지 MainBanner*/}
          <div className="indicator">
            { /*https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js */ }
            <button className="btn1" onClick={this.showImage.bind(this, 0)} />
            <button className="btn2" onClick={() => this.showImage(1)} />
            <button className="btn3" onClick={this.showImage.bind(this, 2)} />
            <button className="btn3" onClick={this.showImage.bind(this, 3)} />
          </div>
        </div>

        {/* 여기까지 MainBanner Slide 적용*/}

        <div className="fix_width">
          <div className="section1">
            NEW ARRIVAL
          </div>

          <div className="stuffgroup">

          { this.state.newArrival.data && this.state.newArrival.data.data.map ? this.state.newArrival.data.data.map(
                      item => {
                        return (
                          <ul className="container0">
                          <Link to={ "/detail/" + item.id } className="stuffBoxSwitch" href="">
                            <li id="stuffBox" style={stuffBox}>
                              <p><img className="stuffBoxImg" src={"http://localhost:1337" + item.attributes.mainImage.data.attributes.url} /></p>
                              <p id="stuffName">{ item.attributes.name }</p>
                              <p id="stuffSpec" style={textBox}>{ item.attributes.mainDescription }</p>
                            </li>
                          </Link>
                        </ul>
                        );
                      }
                    ) : "" }
          </div>

            {/* <ul className="container0">
              <Link to="detail/2" className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={tsd16bl} /></p>
                  <p id="stuffName">TSD-16BL</p>
                  <p id="stuffSpec" style={textBox}>스크류드라이버 / 16V / 2.0Ah / 2단 속도</p>
                </li>
              </Link>
            </ul> */}


          <div className="section2">
            BEST ITEM
          </div>
          <div>
          { this.state.bestItem.data && this.state.bestItem.data.data.map ? this.state.bestItem.data.data.map(
                      item => {
                        return (
                          <ul className="container0">
                          <Link to={ "/detail/" + item.id } className="stuffBoxSwitch" href="">
                            <li id="stuffBox" style={stuffBox}>
                              <p><img className="stuffBoxImg" src={"http://localhost:1337" + item.attributes.mainImage.data.attributes.url} /></p>
                              <p id="stuffName">{ item.attributes.name }</p>
                              <p id="stuffSpec" style={textBox}>{ item.attributes.mainDescription }</p>
                            </li>
                          </Link>
                        </ul>
                        );
                      }
                    ) : "" }
          </div>

          <div className="section3">
            HOT VIDEO
          </div>

          <div className="container3">
            <ul className="link1">
              <li><YouTube id="flexMovie" videoId="vkdCwT_zFo8" /></li>
              <li>
                <ul className="link1_title">
                  <li><img src={youtube_logo} width="50" height="auto" /></li>
                  <li><h4 id="hv_title1">4인치 클린디스크 리뷰</h4></li>
                </ul>
              </li>
            </ul>
            <ul className="link2_3">
              <li>
                <ul className="link2">
                  <li><YouTube videoId="oQqUjYhr31U" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>TCS-165BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="link3">
                  <li><YouTube videoId="tV88tMBQhFs" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>THD/TID-18BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h5 id="more">
                  <Link to="movie">
                    + 더보기
                  </Link>
                </h5>                
              </li>
            </ul>
          </div>
      </div>

    </div>

    </>;
  }
}

export default Main;