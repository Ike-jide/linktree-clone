import React from "react";
import './LinksPage.css';



function LinksPage(){
    return(
        <div className="links">
             <ul>               
             <li id='twitter__@'>
                <a target="_blank" rel="noreferrer"className="fcc-btn"href="https://twitter.com/home"
                 title="Read more about failed elephant evacuation </br> this is working"><span>Twitter Link
                    </span></a></li>
             <li id='btn__zuri'>
                <a target="_blank" rel="noreferrer"className="fcc-btn1" href="https://training.zuri.team/"
                 title="The zuri theme books"><span>Zuri Team</span></a></li>
             <li id='books'>ref_id="Harry"<a target="_blank" rel="noreferrer"className="fcc-btn2" href="http://books.zuri.team"><span>Zuri Books</span><span className="subtext">this works</span></a></li>
             <li id='book__python'><a target="_blank" rel="noreferrer"className="fcc-btn3" href="https://books.zuri.team"><span>Python Books</span><span className="subtext2">this works</span></a></li>
             <li id='pitch'><a target="_blank" rel="noreferrer"className="fcc-btn4" href="https://background.zuri.team"><span>Background Check for Coders</span><span className="subtext3">this works</span></a></li>
             <li id='book__design'><a target="_blank" rel="noreferrer"className="fcc-btn5" href="https://books.zuri.team/design-rules"><span>Design Books</span><span className="subtext4">this works</span></a></li>
             </ul>
        </div>
    )
}
export default LinksPage;