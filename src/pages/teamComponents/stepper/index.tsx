import React, { useEffect, useRef, useState } from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsStepper, BdsStep, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

export const Stepper = () => {
  const stepperElement = useRef<HTMLBdsStepperElement | null>(null);
  const [stepperComponent, setStepperComponent] = useState<HTMLBdsStepperElement | null>(null);
  const [elementsStep, setElementsStep] = useState<HTMLCollectionOf<HTMLBdsStepElement>>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStepperComponent(stepperElement?.current);
  }, [stepperElement]);

  useEffect(() => {
    const StepsElemts = stepperComponent?.getElementsByTagName('bds-step') as HTMLCollectionOf<HTMLBdsStepElement>;
    setElementsStep(StepsElemts);
  }, [stepperComponent]);

  useEffect(() => {
    if (elementsStep) elementsStep[0].active = true;
  }, [elementsStep]);

  const handleNextStep = async (element: HTMLBdsStepperElement | null, numberStep: number) => {
    const numberSteps = elementsStep ? elementsStep?.length - 1 : 0;
    const validValue = numberStep === numberSteps ? numberSteps : numberStep + 1;
    element?.setActiveStep(validValue);
    setStep(validValue);
  };

  const handlePreviousStep = async (element: HTMLBdsStepperElement | null, numberStep: number) => {
    const validValue = numberStep - 1 < 0 ? 0 : numberStep - 1;
    element?.setActiveStep(validValue);
    setStep(validValue);
  };

  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsGrid direction="column" xxs="10" padding="none" justifyContent="center" alignItems="stretch">
                <BdsStepper id="8145-sidebar" ref={stepperElement}>
                  <BdsStep>Step one 1</BdsStep>
                  <BdsStep>Step two 2</BdsStep>
                  <BdsStep>Step three 3</BdsStep>
                </BdsStepper>
              </BdsGrid>
              {step === 0 && 'Step one'}
              {step === 1 && 'Step two'}
              {step === 2 && 'Step three'}
              <BdsGrid>
                <BdsButton
                  variant="primary"
                  size="standard"
                  onBdsClick={() => handlePreviousStep(stepperComponent, step)}
                  disabled={step === 0}
                >
                  Etapa Anterior
                </BdsButton>
                {step === 2 ? (
                  <BdsButton variant="primary" size="standard">
                    Finalizar
                  </BdsButton>
                ) : (
                  <BdsButton
                    variant="primary"
                    size="standard"
                    onBdsClick={() => handleNextStep(stepperComponent, step)}
                  >
                    Próxima Etapa
                  </BdsButton>
                )}
              </BdsGrid>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};

export default Stepper;
