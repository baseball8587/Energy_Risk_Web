from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut

def send_user_info(data):
    # Ensure 'data' is a dictionary with 'latitude' and 'longitude' keys
    latitude = data.get('latitude')
    longitude = data.get('longitude')

    # Initialize the geocoder
    geolocator = Nominatim(user_agent="geoapiExercises")

    try:
        # Use the geocoder to find the location based on latitude and longitude
        location = geolocator.reverse((latitude, longitude), exactly_one=True)
        
        # Extract the postal code (zipcode) from the location's address
        address = location.raw.get('address', {})
        zipcode = address.get('postcode')

        # Return the zipcode
        return zipcode
    except GeocoderTimedOut:
        return "Geocoder service timed out"

# Example usage:
data = {'latitude': 40.748817, 'longitude': -73.985428}
zipcode = send_user_info(data)
print(zipcode)
