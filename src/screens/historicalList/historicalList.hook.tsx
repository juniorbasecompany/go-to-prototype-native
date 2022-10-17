import React from 'react';

import axios from 'axios';

import { API_URL, COLLECTION, DATABASE, DATA_SOURCE } from '@env';
import { useNavigation } from '@react-navigation/native';

import { header } from '../../configs/apiConfig';
import { GoToContext } from '../../contexts';

interface HistoricalListProps {
  itemList: any[];
  onClick: (guid: string) => void;
}

export const useHistoricalList = (): HistoricalListProps => {
  const context = React.useContext(GoToContext);
  const navigation = useNavigation();

  const [itemList, setItemList] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .post(
        'https://data.mongodb-api.com/app/data-pmwmo/endpoint/data/v1/action/findOne',
        {
          collection: 'go-to-collection',
          database: 'go-to-database',
          dataSource: 'Cluster0',
        },
        {
          headers: header,
        }
      )
      .then((response) => {
        setItemList(response.data.document.itemList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axios]);

  const handleOnClick = (guid: string) => {
    context.addGuid(guid);
    navigation.navigate('eventInfo');
  };

  return {
    itemList,
    onClick: handleOnClick,
  };
};
