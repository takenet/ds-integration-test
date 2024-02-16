import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsDatepicker } from 'blip-ds/dist/blip-ds-react/components';

const Datepicker = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Datepicker
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsDatepicker
                id="9663-datepicker"
                dtInputStart="should-input-start"
                dtInputEnd="should-input-end"
                dtOutzone="should-outzone"
                dtButtonPrev="should-button-prev"
                dtButtonNext="should-button-next"
                dtSelectMonth="should-select-month"
                dtSelectYear="should-select-year"
                dtButtonClear="should-button-clear"
                dtButtonConfirm="should-button-confirm"
                type-of-date="period"
                start-date-limit="31/12/2022"
                end-date-limit="01/01/2027"
              />
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Datepicker;
