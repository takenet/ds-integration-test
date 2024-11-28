import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsAutocomplete, BdsSelectOption } from 'blip-ds/dist/blip-ds-react/components';

const Autocomplete = () => {
  const DATA = [
    { value: '1', label: 'Millie Bobby' },
    { value: '2', label: 'Finn Wolfhard' },
    { value: '3', label: 'David Harbour' },
    { value: '4', label: 'Gaten Matarazzo' },
    { value: '5', label: 'Caleb McLaughlin' },
    { value: '6', label: 'Noah Schnapp' },
  ];
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
                value="3"
                disabled={false}
                placeholder="Select"
                dataTest="open-autocomplete"
                options={DATA}
              ></BdsAutocomplete>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Autocomplete;
