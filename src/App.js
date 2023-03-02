import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { HomeOutlined} from '@ant-design/icons';
import HomePage from './homePage/homePage';
import DetailsProduct from './detailsProduct/detailsProduct';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/"><HomeOutlined style={{fontSize: 24, width: 40}} /></Link></Menu.Item>
            <Menu.Item key="2"><Link to="/events">Sự kiện</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/birthday">Sinh nhật</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/gifts">Quà tặng</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/products">Cửa hàng</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/cart">Giỏ hàng</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/contact">Contact</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Contact />} />
            <Route path='/detailProduct' element={<DetailsProduct />} />
          </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Dev by Phạm Thanh Nhiên</Footer>
      </Layout>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default App;