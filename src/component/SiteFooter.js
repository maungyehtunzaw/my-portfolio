import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const SiteFooter = () => {
  return (
    <Footer
      className="footer"
      style={{
        textAlign: "center",
        marginTop: 20,
        padding: "40px 20px",
        borderRadius: 30,
        backgroundColor:"#fff",
        // backgroundColor: "#f0f2f5",  // Light theme background
        // boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
      // theme="dark"
    >
      <div
        className="footer-content"
        style={{
          padding: "20px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <Title level={3} style={{ color: "#000" }}>
        Let’s Stay in Touch:
        </Title>
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
          <Button
            type="link"
            icon={<GithubFilled style={{ fontSize: "30px", color: "#333" }} />}
            href="https://github.com/maungyehtunzaw"
            target="_blank"
            style={{ margin: "0 10px" }}
          />
          <Button
            type="link"
            icon={<LinkedinFilled style={{ fontSize: "30px", color: "#0077b5" }} />}
            href="https://www.linkedin.com/in/yehtunz/"
            target="_blank"
            style={{ margin: "0 10px" }}
          />
          <Button
            type="link"
            icon={<InstagramFilled style={{ fontSize: "30px", color: "#e4405f" }} />}
            href="https://instagram.com/maungyehtunzaw"
            target="_blank"
            style={{ margin: "0 10px" }}
          />
          <Button
            type="link"
            icon={<FacebookFilled style={{ fontSize: "30px", color: "#3b5998" }} />}
            href="https://fb.com/maungyehtunzaw"
            target="_blank"
            style={{ margin: "0 10px" }}
          />
          <Button
            type="link"
            icon={<YoutubeFilled style={{ fontSize: "30px", color: "#ff0000" }} />}
            href="https://www.youtube.com/channel/yourchannel"
            target="_blank"
            style={{ margin: "0 10px" }}
          />
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          textAlign: "center",
          backgroundColor: "#000", // Footer bottom dark background
          padding: "20px",
          color: "white",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <p style={{ margin: 0 }}>
          All rights reserved © {new Date().getFullYear()} Ye Htun Z
        </p>
      </div>
    </Footer>
  );
};

export default SiteFooter;