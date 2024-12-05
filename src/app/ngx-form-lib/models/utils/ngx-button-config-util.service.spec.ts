import { TestBed } from '@angular/core/testing';

import { NgxButtonConfigService } from './ngx-button-config-util.service';
import { NgxButtonConfig } from '../ngx-button-config';
describe('buttonConfigTest', () => {
  let service: NgxButtonConfigService;
  let buttonConfig: NgxButtonConfig = {
    color: '#FFFFFF',
    background: '#FFFFFF',
    fontSize: '10px',
    width: '10px',
    height: '9px',
    top: '50px',
    right: '509.2px',
    bottom: '290px',
    left: '69.2px',
    position: 'absolute',
    border: '1px solid #3f51b5',
    borderRadius:'50px',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxButtonConfigService);
  });
  it('should generate  style as a string ', () => {
    let buttonConfigExpectedStyle =
    `color: #FFFFFF;
    background: #FFFFFF;
    font-size: 10px;
    width: 10px;
    height: 9px;
    top: 50px;
    right: 509.2px;
    bottom: 290px;
    left: 69.2px;
    position: absolute;
    border: 1px solid #3f51b5;
    border-radius: 50px;`
  ;
    let styleAsString = service.generateCssStyle(buttonConfig);

    let styleAsList:string[] = generateCleanStyleWithoutSpace(styleAsString);

    /**
     * remove the last element after split with ;
     */
    styleAsList.pop();
    let styleListReferenceWithoutSpace:string[] = generateCleanStyleWithoutSpace(buttonConfigExpectedStyle);

    let isStyleCoherent = styleAsList.every((elem) =>styleListReferenceWithoutSpace.find((element) => element === elem))
    expect(isStyleCoherent).toBe(true);
  });

  it('should verify that the style Has a good format', () => {
    expect(service.validateConfig(buttonConfig)).toBeTrue();
  });

  it('should fail when wrong color is provided', () => {
    let wrongColor = '#FFRR';
    let _buttonConfig = JSON.parse(JSON.stringify(buttonConfig));
    _buttonConfig.color = wrongColor;
    expect(service.validateConfig(_buttonConfig)).toBeFalse();
  });

  it('should fail when providing wrong unit ', () => {
    let top = '60e';
    let _buttonConfig = JSON.parse(JSON.stringify(buttonConfig));
    _buttonConfig.top = top;
    expect(service.validateConfig(_buttonConfig)).toBeFalse();
  });
});

function generateCleanStyleWithoutSpace(styleAsString: string) {
  return styleAsString.split(';').map((element) => element.trim());
}
