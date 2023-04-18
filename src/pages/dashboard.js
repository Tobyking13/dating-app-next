import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import NavBar from "@/components/nav";
import CardCarousel from "@/components/cardCarousel";
import Footer from "@/components/footer";
import WelcomeBack from "@/components/welcomeBack";

const Dashboard = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="container">
          <WelcomeBack />
        </div>
        <div>
          <CardCarousel onClick={(e) => handleClick(e, card)}/>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = withPageAuthRequired(); // requires authenticated login to access page
