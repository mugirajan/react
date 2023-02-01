import React from "react";
import './header.css'

const Header=(param)=>{
    return <section>
            <h1>{param.data}</h1>
            <div class="img">
            <img src="https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489__340.jpg"></img>
            </div>
            <h1 className="h1">Seeking for something</h1>
            </section>
    
}
export default Header
