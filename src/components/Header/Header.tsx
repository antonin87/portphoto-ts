import React, { useState } from 'react';
import PhotoContext from '../../context/PhotoContext';
import Switch from '../ToggleSwitch/ToggleSwitch';

const Header = () => {

    const [rangeValue, setRangeValue] = useState(4);

    const handleRow = (e: any, setHeightGapGrid: (value: number) => void) => {
        setRangeValue(e.target.value);
        setHeightGapGrid(parseInt(e.target.value));
    }

    return (
            <React.Fragment>
                <PhotoContext.Consumer>
                {context => {
                        return (
                        <header className={`header header--${context.theme}`}>
                                <div className="slidecontainer">
                                        <input onChange={(e) => handleRow(e, context.setHeightGapGrid)} 
                                                type="range" 
                                                min="1"
                                                step='1'
                                                max="8" 
                                                value={`${rangeValue}`} 
                                                className="slider" 
                                                id="myRange" 
                                        />
                                </div>
                                <Switch 
                                theme="default"
                                className="d-flex"
                                enabled={false}
                                onStateChanged={(state: {enabled: boolean}) => context.toggleTheme(state)}
                                />
                        </header>
                        )
                        }}
                </PhotoContext.Consumer>
            </React.Fragment>
        
    )
}

export default Header;