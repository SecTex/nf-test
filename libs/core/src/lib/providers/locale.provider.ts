import { LOCALE_ID, Provider } from '@angular/core';
import { differentLocales } from '../constants/different-locales';
import { LocalizationService } from '../services/localization.service';
import { checkHasProp } from '../utils/common-utils';

export class LocaleId extends String {
  constructor(private readonly localizationService: LocalizationService) {
    super();
  }

  override toString(): string {
    const { currentLang } = this.localizationService;
    if (checkHasProp(differentLocales, currentLang)) {
      return differentLocales[currentLang];
    }
    return currentLang;
  }

  override valueOf(): string {
    return this.toString();
  }
}

export const LocaleProvider: Provider = {
  provide: LOCALE_ID,
  useClass: LocaleId,
  deps: [LocalizationService],
};
