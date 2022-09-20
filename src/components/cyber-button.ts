import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { CyberBaseElement } from './cyber-base';

import { FONT_SIZE_MAP } from '../constants/constants';

import { getTextShadow, getBoxShadow } from '../utilities/utilities';

import { Size, Color, ColorScale, Spread } from '../typings/typings';

export const tagName = 'cyber-button';

export class CyberButton extends CyberBaseElement {
  @property() disabled: boolean = false;
  @property() size: Size = 'md';
  @property() color: Color = 'teal';
  @property() colorScale: ColorScale = 500;
  @property() spread: Spread = 3;

  constructor() {
    super();
  }

  static styles = [
    css`
      button {
        font-family: 'Space Mono', system-ui, sans-serif;
        font-size: 48px;
        color: white;

        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 24px;

        padding: 8px;
      }
    `
  ];

  render() {
    const classes = {
      ...this.classes,
    }

    const styles = {
      fontSize: FONT_SIZE_MAP[this.size],
      textShadow: getTextShadow({
        color: this.color, 
        colorScale: this.colorScale,
        spread: this.spread,
      }),
      boxShadow: getBoxShadow({
        color: this.color, 
        colorScale: this.colorScale,
        spread: this.spread,
      }),

      borderRadius: '24px',
      ...this.styles
    }

    return html`
      <button class=${classMap(classes)} style=${styleMap(styles)} ?disabled="${this.disabled}" >
        <slot @slotchange=""></slot>
      </button>
    `;
  }
}

customElements.define(tagName, CyberButton);