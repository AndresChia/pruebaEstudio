import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArray, getIdentificacion } from '../Reducers'
import * as actions from './../Actions/index'
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types'


export class ListContainer extends Component {


    static propTypes = {
        array: PropTypes.array.isRequired,
        identificacion: PropTypes.string.isRequired,
        setArray: PropTypes.func.isRequired,
        setIdentificacion: PropTypes.func.isRequired,
    }



    componentDidMount() {

    }


    handleClick(event) {
        debugger

        const { setIdentificacion } = this.props;
        setIdentificacion("1023946708")

    }

    render() {
        const { identificacion } = this.props;
        return (
            <div>

                <h1>{identificacion} </h1>

                <button onClick={(event) => this.handleClick(event)}>boton</button>

            </div>
        )
    }
}


const mapDispatchToPropsActions = (dispatch) => bindActionCreators(actions, dispatch)


const mapStateToProps = (state) => ({
    array: getArray(state),
    identificacion: getIdentificacion(state)
})

export default connect(mapStateToProps, mapDispatchToPropsActions)(ListContainer)
