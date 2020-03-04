import React from "react";
import { connect } from "react-redux";
import { Spinner } from 'reactstrap';


import { getCharacter } from "../store/actions";
import CharacterCard from './CharacterCard';

const Character = ({ getCharacter, character, isFetching, error }) => {

    if (isFetching) {
        return (
            <div>
            <Spinner size="sm" color="info" />
            </div>
        );
    };
    if (error) {
        return <h2>{error}</h2>;
    };

    return (
        <div className='main-container'>
        <div className='card-deck'>
        {character.map(item =>
            <CharacterCard
                key={item.id}
                picture={item.picture}
                name={item.name}
                description={item.description}
                origin={item.origin}
            />
        )}
        </div>
        <button className='main-button' onClick={getCharacter}>Get characters!</button>
        </div>

    );
};
const mapStateToProps = state => {
    return {
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    };
};
export default connect(
    mapStateToProps,
    { getCharacter }
)(Character);