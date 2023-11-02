import React from 'react'
import {Box, TextField, styled, Button} from '@mui/material';
import { useState } from 'react';

const Container = styled(Box)`
	margin: 100px auto;
	display:flex;
	align-items:center;
	flex-direction: column;
	width: 20%;
	& > div {
		margin-bottom: 20px;
	}
`
const ClearButton = styled(Button)`
	border-color:green;
	color:green;
`

const PostalCodeInput = ({onSearch, onClear}) => {
	const [postalCode, setPostalCode] = useState("");
	const handleInputChange = (e) => {
		setPostalCode(e.target.value);
	}

const handleSubmit = (e) => {
	e.preventDefault();
	onSearch(postalCode);
}

const handleClear = () => {
	onClear();
}

  return (
	<Container component="form">
		<TextField variant='outlined' label="Enter Zip Code" type='text' onChange={handleInputChange} value={postalCode}/>
		<Box>
			<Button variant='outlined' onClick={handleSubmit} style={{marginRight:10}}>Submit</Button>
			<ClearButton variant='outlined' onClick={handleClear}>Clear</ClearButton>
		</Box>
	</Container>
  )
}

export default PostalCodeInput