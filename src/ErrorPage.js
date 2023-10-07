import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

export default function Err404() {
    return(
        <Wrapper className="page_404">
            <div className="container">
                <div className="row">
                  <div className="col-sm-12 ">
                      <div className="col-sm-10 col-sm-offset-1">
                          <div className="four_zero_four_bg">
                              <h1 className="text-center ">404</h1>
                          </div>
                          <div className="contant_box_404">
                              <h3 className="h2">Look like you're lost</h3>
                              <p>the page you are looking for not avaible!</p>
                              <Link 
                                  to={'/'} 
                                  className='link_404'>
                                      <Button>Go To Home Page</Button>
                              </Link>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
    text-align: center;
    /* & img {
      width: 100%;
    } */
  
  
  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }
  
  .four_zero_four_bg h1 {
    font-size: 80px;
  }
  
  .four_zero_four_bg h3 {
    font-size: 80px;
  }
  
  .link_404 {
    padding: 10px 20px;
    margin: 20px 0;
    display: inline-block;
  }
  .contant_box_404 {
    margin-top: -50px;
  }
`