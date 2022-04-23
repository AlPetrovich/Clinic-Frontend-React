import 'bulma/css/bulma.css'
import "@fortawesome/fontawesome-free/js/all"
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'


export const ClinicApp = () => {


  return (
  
     <Provider store={ store }>
        <AppRouter />
     </Provider> 
    
  )
      
}


