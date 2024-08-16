import { useTranslation } from 'react-i18next';
import { ResetForm } from '~/auth/components/reset-forms';
import { Typography } from '@djeka07/ui';

const ResetView = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h1" color="heading">
        {t('form:reset:title')}
      </Typography>
      <ResetForm />
    </>
  );
};

export default ResetView;
