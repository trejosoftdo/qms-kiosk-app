export type ServicesData = {
  total: number;
  items: {
    id: string;
    name: string;
    label: string;
    icon: string;
  }[];
};

export type TicketDetailsData = {
  details: {
    id: string;
    service: string;
    value: string;
  };
  usersInQueue: number;
};

export type DeviceConnectionData = {
  deviceCode: string;
  userCode: string;
};

export type DeviceAuthData = {
  refreshToken: string;
  accessToken: string;
  pending?: boolean;
};


const delay = (timeout): Promise<void> => new Promise((resolve): void => {
  setTimeout(resolve, timeout);
});

export const loadServices = async (): Promise<ServicesData> => {
  await delay(2000);
  return {
    total: 3,
    items: [
      {
        id: 'results-id',
        name: 'results',
        label: 'Resultados',
        icon: 'file-multiple',
      },
      {
        id: 'analysis-id',
        name: 'analysis',
        label: 'Analisis',
        icon: 'poll',
      },
      {
        id: 'information-id',
        name: 'information',
        label: 'Informacion',
        icon: 'information',
      }
    ],
  };
};

export const loadTicketDetails = async (service: string): Promise<TicketDetailsData> => {
  await delay(2000);
  const time = new Date().getTime().toString(); 
  return {
    details: {
      id: 'ticket-id',
      service,
      value: `${service.slice(0, 2).toUpperCase()}-${time.slice(time.length - 3)}`,
    },
    usersInQueue: 10,
  };
};

export const connectDevice = async (): Promise<DeviceConnectionData> => {
  await delay(2000);
  return {
    deviceCode: 'DC-12345',
    userCode: '123456',
  };
};

export const getTokensForDevice = async (deviceCode: string): Promise<DeviceAuthData> => {
  await delay(2000);
  return {
    refreshToken: 'testRefreshToken',
    accessToken: 'testAccessToken',
  };
};