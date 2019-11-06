import React from 'react';

class AddBuilding extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false,
			alert: '',
			code: '',
			name: '',
			address: '',
			latitude: '',
			longitude: ''
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { data, addBuilding } = this.props;
		const { code, name, address, latitude, longitude } = this.state;
		this.setState({ alert: '' });
		if (code === '' || name === '') {
			this.setState({
				alert: 'Name and Building Code are required'
			});
		} else {
			const id = data.length + 1;
			const newBuilding = {
				id,
				name,
				address,
				code,
				coordinates: {
					latitude,
					longitude
				}
			};
			addBuilding([ ...data, newBuilding ]);
			this.setState({
				code: '',
				name: '',
				address: '',
				latitude: '',
				longitude: '',
				expand: false
			});
		}
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { expand, alert } = this.state;

		if (!expand) {
			return (
				<div className=" text-center">
					<button onClick={(e) => this.setState({ expand: true })}>Add Building</button>
				</div>
			);
		}

		return (
			<div className="container ">
				<div className={alert.length ? 'alert alert-danger' : ''}>{alert}</div>

				<div className="form-group">
					<label className="control-label">
						{' '}
						<span className="text-danger">*</span> Code:
					</label>
					<input
						className="form-control"
						name="code"
						value={this.state.code}
						onChange={(e) => this.onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label>
						{' '}
						<span className="text-danger">*</span> Building Name:
					</label>
					<input
						className="form-control"
						name="name"
						value={this.state.name}
						onChange={(e) => this.onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label>Address:</label>
					<input
						className="form-control"
						name="address"
						value={this.state.address}
						onChange={(e) => this.onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label>Latitude:</label>
					<input
						className="form-control"
						name="latitude"
						value={this.state.latitude}
						onChange={(e) => this.onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label>Longitude:</label>
					<input
						className="form-control"
						name="longitude"
						value={this.state.longitude}
						onChange={(e) => this.onChange(e)}
					/>
				</div>
				<button onClick={this.onSubmit}>Add</button>
				<button className="ml-2" onClick={(e) => this.setState({ expand: false, alert: '' })}>
					Cancel
				</button>
			</div>
		);
	}
}

export default AddBuilding;
