import AppWidget from "../components/AppWidget";

interface HomeProps {
}

const Home: React.FC<HomeProps> = ( {  }) => {
  return (
    <div>
      <h1>This is the home screen</h1>

      <AppWidget appName="app1" appDescription='this is app1'/>
      <AppWidget appName="app2" appDescription='this is app2' />
    </div>
  );
};

export default Home;