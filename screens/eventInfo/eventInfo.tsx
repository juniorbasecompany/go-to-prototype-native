import React from 'react';

import axios from 'axios';
import { Image, Text, View } from 'react-native';

import { BASE_URL } from '../../api/config';
import { GoToContext } from '../../contexts';
import { styles } from './eventInfo.style';

export const EventInfo = () => {
  const context = React.useContext(GoToContext);

  const initialValues = [
    {
      name: '',
      description: '',
      info: '',
    },
    {
      name: '',
      region: '',
    },
    {
      temperature: '',
    },
  ];

  const [events, setEvents] = React.useState<any>(initialValues);

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/productList?guid=${context.guid}`)
      .then((response) => {
        setEvents([
          {
            name: response.data[0].eventList[0].event.info.name,
            description: response.data[0].eventList[0].event.info.description,
            image: response.data[0].eventList[0].event.info.image,
          },
          {
            name: response.data[0].eventList[1].event.info.name,
            region: response.data[0].eventList[1].event.info.region,
          },
          {
            temperature: response.data[0].eventList[2].event.info.temperature,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axios]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>
          {events[0].name}
          {'\n'}
          <Image
            source={{ uri: events[0].image }}
            style={{
              width: 80,
              height: 80,
            }}
          />
          {'\n'}
          {events[0].description}
        </Text>
        <Text style={styles.title}>
          {events[1].name}
          {'\n'}
          {events[1].region}
        </Text>
        <Text style={styles.title}>{events[2].temperature}</Text>
      </View>
    </View>
  );
};
