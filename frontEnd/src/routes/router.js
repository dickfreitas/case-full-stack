import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "../Pages/Principal/Principal";
import DetailsUser from "../Pages/GetUserById/GetUserById";
import PetListing from "../Pages/ListPets/ListsPets";
import EditPet from "../Pages/RegisterPets/EditAppointmentDate";



const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<PrincipalPage/>}/>
          <Route path="/listPet" element={<PetListing/>}/>
          <Route path="/edit/:id" element={<EditPet/>} />
          <Route path="/listPet/:client_Id" element={<DetailsUser/>}/>
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;