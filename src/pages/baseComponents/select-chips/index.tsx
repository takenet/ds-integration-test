import React, { useState } from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsSelectChips, BdsSelectOption } from 'blip-ds/dist/blip-ds-react/components';

const SelectChips = () => {
  const [dangerSelect, setDangerSelect] = useState(false);
  const [errorMessageSelect, setErrorMessageSelect] = useState('');
  const handleSelectChips = (event: CustomEvent) => {
    const data = event.detail.data;
    if (data.length > 4) {
      setDangerSelect(true);
      setErrorMessageSelect('Mensagem de erro');
    } else {
      setDangerSelect(false);
      setErrorMessageSelect('');
    }
  };
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Select Chips
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os componentes de select são usados ​​para coletar informações fornecidas pelo usuário em uma lista de
                opções.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsSelectChips
                id="7645-should"
                dataTest="open-select-chips"
                onBdsChangeChips={(ev) => handleSelectChips(ev)}
                danger={dangerSelect}
                errorMessage={errorMessageSelect}
                canAddNew={false}
              >
                <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
                <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
                <BdsSelectOption value="3">David Harbour</BdsSelectOption>
                <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
                <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
                <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
              </BdsSelectChips>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default SelectChips;
