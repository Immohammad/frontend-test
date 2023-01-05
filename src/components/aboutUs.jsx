import React, { useEffect } from "react";
import truck from "./stuffs/truck.jpg";
import service1 from "./stuffs/186728_101.jpg";
import service2 from "./stuffs/186729_621.jpg";
import service3 from "./stuffs/186732_748.jpg";

function AboutUs() {
  useEffect
  return (
    <div>
      <div id="aboutImgContainer">
        <img src={truck} alt="truck" id="aboutImg" />
        <h1 id="aboutText">
          سامانه تست ترابرنت <br />{" "}
          <span style={{ fontWeight: "normal", fontSize: "20px" }}>
            {" "}
            همین الان نصب کن
          </span>
        </h1>
      </div>
      <div>
        {/*kolli */}
        <h2 style={{ paddingTop: "20px" }}>خدمات ما</h2>
        <hr
          style={{
            width: "30%",
            margin: "0 35%",
            borderTop: "3px solid #F48120",
          }}
        />
        <div className="serviceContain">
          <div className="services">
            <img src={service1} alt="service1" className="serviceImg" />
            <p>
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و
              بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی
              گرافیکی و یا صنعت چاپ استفاده میشود.
            </p>
          </div>
          <div className="services">
            <img src={service2} alt="service2" className="serviceImg" />
            <p>
              طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
              که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
              فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از
              روی کار اصلی برداشته میشود
            </p>
          </div>
          <div className="services">
            <img src={service3} alt="service3" className="serviceImg" />
            <p>
              از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
              معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
              نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد
              چگونه خواهد بود
            </p>
          </div>
        </div>
        <h2 style={{ paddingTop: "20px" }}>تیم ما</h2>
        <hr
          style={{
            width: "30%",
            margin: "0 35%",
            borderTop: "3px solid #F48120",
          }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
