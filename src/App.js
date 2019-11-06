import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			filterText: '',
			selectedBuilding: 0
		};
	}

	filterUpdate = (value) => {
		value.toLowerCase();
		this.setState({ filterText: value });
	};

	selectedUpdate = (id) => {
		//Here you will need to update the selectedBuilding property of state to the id passed into this function
		this.setState({ selectedBuilding: id });
	};

	addBuilding = (newList) => {
		this.setState({ data: newList });
	};

	removeBuilding = (id) => {
		const { data } = this.state;
		const filteredList = data.filter((building) => building.id !== id);
		this.setState({ data: filteredList });
	};

	render() {
		return (
			<div className="bg">
				<div>
					<h1 className="text-center">UF Directory App</h1>
				</div>

				<Search filterUpdate={this.filterUpdate} />
				<AddBuilding data={this.state.data} addBuilding={this.addBuilding} />
				<main>
					<div className="table-headers" />
					<div className="row">
						<div className="column1">
							<div className="tableWrapper">
								<table className="table  table-striped table-dark table-borderless table-active  table-hover">
									<thead>
										<td>
											<b>Code</b>
										</td>
									</thead>
									<tbody>
										<BuildingList
											data={this.state.data}
											selectedUpdate={this.selectedUpdate}
											filterText={this.state.filterText}
											removeBuilding={this.removeBuilding}
										/>
									</tbody>
								</table>
							</div>
						</div>
						<div className="column2">
							<ViewBuilding data={this.state.data} selectedBuilding={this.state.selectedBuilding} />
						</div>
					</div>
					<Credit />
				</main>
			</div>
		);
	}
}

export default App;
