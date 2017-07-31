import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Books.css';
import '../styles/BaseLayout.css';
import books from '../imgs/books/BooksImg.jpeg';
import TheArtofWar from '../imgs/books/TheArtofWar.png';
import Laws from '../imgs/books/Laws.png';
import Outliers from '../imgs/books/Outliers.png';
import HarryPotter from '../imgs/books/HarryPotter.png';
import LordofTheRings from '../imgs/books/LordofTheRings.png';
import Goosebumps from '../imgs/books/Goosebumps.png';
import Cat from '../imgs/books/Cat.png';
import CuriousGeorge from '../imgs/books/curiousGeorge.png';
import Matilda from '../imgs/books/Matilda.png';

export default class Books extends Component {
  render() {
    return(
      <div className='booksDiv'>


        <div className='categoriesDiv'>
          <h1>Non-Fiction</h1>
          <div className='products'>
            <img src={TheArtofWar} />
            <p>'The Art of War'</p>
            <h6>19.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
          <div className='products'>
            <p>'48 Laws of Power'</p>
            <img src={Laws}/>
            <h6>9.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
          <div className='products'>
            <p>'Outliers'</p>
            <img src={Outliers}/>
            <h6>19.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
        </div>


        <div className='categoriesDiv'>
          <h1>Sci-Fi</h1>
          <div className='products'>
            <img src={HarryPotter}/>
          <p>'Harry Potter'</p>
          <h6>11.99</h6>
          <a href='#'>
            add to cart
          </a>
          </div>
          <div className='products'>
            <img src={LordofTheRings} />
            <p>'Lord of the Rings'</p>
            <h6>19.99</h6>
            <a href='#'>
              add
            </a>
          </div>
          <div className='products'>
            <img src={Goosebumps} />
            <p>'Goosebumps'</p>
            <h6>19.99</h6>
            <a href='#'>
              my
            </a>
          </div>
        </div>



        <div className='categoriesDiv'>
          <h1>Children</h1>
          <div className='products'>
            <img src={Cat}/>
            <p>'The Cat in the Hat '</p>
            <h6>19.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
          <div className='products'>
            <img src={Matilda}/>
            <p>'Matilda'</p>
            <h6>9.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
          <div className='products'>
            <p>'Curious George'</p>
            <img src={CuriousGeorge}/>
            <h6>19.99</h6>
            <a href='#'>
              add to cart
            </a>
          </div>
        </div>
      </div>
    )
  }
}
