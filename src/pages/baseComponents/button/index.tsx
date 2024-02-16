import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

const Button = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Button
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O BlipDS inclui vários estilos de botões predefinidos, cada um servindo a seu próprio propósito
                semântico, com alguns extras adicionados para mais controle.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsButton id="2178-should" variant="primary" icon="file-new" size="standard" dataTest="should-button">
                Button
              </BdsButton>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Button;
