import './App.css';
import Navbar from './components/Navbar';
import PostalCodeInput from './components/PostalCodeInput';
import LocationInfo from './components/LocationInfo';
import { useState } from 'react';
import { Box, styled, CircularProgress, Typography } from '@mui/material';

import { connect } from 'react-redux';
import {
  fetchLocationRequest,
  fetchLocationSuccess,
  fetchLocationFailure,
} from './redux/actions/locationAction';

// ...

const mapStateToProps = (state) => ({
  isLoading: state.location.isLoading,
  location: state.location.location,
  error: state.location.error,
});

const mapDispatchToProps = {
  onSearch: fetchLocationRequest,
  onLocationSuccess: fetchLocationSuccess,
  onLocationFailure: fetchLocationFailure,
};

connect(mapStateToProps, mapDispatchToProps)(App);


const Container = styled(Box)`
  max-width: 60%;
  margin: auto;
  text-align: center;
`;

const LoadingContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorContainer = styled(Container)`
  color: red;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (!response.ok) {
        throw new Error("Invalid postal code");
      }

      const data = await response.json();
      setLocation(data);
      setError(null);
    } catch (error) {
      console.log("Error while fetching data", error);
      setError("An error occurred while fetching the location information");
    } finally {
      setIsLoading(false);
    }
  }

  const clearLocationInfo = () => {
    setLocation(null);
    setError(null);
  }

  return (
    <div>
      <Navbar />
      <Container>
        <PostalCodeInput onSearch={fetchLocationInfo} onClear={clearLocationInfo} />
        {isLoading ? (
          <LoadingContainer>
            <CircularProgress />
            <Typography variant="h6" gutterBottom>
              Please wait while your data is being fetched...
            </Typography>
          </LoadingContainer>
        ) : error ? (
          <ErrorContainer>
            <Typography variant="h6" gutterBottom>
              {error}
            </Typography>
          </ErrorContainer>
        ) : (
          location && <LocationInfo location={location} />
        )}
      </Container>
    </div>
  );
}

export default App;
