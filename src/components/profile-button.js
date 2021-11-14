import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


function ProfileButton({name,picture}) {
    const history = useNavigate();

    return ( 
        
           <Button onClick={() => history('/profile_button')}>Hey, {name}</Button>
          
            
    
    
    );
    
}

export default ProfileButton