import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';

const Side = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`
const Container = styled.div`
    display: flex;
    gap: 2px;
`

export default function ProfilesPage() {
    const profiles = [1,2,3,4,5];
    return(
        <Container>
            <Side>
                {profiles.map((profile)=>(
                    <NavLink key={profile} to={`/profiles/${profile}`} className={({isActive})=>{
                        return isActive ? 'bg-blue-500' : '';
                    }}>
                        Profile {profile}
                    </NavLink>
                ))}
            </Side>
            <div>
                <Outlet/>
            </div>
        </Container>
    )
}