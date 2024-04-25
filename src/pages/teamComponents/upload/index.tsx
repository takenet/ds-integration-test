import React, { useRef } from 'react';
import { BdsButton, BdsGrid, BdsPaper, BdsTypo, BdsUpload } from 'blip-ds/dist/blip-ds-react/components';

const Upload = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Upload
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O upload permite que os usuários selecionem arquivos e enviem para o destino pré-configurado.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" gap="2" direction="column">
              <BdsUpload
                id="8765-upload"
                multiple
                titleName="Title uploader"
                subtitle="Description uploades, e.g.: only .jpg files at 10mb or less"
                dtInputFiles="input-files"
                dtLabelAddFile="label-add-file"
                dtButtonDelete="button-delete"
              ></BdsUpload>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Upload;
