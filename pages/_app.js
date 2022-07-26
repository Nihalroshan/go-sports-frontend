import MainLayout from "../components/layouts/mainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
