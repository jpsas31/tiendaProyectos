import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold max-md:text-4xl text-accent-content">Connecting Skills, Creating Opportunities – Your One-Stop Marketplace for Services.</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        Whether you&apos;re looking to offer your skills or hire expert services, our platform connects you with the right opportunities. Join now to start offering or hiring services across a wide range of fields.
        </p>
        <Link to="/add" className="btn m-4 btn-wide bg-blue-600 hover:bg-blue-500 text-white">Offer Your Services Now</Link>
        <Link to="/shop" className="btn m-4 btn-wide bg-blue-600 hover:bg-blue-500 text-white">Hire Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero