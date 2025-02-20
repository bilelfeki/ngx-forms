import { Injectable } from '@angular/core';
import { NgxButtonConfig } from '../ngx-button-config';

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
    return true
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
      position: ${config.position};
      border-radius: ${config.borderRadius};
      border: ${config.border};
    `;
  }
}
