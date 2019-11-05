import React from 'react';

import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, CardHeader
  } from 'reactstrap';
	
		
class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;

		const selected = selectedBuilding.map(id => {
			const {name, address, coordinates} = data[id-1]
			
			return (
				<div>
					<Card>
						<CardBody>
							<CardHeader 
								className="text-center"  
								key={id}
							>
								{name}
							</CardHeader>

							{address && 
								<CardText>Address</CardText>
							}
							{address && 
								<CardText key={id}>{address}</CardText>
							}
							{coordinates && 
								<CardText>Latitude</CardText>
							}
							{coordinates && 
								<CardText key={id}>{coordinates.latitude}</CardText>
							}
							{coordinates && 
								<CardText>Longitude</CardText>
							}
							{coordinates && 
								<CardText key={id}>{coordinates.longitude}</CardText>
							}
														
						</CardBody>
					</Card>
				</div>
				
			)
			
		})

	

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<p>
					{selected}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
