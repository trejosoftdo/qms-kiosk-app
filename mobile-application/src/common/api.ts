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
  deviceCode?: string;
  userCode?: string;
};

export type DeviceAuthData = {
  refreshToken: string;
  accessToken: string;
  pending?: boolean;
};

/**
 * To simulate a delay
 * @param  {NoSubstitutionTemplateLiteral} timeout
 * @returns Promise<void>
 */
const delay = (timeout: number): Promise<void> => new Promise((resolve): void => {
  setTimeout(resolve, timeout);
});


/**
 * Load services data
 * @returns Promise<ServicesData>
 */
export const loadServices = async (categoryId: number): Promise<ServicesData> => {
  await delay(2000);
  return {
    total: 3,
    items: [
      {
        id: 'results-id',
        name: 'results',
        label: 'Resultados',
        icon: 'file-multiple',
        categoryId,
      },
      {
        id: 'analysis-id',
        name: 'analysis',
        label: 'Analisis',
        icon: 'poll',
        categoryId,
      },
      {
        id: 'information-id',
        name: 'information',
        label: 'Informacion',
        icon: 'information',
        categoryId,
      },
      {
        id: 'general-id',
        name: 'general',
        label: 'General',
        icon: 'web',
        categoryId,
      }
    ],
  };
};

/**
 * Load categories data
 * @returns Promise<CategoriesData>
 */
export const loadCategories = async (): Promise<CategoriesData> => {
  await delay(2000);
  return {
    total: 3,
    items: [
      {
        id: 'category-1',
        name: 'results',
        label: 'Categoria I',
        icon: 'file-multiple',
      },
      {
        id: 'category-2',
        name: 'analysis',
        label: 'Categoria II',
        icon: 'poll',
      },
      {
        id: 'category-3',
        name: 'information',
        label: 'Categoria III',
        icon: 'information',
      },
      {
        id: 'category-4',
        name: 'cat4',
        label: 'Categoria IV',
        icon: 'web',
      }
    ],
  };
};

/**
 * Loads ticket details
 * @param  {string} service
 * @returns Promise<TicketDetailsData>
 */
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


/**
 * Connects a device
 * @returns Promise<DeviceConnectionData>
 */
export const connectDevice = async (): Promise<DeviceConnectionData> => {
  await delay(2000);
  return {
    deviceCode: 'DC-12345',
    userCode: '123456',
  };
};

/**
 * Gets the tokens for the device
 * @param  {string} deviceCode
 * @returns Promise<DeviceAuthData>
 */
export const getTokensForDevice = async (deviceCode: string): Promise<DeviceAuthData> => {
  await delay(2000);
  return {
    refreshToken: 'testRefreshToken',
    accessToken: 'testAccessToken',
  };
};