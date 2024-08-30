import requests
import pandas as pd
import time


counter = 0

# Fetch elevation info for bike stations from open-elevation (thanks open-elevation!)
def get_elevation(lat, lon):
    global counter
    counter += 1
    url = f"https://api.open-elevation.com/api/v1/lookup?locations={lat},{lon}"
    # Sleep for half a second (0.5 seconds)
    time.sleep(0.5)
    response = requests.get(url).json()
    if counter % 10 == 0:
        print(counter)
    if response and response['results']:
        return response['results'][0]['elevation']
    return None


df = pd.read_csv('station_information.csv')

df['elevation'] = df.apply(lambda row: get_elevation(row['lat'], row['lon']), axis=1)
# drop all other columns
df = df[['station_id', 'elevation']]
df.to_csv('./station_elevation.csv', index='station_id')

print(df)