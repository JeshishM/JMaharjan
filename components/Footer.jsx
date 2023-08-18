import React, {Component} from 'react'
import Link from 'next/link'

class Footer extends Component{
render()
    {
        const current_year = new Date().getFullYear();
        return (
            <div id = "section_footer">
                <div className = 'text-center py-4'>
                    <p> JMaharjan @{current_year} </p>
                </div>
            </div>
        )
    }
}
export default Footer;
