import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams } from 'expo-router';
import { AppView, Cards, ConditionalContainer } from '../../common/components';
import { goToPath } from '../../common/helpers';
import useCategories from '../../hooks/useCategories';



/**
 * ChooseCategoriesViewProps defines the props for the Choose Categories View Component.
 */
interface ChooseCategoriesViewProps {}

/**
 * A component that represents the view for choosing categories
 *
 * @param {ChooseCategoriesViewProps} props - The props for the Choose Categories View component.
 */
const ChooseCategoriesView: React.FC<ChooseCategoriesViewProps> = (props: ChooseCategoriesViewProps) => {
  const params = useLocalSearchParams();
  const {
    loading,
    data,
    error,
  } = useCategories();
  const { t } = useTranslation();
  const messageKey = loading ? 'translation:waitMessage' : 'translation:chooseCategoryMessage';
  return (
    <AppView
      headerMessage={t(messageKey)}
      loading={loading}
      error={error}
    >
      <ConditionalContainer display={!loading && data}>
        <Cards
          items={data?.items}
          onItemSelect={(item) => {
            goToPath(
              '/services',
              {
                customerName: params.customerName,
                categoryId: item.id,
                categoryLabel: item.label,
              });
          }}
        />
      </ConditionalContainer>
    </AppView>
  );
};

export default ChooseCategoriesView;