import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
  total: number;
};

const UsersInQueue: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
  <Text style={styles.container} variant="titleMedium">
    {t('translation:usersInQueue', { total: props.total })}
  </Text>
);
};

const styles = StyleSheet.create({
  container: {
    color: '#3c3744',
    paddingBottom: 32,
  },
});

export default UsersInQueue;