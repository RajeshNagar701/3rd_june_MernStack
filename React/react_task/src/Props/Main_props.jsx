import React from 'react'
import Func_props from './Func_props'
import Class_props from './Class_props'

function Main_props() {
    return (
        <div className='container mt-5'>
            <div className='row'>

                <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-paradise-et00436621-1790070101.jpg" title="The Paradise" desc="The Paradise is a Period Action-Drama film that is set up in a slum of Secunderabad" />
                <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daayra-et00464392-1790048306.jpg" title="Daayra" desc="Inspired by true events, Daayra is a gripping investigative thriller that follows DCP" />
                <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/resident-evil-et00498183-1788341144.jpg" title="Resident Evil" desc="Follows a hapless courier tasked with delivering a package to a remote hospital. He soon" />
                <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-vvaan--force-of-the-forrest-et00444235-1790149303.jpg" title="The Vvaan " desc="Rishi returns to his ancestral village in Bihar to sell his inherited land, " />

                <hr />

                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-paradise-et00436621-1790070101.jpg" title="The Paradise" desc="The Paradise is a Period Action-Drama film that is set up in a slum of Secunderabad" />
                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daayra-et00464392-1790048306.jpg" title="Daayra" desc="Inspired by true events, Daayra is a gripping investigative thriller that follows DCP" />
                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/resident-evil-et00498183-1788341144.jpg" title="Resident Evil" desc="Follows a hapless courier tasked with delivering a package to a remote hospital. He soon" />
                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-vvaan--force-of-the-forrest-et00444235-1790149303.jpg" title="The Vvaan " desc="Rishi returns to his ancestral village in Bihar to sell his inherited land, " />

            </div>
        </div>
    )
}

export default Main_props