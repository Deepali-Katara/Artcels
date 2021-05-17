// import React, { Component } from 'react';
// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// export class Googlemaps extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
     
//       address: '',

//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
  
//       mapCenter: {
//         lat: 27.411686,
//         lng: 77.825673
//       }
//     };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => {
//         console.log('Success', latLng);
//         this.setState({address}
//             )
//         this.setState({ mapCenter: latLng });

//       })
//       .catch(error => console.error('Error', error));
//   };
 
//   render() {
//     return (

//       <div id='googleMaps'>
//            <h1 align="center">Google Map with React</h1>
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
//         >
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
//               <input
//                 {...getInputProps({
//                   placeholder: 'Search Places ...',
//                   className: 'location-search-input',
//                 })}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map(suggestion => {
//                   const className = suggestion.active
//                     ? 'suggestion-item--active'
//                     : 'suggestion-item';
//                   // inline style for demonstration purpose
//                   const style = suggestion.active
//                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })}
//                     >
//                       <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>
      

//         <Map 
//           google={this.props.google}
//           initialCenter={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//           center={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//         >
//           <Marker 
//             position={{
//               lat: this.state.mapCenter.lat,
//               lng: this.state.mapCenter.lng
//             }} />
//         </Map>
//       </div>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyDiKmRh2vEg2hiV1ZIVeyNlxPjVegpChvE')
// })(Googlemaps)

import React from "react";
import GoogleMapReact, {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Circle
} from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export class Googlemaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      destinationaddress: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace:{},
      mapCenter: {
        lat: 27.411686,
         
        lng: 77.825673,
      },
      source: {
        lat: null,
        lng: null
      },
      destination: {
        lat: null,
        lng: null
      },
    };
  }

 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

 

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ address });
        this.setState({ source: latLng });
      })
      .catch((error) => console.error("Error", error));
  };


  handleChangeD = (destinationaddress) => {
    this.setState({ destinationaddress });
  };

  handleSelectD = (destinationaddress) => {
    geocodeByAddress(destinationaddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ destinationaddress });
        this.setState({ destination: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  distance = (lat1, lon1, lat2, lon2) => {
    var p = 3.14 / 100;
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c (lat2 * p)
    (1 - c((lon2 - lon1) * p))/2;
    return 12742 * Math.asin(Math.sqrt(a))
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Google Maps </h1>
        <div style={{display:"flex",flexDirection:"row",justifyContent:'space-around',marginBottom:"15px"}}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Source",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                 
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <PlacesAutocomplete
          value={this.state.destinationaddress}
          onChange={this.handleChangeD}
          onSelect={this.handleSelectD}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Destination",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
              
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        </div>
        <Map
          google={this.props.google}
          initialCenter={
            this.state.mapCenter
          }
          center={{
            lat: (this.state.source.lat + this.state.destination.lat) / 2,
            lng: (this.state.source.lng + this.state.destination.lng) / 2,
          }}
          disableDoubleClickZoom={true}
         debounced={true}
         hoverDistance={140}


          onMouseover={this.onMapClicked}
        >

          <Marker position={this.state.source} name={this.state.address} onClick={this.onMarkerClick}/>
          <Marker position={this.state.destination} name={this.state.destinationaddress} onClick={this.onMarkerClick}/>


          {this.state.destinationaddress ? console.log("Distance between " + this.distance(this.state.source.lat, this.state.source.lng, this.state.destination.lat, this.state.destination.lng)) : null}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: "AIzaSyDiKmRh2vEg2hiV1ZIVeyNlxPjVegpChvE",
  LoadingContainer: LoadingContainer,
})(Googlemaps);

