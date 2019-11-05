import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: [],
      codeText: '',
      nameText: ''
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    const newSet = this.state.selectedBuilding.concat(id)
    this.setState({
      selectedBuilding: newSet
    })
  }

  addBuilding(codeValue, nameValue) {
    this.setState({
      codeText: codeValue,
      nameText: nameValue
      //addrInput: address
    })
  }


  render() {
     
    return (
      <div className="bg">
        <div className="row1">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>

            <div className="column2"> 
              <div className="row">
                <ViewBuilding 
                  data={this.props.data}
                  selectedBuilding={this.state.selectedBuilding}
                /> 
              </div>
              <div className="row">
                <table>
                  <tr>
                    <th>
                      <b>Add a Building Here</b>
                    </th>
                  </tr>
                  <AddBuilding 
                    codeText={this.state.codeText}
                    nameText={this.state.nameText}
                    addBuilding={this.addBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
