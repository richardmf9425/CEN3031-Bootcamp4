import React from 'react';

class BuilingList extends React.Component {
	render() {
		const { data, selectedUpdate, filterText, removeBuilding } = this.props;

		const buildingList = data
			.filter(
				(building) =>
					!filterText ||
					(building.code.toLowerCase().includes(filterText) ||
						building.name.toLowerCase().includes(filterText))
			)
			.map((building) => {
				return (
					<tr key={building.id}>
						<td onClick={(e) => selectedUpdate(building.id)}>{building.code}</td>
						<td onClick={(e) => selectedUpdate(building.id)}>{building.name}</td>
						<td onClick={(e) => removeBuilding(building.id)}>
							<span className="delete">
								<i className="fas fa-trash-alt" />
							</span>
						</td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
