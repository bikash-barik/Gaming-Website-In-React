import React from 'react'

const FeedView = (props) => {
  return (
    <div>
         <div className="muscular mt-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 className="heading">{props.heading}</h1>
            <p className="paragraph">{props.title}</p>
          </div>

          <div class="col">
              <a href="/viewmuscularsystem">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf4gkFqk1EUPCzVJIJ2uc1_YFn_cG0-ImnQ&usqp=CAU" alt="feed image" width="450" height="250" className=" shadow-lg bg-light rounded" />
              </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FeedView;


export const FeedViewLeft = (props) => {
    return (
        <div>
        <div className="muscular mt-5">
     <div class="container">
       <div class="row">
       <div class="col">
             <a href="/viewmuscularsystem">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf4gkFqk1EUPCzVJIJ2uc1_YFn_cG0-ImnQ&usqp=CAU" alt="feed image" width="450" height="250" className=" shadow-lg bg-light rounded" />
             </a>
         </div>
         <div class="col">
           <h1 className="heading">{props.heading}</h1>
           <p className="paragraph">{props.title}</p>
         </div>

        
       </div>
     </div>
   </div>
   </div>
    );
  };