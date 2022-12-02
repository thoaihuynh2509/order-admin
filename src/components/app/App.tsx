import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./AppRoutes";
import AppLayout from 'components/layout/app-layout';

import "antd/dist/antd.min.css";

function App() {
  return (
   <BrowserRouter>
     <AppLayout>
       <AppRoutes />
     </AppLayout>
   </BrowserRouter>
  );
}

export default App;
