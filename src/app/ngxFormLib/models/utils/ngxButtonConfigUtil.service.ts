import { Injectable } from '@angular/core';
import { NgxButtonConfig } from '../NgxButtonConfig';

@Injectable({
  providedIn: 'root',
})
export class NgxButtonConfigService {
  mergeConfigs(
    baseConfig: NgxButtonConfig,
    overrideConfig: Partial<NgxButtonConfig>
  ): NgxButtonConfig {
    return { ...baseConfig, ...overrideConfig };
  }
  validateConfig(config: NgxButtonConfig): boolean {
    const colorRegex = /^#([0-9A-F]{3}){1,2}$/i;
    const unitRegex = /^(\d+(\.\d+)?(px|em|rem|%)?)$/;

    return (
      colorRegex.test(config.color) &&
      colorRegex.test(config.background) &&
      unitRegex.test(config.fontSize) &&
      unitRegex.test(config.width) &&
      unitRegex.test(config.height) &&
      unitRegex.test(config.top) &&
      unitRegex.test(config.right) &&
      unitRegex.test(config.bottom) &&
      unitRegex.test(config.left) &&
      unitRegex.test(config.height)
    );
  }
  generateCssStyle(config: NgxButtonConfig): string {
    return `
      color: ${config.color};
      background: ${config.background};
      font-size: ${config.fontSize};
      width: ${config.width};
      height: ${config.height};
      top: ${config.top};
      right: ${config.right};
      bottom: ${config.bottom};
      left: ${config.left};
    `;
  }
}
