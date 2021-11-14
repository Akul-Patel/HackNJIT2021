import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


function ProfileButton() {
    const history = useNavigate();

    return ( 
        
            <Button onClick={() => history('/profile_button')}>Profile</Button>
            
    
    
    );
    
}

export default ProfileButton