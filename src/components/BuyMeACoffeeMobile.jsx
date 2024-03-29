import { Fragment } from "react"


const BuyMeACoffeeMobile = function(){
    const copyRight = new Date().getFullYear();
   return( 
        <Fragment>
            <section className="text-center mb-2">
            <hr className="mt-5"></hr> 
                <h3 className="mt-3">Donate</h3>
                <h5 className="mt-3 mb-3"><a title="Buy Me A Coffee" href="https://buymeacoffee.com/jonlangner" className="donate-btn lni lni-coffee-cup"> Buy me a coffee</a> </h5>
                <hr></hr>
                <h6 className="mt-5 text-center">&#169; {copyRight} All rights reserved.</h6>  
            </section>
        </Fragment>      
    );
}


export default BuyMeACoffeeMobile;