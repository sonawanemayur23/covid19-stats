import { Layout } from "antd";
 import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer";
import Content from "./components/Content";
export default function App() {
  return (
    <Layout>
      <Sidebar/>
      <Content />
      <Footer />
    </Layout>
  );
}
