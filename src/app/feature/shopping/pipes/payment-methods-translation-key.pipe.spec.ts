import { PaymentMethodsTranslationKeyPipe } from './payment-methods-translation-key.pipe';

describe('PaymentMethodsTranslationKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new PaymentMethodsTranslationKeyPipe();
    expect(pipe).toBeTruthy();
  });
});
