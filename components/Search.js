import React from 'react'

class Search extends React.Component {
	render() {
		//console.log('filterText.value', this.props.filterText)
		const { filterText, filterUpdate} = this.props
		return (
			<form>
				<input 
					type="text" 
					ref='filterInput'
					placeholder="Type to Filter" 
					value={filterText}
					onChange={() => {
						filterUpdate(this.refs.filterInput.value)
					}}
				/>
			</form>
		);
	}
}
export default Search