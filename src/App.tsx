import axios from "axios";

const axiosGithubGraphQL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

const TITLE = "React GraphQL Github Client";

const App = () => (
  <div>
    <h1>{TITLE}</h1>
  </div>
);

export default App;
