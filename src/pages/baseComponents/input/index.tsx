import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsInput } from 'blip-ds/dist/blip-ds-react/components';

const Input = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Input
              </BdsTypo>
              <BdsTypo variant="fs-16">Os inputs são usados para que os usuários insiram e editem textos.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsInput placeholder="placeholder" label="label do input"></BdsInput>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Input;
