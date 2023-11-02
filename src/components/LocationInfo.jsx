import React from 'react';
import { styled, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const LocationInfoContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
});

const LocationInfo = ({ location }) => {
  return (
    <LocationInfoContainer>
      <Typography variant="h4" gutterBottom>
        Location Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={`Post Code: ${location["post code"]}`} />
        </ListItem>
        <ListItem>
          <Typography variant="h5" gutterBottom>
            Places
          </Typography>
          <List>
            {location.places.map((place, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '10px',
                  marginBottom: '10px',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Place {index + 1}:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary={`State: ${place.state}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Place Name: ${place["place name"]}`} />
                  </ListItem>
                </List>
              </Box>
            ))}
          </List>
        </ListItem>
      </List>
    </LocationInfoContainer>
  );
}

export default LocationInfo;
