import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';
import AppLightTheme from '../../common/theme';


/**
 * ConnectFormProps defines the props for the Connect Form Component.
 *
 * @property onSubmit - form on submit handler
 */
interface ConnectFormProps {
  onSubmit: (applicationId: string) => void;
}

/**
 * A component a connect form
 *
 * @param {ConnectFormProps} props - The props for the Connect Form component.
 */
const ConnectForm: React.FC<ConnectFormProps> = (props: ConnectFormProps) => {
  const { t } = useTranslation();
  const [applicationId, setApplicationId] = React.useState('');
  return (
    <Card style={styles.container} mode="outlined">
      <Card.Content>
        <TextInput
          style={styles.input}
          label={t('translation:application')}
          value={applicationId}
          onChangeText={text => setApplicationId(text)}
          type="flat"
          left={<TextInput.Icon icon="application-brackets-outline" />}
        />
      </Card.Content>
      <Card.Actions style={styles.action}>
        <ActionButton
          icon="connection"
          message={t('translation:connect')}
          onPress={() => {
            props.onSubmit(applicationId);
          }}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: AppLightTheme.colors.background,
  },
  action: {
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 16,
  },
  input: {
    backgroundColor: AppLightTheme.colors.background,
  }
});


export default ConnectForm;