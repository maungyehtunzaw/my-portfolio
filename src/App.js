
import { Routes, Route,  useLocation } from "react-router-dom";
import { Layout } from "antd";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import "./App.css";
import StoryTime from "./pages/StoryTime";
import Gallery from "./pages/Gallery";
import { AnimatePresence, motion } from "framer-motion";
import { getRandomAnimation } from "./util/animationUtil";
import { ThemeProvider} from "./context/themeContext";
import Privacy from "./pages/Privacy";
import SiteFooter from "./component/SiteFooter";
import SiteHeader from "./component/SiteHeader";
const {  Content } = Layout;

const App = () => {
  const location = useLocation();

  return (
    <Layout
      className="layout"
      style={{ backgroundColor: "#fff" }}
    >
      <SiteHeader/>
      <Content
        className="content"
        style={{ backgroundColor:"#fff"}}
      >
        {/* <div style={{ background: themeStyles.backgroundColor, padding: 24, minHeight: 380 }}> */}
        <AnimatePresence onExitComplete={true} initial={false} mode="wait">
          <Routes location={location}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/abouts"
              element={
                <PageWrapper>
                  <AboutMe />
                </PageWrapper>
              }
            />
            <Route
              path="/projects"
              element={
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              }
            />
            <Route
              path="/resume"
              element={
                <PageWrapper>
                  <Resume />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/blogs"
              element={
                <PageWrapper>
                  <Blogs />
                </PageWrapper>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageWrapper>
                  <Gallery />
                </PageWrapper>
              }
            />
            <Route
              path="/project/:projectId"
              element={
                <PageWrapper>
                  <ProjectDetail />
                </PageWrapper>
              }
            />
            <Route
              path="/story"
              element={
                <PageWrapper>
                  <StoryTime />
                </PageWrapper>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageWrapper>
                  <Privacy />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
        {/* </div> */}
        <SiteFooter/>
      </Content>
    </Layout>
  );
};

const PageWrapper = ({ children }) => {
  const animation = getRandomAnimation();
  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
