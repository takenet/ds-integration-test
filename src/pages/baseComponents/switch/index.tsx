import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsSwitch } from 'blip-ds/dist/blip-ds-react/components';

const Switch = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Switch
              </BdsTypo>
              <BdsTypo variant="fs-16">
                A opção que o interruptor controla, juntamente com o estado atual, deve ser claramente explícita no
                rótulo em linha correspondente.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsSwitch refer="" id="switch" name="cb1" disabled={false} checked={true}></BdsSwitch>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Switch;
