import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { selectedBuilding, data } = this.props;

		const displayInfo = (building) => {
			if (!building) {
				return (
					<div>
						{' '}
						<i>Click on a name to view more information</i>
					</div>
				);
			}
			const { code, name, address, coordinates } = building;
			return (
				<div className="building-info">
					<b>Code: </b> {code}
					<br />
					<b>Name: </b> {name}
					<br />
					<b>Address: </b> {address}
					<br />
					<b>Coordinates: </b> {coordinates && `${coordinates.latitude}, ${coordinates.longitude}`}
				</div>
			);
		};
		const clicked = displayInfo(data.find((building) => building.id === selectedBuilding));

		return <div>{clicked}</div>;
	}
}
export default ViewBuilding;
