import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock } from 'react-icons/fi';

import IconTextField from '../../components/Common/IconTextField';
import SolidButton from '../../components/Common/SolidButton';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

const RenewPasswordForm: React.FC = () => {
  const renewFormRef = useRef<FormHandles>(null);

  return (
    <Form ref={renewFormRef} onSubmit={() => null}>
      <IconTextField
        icon={FiKey}
        name="code"
        id="code-field"
        placeholder="Código"
      />
      <IconTextField
        icon={FiLock}
        name="new-password"
        id="new-password-field"
        placeholder="Coloque sua nova senha"
      />
      <IconTextField
        icon={FiLock}
        name="confirm-new-password"
        id="confirm-new-password-field"
        placeholder="Confirme sua nova senha"
      />
      <SolidButton text="Renovar senha" />
    </Form>
  );
};

export default RenewPasswordForm;
