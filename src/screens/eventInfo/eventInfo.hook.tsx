import React from 'react';

import axios from 'axios';

import { API_URL, COLLECTION, DATABASE, DATA_SOURCE } from '@env';

import { header } from '../../configs/apiConfig';
import { GoToContext } from '../../contexts';

interface EventInfoProps {
  data: any[];
}

export const useEventInfo = (): EventInfoProps => {
  const context = React.useContext(GoToContext);
  const [data, setData] = React.useState<any[]>([]);

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
        const itemSelected = response.data.document.itemList.find(
          (item: any) => {
            return item.guid === context.guid;
          }
        );
        setData(itemSelected.eventList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axios]);

  return {
    data,
  };
};
