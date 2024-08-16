import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { form } from './new-password.css';
import newPasswordSchema, { NewPasswordData } from './new-password.schema';
import { Button, Message, TextInput } from '@djeka07/ui';

type NewPasswordFormProps = {
  email: string;
};

const NewPasswordForm = ({ email }: NewPasswordFormProps) => {
  const { handleSubmit, register, formState } = useForm<NewPasswordData>({
    resolver: zodResolver(newPasswordSchema),
  });
  const { t } = useTranslation();

  const data = { ok: false };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (!!data?.ok) {
      console.log('done');
    }
  }, [data?.ok]);

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        autoComplete="username"
        name="email"
        disabled
        label={t('form:login:input:email:label')}
        type="email"
        value={email}
      />
      <TextInput
        label={t('form:login:input:password:label')}
        placeholder={t('form:login:input:password:placeholder')}
        autoComplete="new-password"
        {...register('password')}
        error={formState.errors?.password?.message ? t(formState.errors.password.message) : undefined}
        type="password"
      />
      <TextInput
        label={t('form:register:input:confirm-password:label')}
        placeholder={t('form:register:input:confirm-password:placeholder')}
        autoComplete="new-password"
        {...register('confirmPassword')}
        error={formState.errors?.confirmPassword?.message ? t(formState.errors.confirmPassword.message) : undefined}
        type="password"
      />
      {!data?.ok ? (
        <Button type="submit">{t('common:button:confirm')}</Button>
      ) : (
        <Message success>Lösenorden är nu återställt</Message>
      )}
    </form>
  );
};

export default NewPasswordForm;
