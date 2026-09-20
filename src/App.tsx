import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AntonioNicole from "./invitations/matrimonios/antonio-nicole/AntonioNicole";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/matrimonios/antonio-nicole"
        element={<AntonioNicole />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
