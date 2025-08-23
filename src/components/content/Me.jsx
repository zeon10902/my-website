import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'


const Me = () => {
    return <div> 
        <Container>
            <div className='nav'>
                <Navbar>
                    <Nav>
                        <Nav.Link as={Link} to='/' ><label><span className='navLabel'>Projects</span></label></Nav.Link>
                        <Nav.Link as={Link} to='More' ><label><span className='navLabel'>More</span></label></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </Container> 
        

        <Outlet />
      
    </div>
}

export default Me
