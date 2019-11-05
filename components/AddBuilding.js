import React from 'react';

class AddBuilding extends React.Component {
	render() {
		console.log('codeText.newCode', this.props.codeText)
		//console.log('nameText.newName', this.props.nameText)
		const {codeText, nameText, addBuilding} = this.props;
		return (
			<div>
                <tr>
                  <th>Code</th>
                  <th>
				  	<form>
						<input 
							type="text"
							ref='codeInput'
							placeholder="Type Code"
							value={codeText}
							onChange={() => {
								addBuilding(this.refs.codeInput.codeValue)
							}}
						/>
					</form>
				  </th>
                </tr>
				<tr>
                  <th>Name</th>
                  <th>
				  	<form>
						<input 
							type="text"
							ref='nameInput'
							placeholder="Type Name"
							value={nameText}
							onChange={() => {
								addBuilding(this.refs.nameInput.nameValue)
							}}
						/>
					</form>
				  </th>
                </tr>
				<tr>
                  <th>
				  	<form>
						<input 
							type="submit"
							value="Submit"
							//onClick={() => addBuilding(directory.id)}
						/>
					</form>
				  </th>
                </tr>

            </div>
		);
	}
}
export default AddBuilding;
