"use client"
import store from "@/redux/store";
import { Provider } from "react-redux";
import Home from "./home";

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}
