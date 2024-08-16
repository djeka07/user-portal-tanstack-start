import Link from '~/app/components/links/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { buttonWrapper, form, link } from './reset-form.css';
import resetFormSchema, { ResetFormData } from './reset-form.schema';
import { Button, Message, TextInput } from '@djeka07/ui';

const ResetForm = () => {
  const { t } = useTranslation();
  const { register, formState, handleSubmit } = useForm<ResetFormData>({
    resolver: zodResolver(resetFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form method="post" className={form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        label={t('form:login:input:email:label')}
        placeholder={t('form:login:input:email:placeholder')}
        error={formState.errors?.email?.message ? t(formState.errors.email.message) : undefined}
        {...register('email')}
      />
      <Message show={formState.isSubmitSuccessful} success>
        {t('form:reset:success')}
      </Message>
      <div className={buttonWrapper}>
        <Button isLoading={formState.isSubmitting} type="submit">
          {t('form:reset:button')}
        </Button>
        <Link className={link} href="/login">
          {t('form:reset:link:login')}
        </Link>
      </div>
    </form>
  );
};

export default ResetForm;
