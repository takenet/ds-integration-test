import React, { useState, useEffect } from 'react';

import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsSelectChips,
  BdsSwitch,
  BdsInputChips,
} from 'blip-ds/dist/blip-ds-react/components';

const SelectChips = () => {
  const [multiSelect, setMultiSelect] = useState(false);
  const [notValidIChips, setNotValidIChipsIChips] = useState<string[]>([]);
  const [errorIChips, setErrorIChips] = useState(false);
  const [errorMessageIChips, setErrorMessageIChips] = useState('');

  const mails = [
    { value: 'teste1@teste.com', label: 'teste1@teste.com' },
    { value: 'teste2@teste.com', label: 'teste2@teste.com' },
    { value: 'teste3@teste.com', label: 'teste3@teste.com' },
    { value: 'teste4@teste.com', label: 'teste4@teste.com' },
    { value: 'teste5@teste.com', label: 'teste5@teste.com' },
    { value: 'teste6@teste.com', label: 'teste6@teste.com' },
    { value: 'teste7@teste.com', label: 'teste7@teste.com' },
    { value: 'teste8@teste.com', label: 'teste8@teste.com' },
    { value: 'teste9@teste.com', label: 'teste9@teste.com' },
    { value: 'teste10@teste.com', label: 'teste10@teste.com' },
  ];

  useEffect(() => {
    if (notValidIChips.length > 0) {
      setErrorIChips(true);
      setErrorMessageIChips(`Os emails "${notValidIChips.toString()}" não existem no registro`);
    } else {
      setErrorIChips(false);
      setErrorMessageIChips('');
    }
  }, [notValidIChips]);

  const handleSelectChips = (event: CustomEvent) => {
    const data = event.detail.data;
    console.log('data', data);
  };

  const handleInputChips = (event: CustomEvent) => {
    const labelMails = mails.map((item) => item.label);
    const data = event.detail.data;
    let itensDiferent: string[] = [];
    data.map((x: any) => !labelMails.includes(x.split(' ').join('')) && itensDiferent.push(x));
    setNotValidIChipsIChips(itensDiferent);
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
              <BdsPaper bgColor="surface-0" border>
                <BdsGrid direction="column" padding="2" gap="2">
                  <BdsGrid justifyContent="space-between">
                    <BdsTypo variant="fs-16" bold="bold">
                      Seleção os Emails
                    </BdsTypo>
                    <BdsGrid gap="1" alignItems="center">
                      <BdsTypo variant="fs-12" margin={false}>
                        Seleção em massa
                      </BdsTypo>
                      <BdsSwitch onBdsChange={(ev) => setMultiSelect(ev.detail.checked)} name="" refer=""></BdsSwitch>
                    </BdsGrid>
                  </BdsGrid>
                  {multiSelect ? (
                    <BdsInputChips
                      label="Selecione os emails em massa"
                      helperMessage="Insira os emails seprados por vírgula"
                      onBdsChange={(ev) => handleInputChips(ev)}
                      danger={errorIChips}
                      errorMessage={errorMessageIChips}
                    ></BdsInputChips>
                  ) : (
                    <BdsSelectChips
                      id="7645-should"
                      dataTest="open-select-chips"
                      onBdsChangeChips={(ev) => handleSelectChips(ev)}
                      canAddNew={false}
                      label="Selecione os emails"
                      options={mails}
                    ></BdsSelectChips>
                  )}
                </BdsGrid>
              </BdsPaper>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default SelectChips;
