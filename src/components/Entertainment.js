import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Entertainment.css';
import '../styles/BaseLayout.css';
import Samsung from '../imgs/entertainment/Samsung.png';
import Insignia from '../imgs/entertainment/Insignia.png';
import Sony from '../imgs/entertainment/Sony.png';
import MacBook from '../imgs/entertainment/MacBook.png';
import Dell from '../imgs/entertainment/Dell.png';
import MacBook13 from '../imgs/entertainment/MacBook13.png';
import DellPrinter from '../imgs/entertainment/DellPrinter.png';
import HPOffice from '../imgs/entertainment/HPOffice.png';
import HPPrinter from '../imgs/entertainment/HPPrinter.png';

export default class Entertainment extends Component {
  render() {
    return(
      <div className='entertainmentDiv'>
        <div className='categoriesDiv'>
          <h1>Televisions</h1>
          <div className='products'>
            <p>'40 inch Samsung TV'</p>
            <img src={Samsung} />
            <h6>399.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>

          <div className='products'>
            <p>'50 inch Vizio TV'</p>
            <img src={Insignia} />
            <h6>599.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>

          <div className='products'>
            <p>'60 inch Sony TV'</p>
            <img src={Sony} />
            <h6>699.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
        </div>

        <div className='categoriesDiv'>
          <h1>Computers</h1>
          <div className='products'>
            <p>'15 inch MacBook Pro'</p>
            <img src={MacBook}/>
            <h6>999.99</h6>
            <a>add to cart</a>
          </div>

          <div className='products'>
            <p>'15 inch Dell Laptop'</p>
            <img src={Dell}/>
            <h6>199.99</h6>
            <a>
              add to cart
            </a>
          </div>
          <div className='products'>
            <p>'13 inch MacBook Pro'</p>
            <img src={MacBook13}/>
            <h6>699.99</h6>
            <a>add to cart</a>
          </div>
        </div>

        <div className='categoriesDiv'>
          <h1>Printers</h1>
          <div className='products'>
            <p>'Dell Color Printer'</p>
            <img src={DellPrinter}/>
            <h6>199.99</h6>
            <a>add to cart</a>
          </div>
          <div className='products'>
            <p>'HP 3D Printer'</p>
            <img src={HPPrinter}/>
            <h6>199.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
          <div className='products'>
            <p>'HP Office All in One Printer'</p>
            <img src={HPOffice}/>
            <h6>199.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
          </div>
      </div>
    )
  }
}
