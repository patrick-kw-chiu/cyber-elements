import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export const tagName = 'cyber-button';

export class CyberBaseElement extends LitElement {
  @property() classes = {};
  @property() styles = {};

}