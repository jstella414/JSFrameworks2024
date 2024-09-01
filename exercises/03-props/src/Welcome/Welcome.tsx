type WelcomeProps = {
  name?: string,
};

function Welcome({ name = "user" }: WelcomeProps){
    return <p>hello {name}</p>;
  };

export default Welcome;
