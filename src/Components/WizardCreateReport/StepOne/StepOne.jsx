import React, { useContext, useState } from 'react';
import './step-one.scss'
import { mainCtx } from '../../../App'


function StepOne(props) {

    const { candidatesList } = useContext(mainCtx)
    const [isSelected, setIsSelected] = useState(null)
    const [searchText, setSearchText] = useState("")

    const filteredCandidates = candidatesList.filter(e => { return e.name.toLowerCase().includes(searchText.toLowerCase()) }
    )


    return (
        <div className='candidates'>
            <input type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}>
            </input>
            {filteredCandidates.map(e =>
                <div className={e.id === isSelected ? 'candidate active' : 'candidate'}
                    onClick={() => {
                        setIsSelected(e.id)
                        props.setReport({ ...props.report, candidateId: e.id, candidateName: e.name })
                    }}>
                    <img src={e.avatar} alt="avatar" />
                    <div>
                        <h3>{e.name}</h3>
                        <p>{e.email}</p>
                    </div>
                </div>)}
        </div>
    );
}

export default StepOne;