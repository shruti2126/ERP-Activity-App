
import "./App.css";
import {
  FrappeProvider,
  TokenParams,
  useFrappeGetDocList,
} from "frappe-react-sdk";
import Login from "./components/Auth/Login";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiSecret = import.meta.env.VITE_API_SECRET;
  const authToken = `${apiKey}:${apiSecret}`;
  const tokenParams: TokenParams = {
    useToken: true,
    token: () => authToken,
    type: "token",
  };
  return (
    <FrappeProvider
      enableSocket={true}
      url="http://127.0.0.1:5000"
      //tokenParams={tokenParams}
      socketPort={import.meta.env.VITE_SOCKET_PORT}
      siteName={import.meta.env.VITE_SITE_NAME}
    >
      <Login />
    </FrappeProvider>
  );
}
// const Test = () => {
//   const { data } = useFrappeGetDocList("User");
//   console.log("data = ", data);
//   return (
//     <div>
//       {data?.map((item) => (
//         <li key={item.name}>{item.name}</li>
//       ))}
//     </div>
//   );
// };
export default App;
