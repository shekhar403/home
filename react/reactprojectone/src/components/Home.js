import React from 'react'
import '../styles/Home.css';

function Home({name, fname}) {

  return (
    <div className='Navbar'>
        <h1 className='heading'>{name}</h1>
        <hr></hr>
        <h2 className='section'>About me : </h2>
        <div className='container'>
          <img src='https://freesvg.org/img/comic-boy.png' alt='profile' className='profile_pic'></img>
          <h5 className='profile_details'>Pellentesque habitant morbit tristique senectus et netus et malesuada fames ac turpis egestasy. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
          </h5>
        </div>
      </div>
  )
}

export default Home