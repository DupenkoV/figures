import React from "react";
import "./inputColumn.css"

export default class InputColumn extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfColumns: 4
        }
    }

    componentDidMount() {
        this.props.getNumberOfColumns(this.state.numberOfColumns)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.numberOfColumns !== this.state.numberOfColumns) {
            this.props.getNumberOfColumns(this.state.numberOfColumns)
        }
    }

    handleChange = (event) => {
        this.setState({numberOfColumns: event.target.value})
    }

    

    render() {
        return (
            <div className="form-group">
                <label htmlFor="column" className="form-label mt-4">колонок</label>
                <select className="form-select" id="column" value={this.state.numberOfColumns} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        )
    }
}