import React from 'react'
import { connect } from 'react-redux'
import { fetchSpells } from '../actions'
import Styled from 'styled-components'

const Spell = Styled.div
`
    width: 200px;
    height: 100px;
    background: lightblue;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 5px;
    opacity: 90%;
    h2{
        margin: 0 auto;
        margin-top: 35px;
        font-size: 15px;
    }
`
const SpellList = Styled.div
`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`
const AppDiv = Styled.div
`
    display: flex;
    flex-flow: column nowrap;
    button{
        width: 10%;
        height: 35px;
        padding:0.35em 1.2em;
        border:1px solid gray;
        margin: 0 auto;
        border-radius:0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-weight:300;
        font-size: 20px;
        color:#000000;
        text-align:center;
        transition: all 0.2s;
        margin-top: 70px;
        margin-bottom: 10px;
    }
    button:hover{
        background-color:#FFFFFF;
    }
    button:active{
        background: gray;
    }
    h1{
        background: white;
        margin: 0 auto;
        width: 100%;
        height: 50px;
        opacity: 90%;
        position: fixed;
        z-index: 4;
    }
`

function SpellsList(props) {
    console.log('SpellsList', props);
    return (
        <AppDiv>
            <h1>Dungeons and Dragons 5th Edition Spells</h1>
            <button onClick={() => props.dispatch(fetchSpells())}>Get Spells List</button>
            {props.isFetching && <div>loading...</div>}
            {props.error && <div>{props.error.message}</div>}
            <SpellList>
                {props.spells.map(p => {
                    return (
                    <Spell key={p.name}>
                        <h2>{p.name}</h2>
                    </Spell>
                )})}
            </SpellList>
        </AppDiv>
    );
}

const mapDispatchToProps = {
    fetchSpells
};

export default connect(state => {
    console.log('mapStateToProps.STATE', state);
    return state;
})(SpellsList);