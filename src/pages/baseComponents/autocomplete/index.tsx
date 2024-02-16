import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsAutocomplete, BdsSelectOption } from 'blip-ds/dist/blip-ds-react/components';

const Autocomplete = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Autocomplete
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsAutocomplete
                id="9137-open"
                label="label"
                icon="email"
                value=""
                disabled={false}
                placeholder="Select"
                dataTest="open-autocomplete"
              >
                <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
                <BdsSelectOption id="3494-option" dataTest="should-option" value="2">
                  Finn Wolfhard
                </BdsSelectOption>
                <BdsSelectOption value="3">David Harbour</BdsSelectOption>
                <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
                <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
                <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
              </BdsAutocomplete>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Autocomplete;
